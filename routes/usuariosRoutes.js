const express = require('express')
const router = express.Router()
const { login, singUp, getData, makeAdmin } = require('../controllers/usuariosController')

router.post('/login', login)

router.post('/singup', singUp)

router.get('/data', getData)

router.put('/makeadmin/:id', makeAdmin)

module.exports = router