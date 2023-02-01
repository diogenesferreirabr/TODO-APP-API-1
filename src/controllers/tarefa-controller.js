function tarefa(app) {

app.get('/tarefas', (req, res) => {
    res.send("Rota ativada com GET e recurso TAREFAS: valores de TAREFAS devem ser retornados")
  });

}

module.exports = tarefa;