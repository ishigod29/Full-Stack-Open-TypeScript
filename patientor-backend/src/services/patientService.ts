import { v4 as uuidv4 } from 'uuid'
import patients from '../../data/patients'
import { PatientEntry, NewPatientEntry, BaseEntry } from '../types'

const getAllPatients = (): PatientEntry[] => {
  return patients
}

const findById = (id: string): PatientEntry => {
  const entry = patients.find(p => p.id === id)
  if (entry !== undefined && entry !== null) {
    const findedEntry = entry
    return findedEntry
  }

  throw new Error('not found')
}

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuidv4(),
    ...entry
  }
  patients.push(newPatientEntry)
  return newPatientEntry
}

const addEntry = (data: Omit<BaseEntry, 'id'>): BaseEntry => {
  const id: string = uuidv4()

  return { id, ...data }
}

export default {
  getAllPatients,
  addPatient,
  findById,
  addEntry
}
