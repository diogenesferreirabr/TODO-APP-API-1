const { bdTarefas } =require('../infra/bd.js')
const Tarefa = require('../models/tarefa.js')

class TarefaController {

    static rotas(app) {
        app.get('/tarefa', TarefaController.listar)
        app.post('/tarefa', TarefaController.inserir)
        app.delete('/tarefa/titulo/:titulo', TarefaController.deletar)
        app.get('/tarefa/titulo/:titulo', TarefaController.buscarPorTitulo)
    }

    //ROTA GET de BUSCAR
    static buscarPorTitulo(req, res) {
        const tarefa = bdTarefas.find(tarefa => tarefa.titulo === req.params.titulo)


    // se for vazio (se não usuario)
        if(!tarefa){
            res.send("Tarefa não encontrada")
        }
        res.send(tarefa)
    }


    //ROTA GET
    static listar(req, res) {
        res.send(bdTarefas)
    }


    //ROTA POST
    static inserir(req, res) {
        const tarefa = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.criacao)
        bdTarefas.push(tarefa)
        res.send(tarefa.nome)
    }


    // ROTA DELETE
    static deletar(req, res) {
        

        const tarefa = bdTarefas.find(tarefa => tarefa.titulo === req.params.titulo);
    
    
            if(!tarefa){
                res.send("Tarefa não encontrada")
            }
    
    
            const index = bdTarefas.indexOf(tarefa);
            bdTarefas.splice(index,1);
            res.send({
                "Mensagem ": `A tarefa ${tarefa.titulo} foi deletada`
            });
        }
}

module.exports = TarefaController