const express = require('express');
const router = express.Router();
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
router.get('/register',(req,res) => {
    res.send('Hello world from the register');
});
router.post('/register',(req,res)=>{
    console.log(req.body);
    res.json({message:req.body});   //res.send('register')
})
router.post('/register',(req,res) => {
    console.log(req.body);
})
router.get('/contact',(req,res) => {
    res.send('Hello world from the contact');
});
 

module.exports = router;