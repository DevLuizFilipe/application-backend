import express from 'express'
import cors from 'cors'

const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;

app.use(cors({
  origin: 'FRONTEND_URL'
}));

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log("Servidor rodando em http://localhost:${port}");
});
