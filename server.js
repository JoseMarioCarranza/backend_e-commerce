const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/pedidos', require('./routes/pedidosRoutes'))

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))