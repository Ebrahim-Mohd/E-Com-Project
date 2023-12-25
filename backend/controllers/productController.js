const Product = require('../models/productModel')
const mongoose = require('mongoose')

const getProducts = async (req,res)=> {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)

}

const getProduct = async (req,res)=> {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such Product"})
    }

    const product = await Product.findById(id)
    if (!product){
        return res.status(404).json({error : "No such Product"})
    }

    res.status(200).json(product)

}

module.exports = {
    getProducts,
    getProduct
}