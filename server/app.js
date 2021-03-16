const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log('connection successfully');
}).catch((err) => console.log('no connection'));

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
 app.listen(3000, () =>{
     console.log('server is running at port no 3000');
 })   
