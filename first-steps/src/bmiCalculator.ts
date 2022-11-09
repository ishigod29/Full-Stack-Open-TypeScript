interface BmiValues {
  value1: number
  value2: number
}

export const parseArguments = (args: string[]): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

export const calculateBmi = (height: number, weight: number): string | number => {
  const heightInMt = height / 100
  const bmi = Math.round(weight / (heightInMt * heightInMt))

  if (bmi < 18.5) {
    console.log('Underweight')
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('Normal (healthy weight)')
    return 'Normal (healthy weight)'
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log('Overweight')
    return 'Overweight'
  } else if (bmi >= 30) {
    console.log('Obesity')
    return 'Obesity'
  }

  return bmi
}

try {
  const { value1, value2 } = parseArguments(process.argv)
  calculateBmi(value1, value2)
} catch (error) {
  console.log('Error, something bad happened, message: ', error.message)
}
