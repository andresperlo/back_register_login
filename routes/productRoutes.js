const express = require('express')
const router = express.Router()

const productControllers = require('../controllers/productsControllers')

router.post('/', productControllers.createProduct)
router.get('/', productControllers.getAllProduct)
router.get('/:id', productControllers.getOneProduct)
router.put('/:id', productControllers.modifyOneProduct)
router.delete('/:id', productControllers.deleteOneProduct)


module.exports = router
