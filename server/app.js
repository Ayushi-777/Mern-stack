const express = require('express');
const mongoose = require('mongoose');
const app = express();

const DB = '';
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
    next;
}
app.get('/',(req,res) => {
    res.send('Hello world from the server');
});
app.get('/about',middleware, (req,res) => {
    res.send('Hello world from the abouts');
});
app.get('/register',(req,res) => {
    res.send('Hello world from the register');
});
app.get('/contact',(req,res) => {
    res.send('Hello world from the contact');
});
