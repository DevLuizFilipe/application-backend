import express from 'express'
import { generateUploadURL } from './s3.js'

const app = express()

app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/api', async (req, res) => {
  const url = await generateUploadURL()
  res.send({ url })
})

app.listen(80, () => console.log("Ouvindo na porta 80"))
