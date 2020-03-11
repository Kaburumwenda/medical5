var mongoose = require('mongoose');

// Product Schema
var BabySchema = mongoose.Schema({
   
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
    temperature: {
        type: Number,
        required: true
    },
    humidity:{
        type:Number,
        required:true
    },
    heart: {
        type: Number
        
    },
    
    image: {
        type: String
    }
    
});

var Product = module.exports = mongoose.model('Babies', BabySchema);
