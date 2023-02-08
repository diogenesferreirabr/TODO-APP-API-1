const { bdUsuarios } =require('../infra/bd.js')
const Usuario = require('../models/usuario.js')

class UsuarioController {

    static rotas(app) {
        app.get('/usuario', UsuarioController.listar)
        app.get('/usuario/email/:email', UsuarioController.buscarPorEmail)
        app.post('/usuario', UsuarioController.inserir)
        app.delete('/usuario/email/:email', UsuarioController.deletar)
    }


    //ROTA GET
    static listar(req, res) {
        
        res.send(bdUsuarios)
    }


    //ROTA GET de BUSCAR
    static buscarPorEmail(req, res) {
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)


    // se for vazio (se não usuario)
        if(!usuario){
            res.send("Usuario não encontrado")
        }
        res.send(usuario)
    }


    //ROTA POST
    static inserir(req, res) {
        const usuario = new Usuario(req.body.nome, req.body.email, req.body.senha)
        bdUsuarios.push(usuario)
        res.send(usuario.nome)
    }


    // ROTA DELETE
    static deletar(req, res) {
        

    const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email);


        if(!usuario){
            res.send("Usuario não encontrado")
        }


        const index = bdUsuarios.indexOf(usuario);
        bdUsuarios.splice(index,1);
        res.send({
            "Mensagem ": `O usuario do email ${usuario.email} foi deletado`
        });
    }
}
module.exports = UsuarioController