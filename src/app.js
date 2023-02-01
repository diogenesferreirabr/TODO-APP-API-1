const express = require('express')
const app = express()
const port = 3000

const usuario = require('./controllers/usuario-controller');
usuario(app);

const tarefa = require('./controllers/tarefa-controller');
tarefa(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})