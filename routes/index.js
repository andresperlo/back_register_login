const express = requier('express')
const router = express.Router()

const userRoutes = require('./userRoutes')

router.use('/user', userRoutes)

module.exports = router