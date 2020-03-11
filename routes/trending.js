const express = require('express');
const router = express.Router();
const Adverts = require('../models/trending');

router.get('/',(req,res)=>{
    
    res.send('hello')
})
module.exports = router;