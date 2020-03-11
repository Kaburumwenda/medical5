var mongoose = require('mongoose');

// Product Schema
var ProductSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    
    price: {
        type: Number,
        required: true
    },
    
    image: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    }
    
})

var Product = module.exports = mongoose.model('Cart', ProductSchema);
