const mongoose = require('mongoose');

const passSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Check', passSchema);