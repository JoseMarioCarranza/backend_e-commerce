const express = require('express')
const router = express.Router()
const { getPedidos, setPedidos, updatePedidos, deletePedidos } = require('../controllers/pedidosController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getPedidos)

router.post('/', protect, setPedidos)

router.put('/:id', protect, updatePedidos)

router.delete('/:id', protect, deletePedidos)

module.exports = router