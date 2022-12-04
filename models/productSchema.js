const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    price: {
        type: Number,
        trim: true,
        require: true
    },
    name:{
        type: String,
        trim: true,
        require: true
    },
    img: {
        type: String,
        trim: true,
        require: true
    },
    description: {
        type: String,
        trim: true,
        require: true
    }
})

const productModel = mongoose.model('product', ProductSchema)
module.exports = productModel
