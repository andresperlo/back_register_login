const express = require('express')
const router = express.Router()
const auth = require('../middlewars/auth')
const productControllers = require('../controllers/productsControllers')
const { body } = require('express-validator')

router.post('/', auth('admin'), [
    body('price', 'Campo Precio Vacio').notEmpty(),
    body('name', 'Campo Nombre Vacio').notEmpty(),
    body('img', 'Campo Imagen Vacio').notEmpty(),
    body('description', 'Campo Descripcion Vacio').notEmpty()
], productControllers.createProduct)
router.get('/', productControllers.getAllProduct)
router.get('/:id', auth(['admin', 'user']), productControllers.getOneProduct)
router.put('/:id', auth('admin'), [
    body('price', 'Campo Precio Vacio').notEmpty(),
    body('name', 'Campo Nombre Vacio').notEmpty(),
    body('img', 'Campo Imagen Vacio').notEmpty(),
    body('description', 'Campo Descripcion Vacio').notEmpty()
], productControllers.modifyOneProduct)
router.delete('/:id', auth('admin'), productControllers.deleteOneProduct)

module.exports = router
