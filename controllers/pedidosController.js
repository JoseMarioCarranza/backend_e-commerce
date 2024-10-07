const getPedidos = (req, res) => {
    res.status(200).json({ message: 'Obtener pedidos' })
}
const setPedidos = (req, res) => {
    res.status(201).json({ message: 'Crear pedido' })
}
const updatePedidos = (req, res) => {
    res.status(201).json({ message: `Modificar pedido ${req.params.id}` })
}
const deletePedidos = (req, res) => {
    res.status(201).json({ message: `Eliminar pedido ${req.params.id}` })
}

module.exports = {
    getPedidos,
    setPedidos,
    updatePedidos,
    deletePedidos
}