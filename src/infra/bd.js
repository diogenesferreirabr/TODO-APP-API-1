const Usuario = require('../models/usuario')
const Tarefa = require('../models/tarefa')

// Cria vários objetos e os adiciona a um array para simular uma lista de objetos
const bdUsuarios = []
const bdTarefas = []


// Ususários
// Cria objetos do tipo Usuario e adiciona a lista de usuarios
const usuario = new Usuario('Juan', 'juangomes.sales@gmail.com', '***')
bdUsuarios.push(usuario)

const usuario2 = new Usuario('Joao', 'joao.sales@gmail.com', '****')
bdUsuarios.push(usuario2)



// Tarefas
// Cria objetos do tipo Tarefa e adiciona a lista de tarefas
const tarefa = new Tarefa('Viajar', 'Amsterdan', 'Pendente', new Date())
bdTarefas.push(tarefa)

const tarefa2 = new Tarefa('Malhar', 'Malhar peito', 'Pendente', new Date())
bdTarefas.push(tarefa2)



// Exporta as listas de objetos
module.exports = { bdUsuarios, bdTarefas }