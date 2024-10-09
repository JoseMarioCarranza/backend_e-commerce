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

    const producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(400)
        throw new Error('El producto no fué encontrado')
    }

    const productoUpdated = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(201).json(productoUpdated)
})

const deleteProductos = asyncHandler(async (req, res) => {

    const producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(400)
        throw new Error('El producto no fué encontrado')
    }

    await Producto.deleteOne(producto)

    res.status(201).json({ id: producto.id })

})

module.exports = {
    getProductos,
    setProductos,
    updateProductos,
    deleteProductos
}