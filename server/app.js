const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

//hide data code here
dotenv.config({path:'./config.env'});

//db connection require
//require('./db/conn');
//const user = require('./models/userSchema');

app.use(express.json());
//hide port number
const PORT = process.env.PORT;

//link the router files to make our  route easy
app.use(require('./router/auth'));

app.listen(PORT, () =>{
    console.log(`server is running at port no ${PORT}`);
})  ;


