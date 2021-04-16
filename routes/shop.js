const express = require('express')

const routes = express.Router();


routes.get('/',(req,res,next)=>{
    res.send('<h1> In home page </h1>')
});

module.exports= routes;
