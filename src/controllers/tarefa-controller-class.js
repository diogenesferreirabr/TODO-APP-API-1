const { bdTarefas } =require('../infra/bd.js')
const Tarefa = require('../models/tarefa.js')

class TarefaController {

    static rotas(app) {
        app.get('/tarefa', TarefaController.listar)
        app.post('/tarefa', TarefaController.inserir)
    }


    //ROTA GET
    static listar(req, res) {
        res.send(bdTarefas)
    }


    //ROTA POST
    static inserir(req, res) {
        res.send("Rota POST ativada com sucesso")
    }
}

module.exports = TarefaController