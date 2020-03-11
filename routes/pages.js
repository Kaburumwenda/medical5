var express = require('express');
var router = express.Router();

//GET ALL PRODUCTS
const Product = require('../models/product');

//GET ALL TRENDING PRODUCTS

const Trending = require('../models/trending');

router.get('/',(req,res,next)=>{
    Product.find(function(err, products){
        
        if(err) console.log(err);
           
        res.render('index',{
            title:"Digital infant incubator",
            products:products
        });
    });
    
})

router.get('/trend',(req,res,next)=>{
    Trending.find(function(err,data){
       if(err) console.log(err);
       console.log(data)
       
       
    })
})

/*
router.get('/',(req,res,next)=>{
    Trending.find(function(err, trends){
        if(err) console.log(err);
           console.log(trends)
        res.render('index',{
            title:"MeshMall",
            trends:trends
        })
    })
})
*/

module.exports = router;


