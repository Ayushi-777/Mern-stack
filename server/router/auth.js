const express = require('express');
const { prependListener } = require('../models/userSchema');
const router = express.Router();
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
//db connection require
require('../db/conn');
const user = require('../models/userSchema');


const middleware =(req,res,next) => {
    console.log('hello my middleware');
    next();
}

router.get('/',(req,res) => {
    res.send('Hello world from the server of router');
});

router.get('/about',middleware, (req,res) => {
    console.log('hello my about');
    res.send('Hello world from the about');
});
router.get('/contact',(req,res) => {
 res.cookie("test",'ayushi');
    res.send('Hello world from the contact');
});
router.get('/register',(req,res) => {
    res.send('Hello world from the register');
});
router.get('/login',(req,res) => {
    res.send('Hello world from the login');
});
//this is advance js promiseretuen function
//router.post('/register', async (req,res) => {

// const{name ,email, phone, work, password, cpassword} = req.body;

  // if(!name || !email || !phone || !work || !password || !cpassword){      return res.status(422).json({error:"pls fill all field"});
  //  }
  //  user.findOne({email:email})
    
  //  .then((userexcits)=>{
 //       if(userexcits){
   //         return res.status(422).json({error:"email already exists"});
    //    }

   //     const variable = new user({name ,email, phone, work, password, cpassword});

  //      variable.save().then(()=>{
   //         res.status(201).json({message:"user registered"});
   //     })
  //      .catch((err)=>res.status(500).json({error:"failed"}));
  //  })
   // .catch(err=>{console.log(err);});
//}); 

///async await function
router.post('/register', async (req,res) => {

 const{name ,email, phone, work, password, cpassword} = req.body;

   if(!name || !email || !phone || !work || !password || !cpassword){
             return res.status(422).json({error:"pls fill all field"});
    }
    try{
        const userexcits = await user.findOne({email:email});

        if(userexcits){
            return res.status(422).json({error:"email already exists"});
        }else if(password!=cpassword){
            return res.status(422).json({error:"password not matched"}); 
        }
        const users = new user({name ,email, phone, work, password, cpassword});
        await users.save();

        res.status(201).json({message:"user registered successful"});
    }catch (err){
        console.log(err);
    }
});

 



router.post('/login',async (req,res) => {
    try{
        let token;
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(422).json({error:"pls fill all field"});
    }
    
    const userLogin = await user.findOne({email : email});

     if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
     //token
     token = await userLogin.generateAuthToken();
     console.log(token);
     res.cookie("jwtoken",token,{
         expires:new Date(Date.now() + 25892000000),
         httpOnly:true
     })

    if(isMatch){
        return res.status(422).json({message:"loging succesfully"});
        
    }else{
        return res.status(400).json({error:"invaild details"});
    }
}
    }
    catch(err){
        console.log(err);
    }
   
    
});
 

module.exports = router;