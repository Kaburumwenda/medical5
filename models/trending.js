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
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    price_off:{
        type:Number,
        required:true
    },
    discount: {
        type: Number
        
    },
    seller:{
        type: String
    },
    image: {
        type: String
    }
    
});

var trending = module.exports = mongoose.model('Trending', ProductSchema);
