const mongoose= require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = new Schema({
    img: 
        {
            type : String,
            required: true
        },
    category:
        {
            type : String,
            required: true
        },
    title:
        {
            type : String,
            required: true
        },
    price:
        {
            type: Number,
            required: true
        }
    
},{timestamps: true})

const Product = mongoose.model('products', ProductSchema)
module.exports = Product