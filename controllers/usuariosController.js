const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const singUp = asyncHandler(async (req, res) => {

    // Desglosamos los datos del body
    const { name, email, password } = req.body

    // Comprobamos que el usuario haya ingresado todos los datos necesarios
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Faltan datos para completar el registro')
    }

    // Comprobación de la existencia del usuario
    const userExiste = await User.findOne({ email })

    if (userExiste) {
        res.status(400)
        throw new Error("Ese usuario ya existe en la base de datos")
    }

    // Hash de password
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    // Crea el nuevo usuario
    const user = await User.create({
        name,
        email,
        password: passwordHash
    })

    // Comprobamos la creción correcta del usuario
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.esAdmin
        })
    } else {
        res.status(400)
        throw new Error('No se pudo crear el usuario')
    }

})

const login = asyncHandler(async (req, res) => {

    //desestructuramos el body
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error('Falta de introducir datos')
    }

    //verificamos que exista el usuario
    const user = await User.findOne({ email })

    //verificamos al usuario y a la contraseña
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generarToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Credenciales incorrectas')
    }

})

const getData = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Datos del usuario` })
})

const makeAdmin = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Usuario con id ${req.params.id} convertido en administrador` })
})

const generarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

module.exports = {
    login,
    singUp,
    getData,
    makeAdmin
}