const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/pedidos', require('./routes/pedidosRoutes'))
app.use('/api/usuarios', require('./routes/usuariosRoutes'))
app.use('/api/productos', require('./routes/productosRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))