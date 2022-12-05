const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    price: {
        type: Number,
        trim: true,
        required : true
    },
    name:{
        type: String,
        trim: true,
        required : true
    },
    img: {
        type: String,
        trim: true,
        required : true
    },
    description: {
        type: String,
        trim: true,
        required : true
    }
})

const productModel = mongoose.model('product', ProductSchema)
module.exports = productModel
