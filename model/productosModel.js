const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre: { type: String, required: [true, 'Por favor teclea un nombre del producto'] },
    precio: { type: Number, required: [true, 'Por favor teclea el precio del producto'] },
},
    { timestamps: true }
)

module.exports = mongoose.model('Producto', productoSchema)