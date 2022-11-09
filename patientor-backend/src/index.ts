import express from 'express'
import cors from 'cors'
import patientorRouter from './routes/patientor'
const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api', patientorRouter)

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
