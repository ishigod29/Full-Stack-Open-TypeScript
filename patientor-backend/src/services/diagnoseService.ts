import diagnoses from '../../data/diagnoses'
import { DiagnoseEntry } from '../types'

const getAllDiagnoses = (): DiagnoseEntry[] => {
  return diagnoses
}

export default {
  getAllDiagnoses
}
