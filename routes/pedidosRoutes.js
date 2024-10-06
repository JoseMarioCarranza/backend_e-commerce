const express = require('express')
const router = express.Router()
const { getPedidos, setPedidos, updatePedidos, deletePedidos } = require('../controllers/pedidosController')

router.get('/', getPedidos)

router.post('/', setPedidos)

router.put('/:id', updatePedidos)

router.delete('/:id', deletePedidos)

module.exports = router