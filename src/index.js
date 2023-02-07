const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


const UsuarioController = require('./controllers/usuario-controller-class');
UsuarioController.rotas(app)

// const { usuarioGet, usuarioPost } = require('./controllers/usuario-controller');
// usuarioGet(app);
// usuarioPost(app);


const TarefaController = require('./controllers/tarefa-controller-class');
TarefaController.rotas(app)


// const { tarefaGet, tarefaPost } = require('./controllers/tarefa-controller');
// tarefaGet(app);
// tarefaPost(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})