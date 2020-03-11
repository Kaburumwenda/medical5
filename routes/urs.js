const express = require('express');
const router = express.Router();
const User = require('../models/ums');


router.post('/reg',async(req,res)=>{
    const newUser = new  User({
        title:req.body.title,
        name: req.body.name
    })
    try{
        const saveduser =await newUser.save();
        res.json(saveduser)
    }catch(err){}
})


module.exports = router;