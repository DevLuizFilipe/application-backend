const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;

app.use(cors());

app.get('/api', (req, res) => {
  res.send('O Backend está rodando no ECS!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
