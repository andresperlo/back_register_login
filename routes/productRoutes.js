const express = require('express')
const router = express.Router()
const auth = require('../middlewars/auth')
const productControllers = require('../controllers/productsControllers')

router.post('/',auth('admin'), productControllers.createProduct)
router.get('/', productControllers.getAllProduct)
router.get('/:id', auth(['admin', 'user']),productControllers.getOneProduct)
router.put('/:id', auth('admin'),productControllers.modifyOneProduct)
router.delete('/:id', auth('admin'),productControllers.deleteOneProduct)

module.exports = router
