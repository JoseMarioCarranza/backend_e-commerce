const asyncHandler = require('express-async-handler')
const Producto = require('../model/productosModel')

const getProductos = asyncHandler(async (req, res) => {

    const productos = await Producto.find()

    res.status(200).json(productos)

})

const setProductos = asyncHandler(async (req, res) => {

    if (!req.body.nombre) {
        res.status(400)
        throw new Error("Por favor teclea un nombre")
    }

    if (!req.body.precio) {
        res.status(400)
        throw new Error("Por favor teclea un precio")
    }

    const producto = await Producto.create({
        nombre: req.body.nombre,
        precio: req.body.precio
    })

    res.status(201).json({ producto })

})

const updateProductos = asyncHandler(async (req, res) => {
    res.status(201).json({ message: `Modificar producto ${req.params.id}` })
})

const deleteProductos = asyncHandler(async (req, res) => {
    res.status(201).json({ message: `Eliminar producto ${req.params.id}` })
})

module.exports = {
    getProductos,
    setProductos,
    updateProductos,
    deleteProductos
}