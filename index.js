const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PORT =  process.env.PORT || 3001
const routes = require('./routes/userRoutes')
//dataBase
require('./dataBase')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cors())

//routes
app.use('/', routes)

//status server
app.listen(PORT, ()=> {
    console.log('back ejecutandose en el puerto: ', PORT)
})
