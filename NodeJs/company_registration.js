var express = require('express');
var router = express.Router();

var model = require('./register-model');
var bcrypt = require('bcrypt');
router.post('/register', function(req, res) {
    const Password = req.body.Password;
    const saltRounds = 10;
    bcrypt.hash(Password, saltRounds, function(err, hash){
        req.body.Password = hash;
        model.registerCompany(req.body, function(err, result) {
        res.json({data: result, error: err});
        })
    })
    
})
// router.post('/forgot-password', function(req, res) {
//         model.forgotPassword(req.body, function(err, result) {
//         res.json({data: result, error: err});
//         })
//     })
    
module.exports = router;
