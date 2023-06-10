import express from 'express'
import { generateUploadURL } from './s3.js'

const app = express()

app.get('/api', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

app.listen(80, () => console.log("listening on port 80"))
