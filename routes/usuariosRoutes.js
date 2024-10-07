const express = require('express')
const router = express.Router()
const { login, singUp, getData } = require('../controllers/usuariosController')

router.post('/login', login)

router.post('/singup', singUp)

router.get('/data', getData)

module.exports = router