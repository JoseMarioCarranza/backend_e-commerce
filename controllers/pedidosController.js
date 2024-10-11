const asyncHandler = require('express-async-handler')
const Pedido = require('../model/pedidosModel')
const Producto = require('../model/productosModel')

const getPedidos = asyncHandler(async (req, res) => {

    const pedidos = await Pedido.find({ user: req.user.id })

    res.status(200).json(pedidos)
})

const setPedidos = asyncHandler(async (req, res) => {

    if (!req.body.producto) {
        res.status(400)
        throw new Error('Falta producto')
    }

    productoExiste = await Producto.findById(req.body.producto)

    if (!productoExiste) {
        res.status(400)
        throw new Error(`El producto ${req.body.producto} no existe`)
    }

    if (!req.body.cantidad) {
        res.status(400)
        throw new Error('Falta cantidad')
    }

    if (!req.body.precio) {
        res.status(400)
        throw new Error('Falta precio')
    }

    const pedido = await Pedido.create({
        user: req.user.id,
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    })

    res.status(201).json({ pedido })
})

const updatePedidos = asyncHandler(async (req, res) => {

    const pedido = await Pedido.findById(req.params.id)

    if (!pedido) {
        res.status(400)
        throw new Error('El pedido no fué encontrado')
    }

    if (pedido.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Este pedido no le pertenece a este usuario')
    }

    if (req.body.producto && pedido.producto.toString() !== req.body.producto) {
        res.status(400)
        throw new Error('El producto no puede ser cambiado por uno diferente, usted puede solicitar la cancelacion de el pedido y hacer uno nuevo en caso de necesitarlo')
    }

    const pedidoUpdated = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(201).json(pedidoUpdated)

})

const deletePedidos = asyncHandler(async (req, res) => {

    const pedido = await Pedido.findById(req.params.id)

    if (!pedido) {
        res.status(400)
        throw new Error('El pedido no fué encontrado')
    }

    if (pedido.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Este pedido no le pertenece a este usuario')
    }

    await Pedido.deleteOne(pedido)

    res.status(201).json({ id: pedido.id })

})

module.exports = {
    getPedidos,
    setPedidos,
    updatePedidos,
    deletePedidos
}