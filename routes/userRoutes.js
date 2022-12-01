const express = require('express')
const router = express.Router()

const {userRegister, loginUser, logoutUser} = require('../controllers/userControllers')

router.post('/register', userRegister)
router.post('/login', loginUser)
router.post('/logout', logoutUser)








module.exports = router