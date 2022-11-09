import express from 'express'
import { calculateBmi } from './src/bmiCalculator'
import { calculateExercises, parseExerciseArguments } from './src/exerciseCalculator'
const app = express()
app.use(express.json())

app.get('/bmi', (req, res) => {
  const weight = req.query.weight
  const height = req.query.height

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!weight || !height) {
    res.status(400)
    res.send({ error: 'malformatted parameters' })
  }

  try {
    const bmi = calculateBmi(Number(height), Number(weight))

    res.send({
      weight,
      height,
      bmi
    })
  } catch (error) {
    res.status(400)
    res.send({ error: error.message })
  }
})

app.post('/exercises', (req, res) => {
  console.log(req.body)
  const dailyExercises = req.body.daily_exercises
  const dailyTarget = req.body.target

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!dailyExercises || !dailyTarget) {
    res.status(400)
    res.send({ error: 'parameters missing' })
  } else {
    try {
      const { target, dailyExerciseHours } = parseExerciseArguments(
        dailyTarget,
        dailyExercises
      )

      const result = calculateExercises(target, dailyExerciseHours)
      res.json(result)
    } catch (e) {
      res.status(400)
      res.send({ error: e.message })
    }
  }
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
