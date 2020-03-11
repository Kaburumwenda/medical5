const express = require('express');
const router = express.Router();
var auth = require('../config/auth');
var isAdmin = auth.isAdmin;


const Account = require('../models/user');

router.get('/', isAdmin,  function (req, res) {
    var count;

    Account.count(function (err, c) {
        count = c;
    });

    Account.find(function (err, accounts) {
        res.render('admin/accounts', {
            accounts: accounts,
            count: count
        });
    });
});


/*
 * GET edit product
 */
router.get('/edit-account/:id', isAdmin,  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

    

        Account.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/admin/accounts');
            } else {
            
                res.render('admin/edit_accounts', {
                            
                            errors: errors,
                            name:p.name,
                            username:p.username,
                            email:p.email,
                            admin:p.admin,
                            doctor:p.doctor,
                            client:p.client,
                            id: p._id
                        });
                    
                
            }
        });

    

});

/*
 * POST edit product
 */
router.post('/edit-account/:id', function (req, res) {

    

    //req.checkBody('name', 'Name must have a value.').notEmpty();
    //req.checkBody('username', 'Username must have a value.').notEmpty();
    //req.checkBody('email', 'Email  must have a value.').notEmpty();
    
    var name = req.body.name;
    
    var username = req.body.username;
    //var price = req.body.price;
    //var price_off = req.body.price_off;
    var email = req.body.email;
    var admin = req.body.admin;
    //var seller = req.body.seller;
    //var discount = req.body.discount;
    var doctor = req.body.doctor;
    var client =req.body.client;
    

    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/admin/accounts/edit-account/' + id);
    } else {
        Account.findOne({name: name, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'username exists, choose another.');
                res.redirect('/admin/accounts/edit-account/' + id);
            } else {
                Account.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                    p.name =name;
                    //p.slug = slug;
                    p.username = username;
                    p.email =email;
                    p.admin =admin;
                    p.doctor =doctor;
                    //p.seller =seller;
                    //p.discount =discount;
                    //p.price = parseFloat(price).toFixed(2);
                    //p.price_off = parseFloat(price_off).toFixed(2);
                    p.client = client;
                   

                    p.save(function (err) {
                    
                     if(err)console.log(err)
                        

                        req.flash('success', 'account edited successfully');
                        res.redirect('/admin/accounts/edit-account/' + id);
                    });

                });
            }
        });
    }

});



module.exports = router;