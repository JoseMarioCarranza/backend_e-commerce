const express = require('express')
const router = express.Router()
const { login, singUp, getData, makeAdmin } = require('../controllers/usuariosController')
const { protect } = require('../middleware/authMiddleware')

router.post('/login', login)

router.post('/singup', singUp)

router.get('/data', protect, getData)

router.post('/makeadmin', protect, makeAdmin)

module.exports = router