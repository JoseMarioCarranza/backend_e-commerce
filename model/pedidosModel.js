const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    producto: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Producto' },
    cantidad: { type: Number, required: [true, 'Por favor teclea la cantidad de productos'] },
    precio: { type: Number, required: [true, 'Por favor teclea la cantidad total del pedido'] },
},
    { timestamps: true }
)

module.exports = mongoose.model('Pedido', pedidoSchema)