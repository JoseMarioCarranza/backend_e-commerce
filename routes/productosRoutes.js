const express = require('express')
const router = express.Router()
const { getProductos, misProductos, setProductos, updateProductos, deleteProductos } = require('../controllers/productosController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', getProductos)

router.get('/misproductos', protect, misProductos)

router.post('/', protect, setProductos)

router.put('/:id', protect, updateProductos)

router.delete('/:id', protect, deleteProductos)

module.exports = router