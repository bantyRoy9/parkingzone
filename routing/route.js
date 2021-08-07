const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/middleware')

const User = require('../userSchema/userSchema');
require('../db/db');


router.post('/sign', async (req,res)=>{
    const {name,email,phone,password,cpassword} = req.body;
   if(!name || !email || !phone || !password || !cpassword){
       return res.status(422).json({error: "Some Thing unfilled"});
   } 
   try{

    const userExit = await User.findOne({email:email});
    if(userExit){
        return res.status(422).json({error:"user already Exist"});
    }else if(password != cpassword){
        return res.status(422).json({error:"password is not match"});
    }else{
        const user = new User({name,email,phone,password,cpassword});

        await user.save();
        res.status(201).json({message:"user resigtered successfull"});
    }
   }catch(err){

       console.log(err);
   }
   
});


router.post('/Login', async (req,res)=>{
    try{
        let token;
        const { email,password} = req.body;

        if(!email || !password){
            return res.status(422).json({error:"something missing"});
        }
        const userLogin = await User.findOne({email:email});
        console.log(userLogin);
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires: new Date(Date.now()+300000),
                httpOnly:true
            });
            if(!isMatch){
                res.status(400).json({error:"invailid user"})
            }else{
                res.json({message:"user Login successfull"})
            }
        }else{
            res.status(400).json({error:"invailid"});
        }
    }catch(err){
        console.log(err);
    }
});
router.get('/about', Authenticate ,(req , res)=>{
    console.log(`hello my about`);
    res.send(req.rootUser);
       });
  
module.exports = router;