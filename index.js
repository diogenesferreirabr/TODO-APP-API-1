const express = require('express')
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
  res.send("Rota ativada com GET e recurso USUARIO: valores de USUARIO devem ser retornados")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})