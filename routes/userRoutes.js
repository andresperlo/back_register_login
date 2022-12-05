const express = require('express')
const router = express.Router()
const auth = require('../middlewars/auth')
const {userRegister, loginUser, logoutUser} = require('../controllers/userControllers')

router.post('/register', userRegister)
router.post('/login', loginUser)
router.get('/logout',auth('user'), logoutUser)

module.exports = router