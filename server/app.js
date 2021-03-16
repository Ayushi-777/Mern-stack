const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT = process.env.PORT;


const middleware =(req,res,next) => {
    console.log('hello my middleware');
    next();
}
app.get('/',(req,res) => {
    res.send('Hello world from the server');
});
app.get('/about',middleware, (req,res) => {
    console.log('hello my about');
    res.send('Hello world from the about');
});
app.get('/register',(req,res) => {
    res.send('Hello world from the register');
});
app.get('/contact',(req,res) => {
    res.send('Hello world from the contact');
});
 app.listen(PORT, () =>{
     console.log(`server is running at port no ${PORT}`);
 })   
