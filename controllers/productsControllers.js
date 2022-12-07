const ProductModel = require('../models/productSchema')
const { validationResult } = require('express-validator')

exports.createProduct = async (req, res) => {

    const { price, name, img,  description } = req.body

    if(price === '' && name === '' && img === '' && description === ''){
        return res.status(422).json({ msg: 'Formulario Totalmente Vacio. Se debe completar TODO el formulario'})
    }

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    try {
        const newProduct = new ProductModel(req.body)
        await newProduct.save()
        res.status(201).json({ msg: 'Producto Creado Correctamente' })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const allProduct = await ProductModel.find()
        res.status(200).json(allProduct)
    } catch (error) {
        console.log('error', error)
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const getOneProd = await ProductModel.findOne({ _id: req.params.id })
        res.status(200).json(getOneProd)
    } catch (error) {
        console.log('error', error)
    }
}

exports.modifyOneProduct = async (req, res) => {
    const { price, name, img,  description } = req.body

    if(price === '' && name === '' && img === '' && description === ''){
        return res.status(422).json({ msg: 'Formulario Totalmente Vacio. Se debe completar TODO el formulario'})
    }

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    
    try {
        const modifyProd = await ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json(modifyProd)
    } catch (error) {
        console.log('error', error)
    }
}

exports.deleteOneProduct = async (req, res) => {
    try {
        const deleteProd = await ProductModel.findByIdAndDelete({ _id: req.params.id })
        if (deleteProd) {
            res.status(200).json({ msg: 'Producto Eliminado' })
        } else {
            res.status(400).json({ msg: 'Producto no encontrado' })
        }
    } catch (error) {
        console.log('error', error)
    }
}