const getPedidos = (req, res) => {
    res.status(200).json({ message: 'Obtener pedidos' })
}
const setPedidos = (req, res) => {
    res.status(201).json({ message: 'Crear pedido' })
}
const updatePedidos = (req, res) => {
    res.status(201).json({ message: `Modificar tarea ${req.params.id}` })
}
const deletePedidos = (req, res) => {
    res.status(201).json({ message: `Eliminar tarea ${req.params.id}` })
}

module.exports = {
    getPedidos,
    setPedidos,
    updatePedidos,
    deletePedidos
}