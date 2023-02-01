function usuario (app) {
app.get('/usuario', (req, res) => {
  res.send("Rota ativada com GET e recurso USUARIO: valores de USUARIO devem ser retornados")
})
};

module.exports = usuario;