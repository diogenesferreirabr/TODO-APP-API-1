function usuarioGet (app) {
app.get('/usuario', (req, res) => {
  res.send("Rota ativada com GET e recurso USUARIO: valores de USUARIO devem ser retornados")
})
}

function usuarioPost (app) {
app.post('/usuario', (req, res) => {
  res.send("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
})
};

module.exports = { usuarioGet, usuarioPost }