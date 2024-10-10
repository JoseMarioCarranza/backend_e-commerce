const express = require('express')
const router = express.Router()
const { login, singUp, getData, makeAdmin } = require('../controllers/usuariosController')
const { protect } = require('../middleware/authMiddleware')

router.post('/login', login)

router.post('/singup', singUp)

router.get('/data', protect, getData)

router.put('/makeadmin/:id', protect, makeAdmin)

module.exports = router