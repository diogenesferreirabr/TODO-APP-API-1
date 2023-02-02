const express = require('express')
const app = express()
const port = 3000

const usuario = require('./controllers/usuario-controller');
usuarioGet(app);
usuarioPost(app);

const tarefa = require('./controllers/tarefa-controller');
tarefaGet(app);
tarefaPost(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})