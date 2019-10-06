const express = require('express');
const testRoute = express.Router();

let User = require('../models/User')

testRoute.route('/').post((req,res)=>{
    console.log(req.body)
    console.log('hello')
    res.end();
})

module.exports = testRoute;