const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    ids:{
        type: String, 
        require : true
    },
    img:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true,
    },
    quantity:{
        type: String,
        required: true
    }
   
},
{
    timestamps: true
});

module.exports = mongoose.model('products', productSchema);
