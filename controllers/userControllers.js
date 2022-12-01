const userModel = require('../models/userSchema')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.userRegister = async (req, res) => {
    try {

        const salt = await bcryptjs.genSalt(10);
        const passwordEncrypt = await bcryptjs.hash(req.body.password, salt);

        const newUserObj = {
            username: req.body.username,
            password: passwordEncrypt
        }

        const newUser = new userModel(newUserObj)

        newUser.save()
        res.status(201).json({ msg: 'Usuario Creado Correctamente' })
    } catch (error) {
        console.log(error)
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const userExist = await userModel.findOne({ username })
        console.log('userExistAntes', userExist)
        if (!userExist) {
            res.status(404).json({ message: 'usuario y/o contraseña incorrecto' })
        }

        const passCheck = await bcryptjs.compare(password, userExist.password);

        if (!passCheck) {
            res.status(404).json({ message: 'usuario y/o contraseña incorrecto' })
        }

        const datosUsuarioParaToken = {
            user: {
                id: userExist.id,
                username: userExist.username,
                role: userExist.role
            }
        }

        const token = jwt.sign(datosUsuarioParaToken, 'comision9i')

        userExist.token = token 


        console.log('userExistDespues', userExist)

       await userModel.updateOne({ username }, userExist)

        res.status(200).json(userExist)

    } catch (error) {
        console.log(error)
    }
}

exports.logoutUser = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}