const asyncHandler = require('express-async-handler')

const getPedidos = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Obtener pedidos' })
})

const setPedidos = asyncHandler(async (req, res) => {

    if (!req.body.texto) {
        res.status(400)
        throw new Error('Falta texto')
    }

    console.log(req.body);

    res.status(201).json({ message: 'Crear pedido' })
})

const updatePedidos = asyncHandler(async (req, res) => {
    res.status(201).json({ message: `Modificar pedido ${req.params.id}` })
})

const deletePedidos = asyncHandler(async (req, res) => {
    res.status(201).json({ message: `Eliminar pedido ${req.params.id}` })
})

module.exports = {
    getPedidos,
    setPedidos,
    updatePedidos,
    deletePedidos
}