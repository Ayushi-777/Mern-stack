const express = require('express');
const router = express.Router();

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
});4
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
        }
        const users = new user({name ,email, phone, work, password, cpassword});
      await users.save();

        res.status(201).json({message:"user registered successful"});
    }catch (err){
        console.log(err);
    }
});

 



router.post('/login',async (req,res) => {
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(422).json({error:"pls fill all field"});
    }
    try{
    const userexcit = await user.findOne({email : email, password : password});
    console.log(userexcit);
    if(userexcit){
        return res.status(422).json({message:"loging succesfully"});
        
    }
        return res.status(400).json({error:"invaild"});
}
    catch(err){
        console.log(err);
    }
   
    
});
 

module.exports = router;