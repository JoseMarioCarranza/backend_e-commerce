const getProductos = (req, res) => {
    res.status(200).json({ message: 'Obtener producto' })
}
const setProductos = (req, res) => {
    res.status(201).json({ message: 'Crear producto' })
}
const updateProductos = (req, res) => {
    res.status(201).json({ message: `Modificar producto ${req.params.id}` })
}
const deleteProductos = (req, res) => {
    res.status(201).json({ message: `Eliminar producto ${req.params.id}` })
}

module.exports = {
    getProductos,
    setProductos,
    updateProductos,
    deleteProductos
}