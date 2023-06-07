const express = require('express');
const app = express();

const port = 3000;

app.get('/api', (req, res) => {
  res.send('O backend está funcionando');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
