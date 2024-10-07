const express = require('express')
const router = express.Router()
const { getProductos, setProductos, updateProductos, deleteProductos } = require('../controllers/productosController')

router.get('/', getProductos)

router.post('/', setProductos)

router.put('/:id', updateProductos)

router.delete('/:id', deleteProductos)

module.exports = router