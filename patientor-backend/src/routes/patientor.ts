/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express'
import diagnoseService from '../services/diagnoseService'
import patientService from '../services/patientService'
import { toEntry, toNewPatientEntry } from '../utils'

const router = express.Router()

router.get('/patients', (_req, res) => {
  res.send(patientService.getAllPatients())
})

router.get('/patients/:id', (req, res) => {
  const patient = patientService.findById(req.params.id)
  if (patient !== null && patient !== undefined) {
    res.send(patient)
  }

  res.json({ erro: 'not found' })
})

router.post('/patients', (req, res) => {
  console.log(req.body)
  try {
    const newPatientEntry = toNewPatientEntry(req.body)
    const addedEntry = patientService.addPatient(newPatientEntry)
    res.json(addedEntry)
  } catch (e: any) {
    res.status(400).send({ error: e.message })
  }
})

router.post('/:id/entries', (req, res) => {
  const data = toEntry(req.body)
  const newObject = patientService.addEntry(data)

  res.json(newObject)
})

router.get('/diagnoses', (_req, res) => {
  res.send(diagnoseService.getAllDiagnoses())
})

export default router
