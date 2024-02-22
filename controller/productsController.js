// import { find } from '../module/products'
const Product = require('../module/products');
exports.findAll = async (req,res) => {
    let product

    try {
        product = await Product.find()
        res.send(product)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving product details" })
    }
}