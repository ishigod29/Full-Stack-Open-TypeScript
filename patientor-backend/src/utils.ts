/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatientEntry, Gender, BaseEntry } from './types'

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

const parseName = (name: any): string => {
  console.log(name)
  if (name === null || !isString(name)) {
    const Name: string = name as string
    throw new Error(`Incorrect or missing name ${Name}`)
  }

  return name
}

const parseOccupation = (occupation: any): string => {
  if (occupation === null || !isString(occupation)) {
    const Occupation: string = occupation as string
    throw new Error(`Incorrect or missing occupation ${Occupation}`)
  }

  return occupation
}

const parseSsn = (ssn: any): string => {
  if (ssn === null || !isString(ssn)) {
    const Ssn: string = ssn as string
    throw new Error(`Incorrect or missing ssn ${Ssn}`)
  }

  return ssn
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseDate = (date: any): string => {
  if (date === null || !isString(date) || !isDate(date)) {
    const Date: string = date as string
    throw new Error(`Incorrect or missing date: ${Date}`)
  }
  return date
}

const isGender = (param: any): param is Gender => {
  const Param = param as Gender
  return Object.values(Gender).includes(Param)
}

const parseGender = (gender: any): Gender => {
  if (gender === null || !isGender(gender)) {
    const Genre: Gender = gender as Gender
    throw new Error(`Incorrect or missing gender: ${Genre}`)
  }
  return gender
}

const parseString = (text: any): string => {
  if (text === null || !isString(text)) {
    const Text: string = text as string
    throw new Error(`Incorrect or missing date: ${Text}`)
  }
  return text
}

const toNewPatientEntry = (object: any): NewPatientEntry => {
  return {
    name: parseName(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    entries: []
  }
}

const toEntry = (object: any): Omit<BaseEntry, 'id' > => {
  return {
    description: parseString(object.description),
    date: parseDate(object.date),
    specialist: parseString(object.specialist)
  }
}

export {
  toNewPatientEntry,
  toEntry
}
