function tarefaGet(app) {

app.get('/tarefas', (req, res) => {
    res.send("Rota ativada com GET e recurso TAREFAS: valores de TAREFAS devem ser retornados")
  });
}

function tarefaPost (app) {

  app.post('/usuario', (req, res) => {
    res.send("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
    })
    };

module.exports = { tarefaGet, tarefaPost };