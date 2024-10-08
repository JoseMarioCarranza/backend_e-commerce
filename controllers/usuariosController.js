const login = (req, res) => {
    res.status(200).json({ message: 'Inicio de sesión correcto' })
}
const singUp = (req, res) => {
    res.status(201).json({ message: 'Usuario Creado' })
}
const getData = (req, res) => {
    res.status(200).json({ message: `Datos del usuario` })
}

const makeAdmin = (req, res) => {
    res.status(200).json({ message: `Usuario con id ${req.params.id} convertido en administrador` })
}

module.exports = {
    login,
    singUp,
    getData,
    makeAdmin
}