const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userDetail = new mongoose.Schema({

 name:{
     type:String,
     required:true
 },
 email:{
     type:String,
     required:true
 },
 phone:{
     type:Number,
     required:true
 },
 password:{
     type:String,
     required:true
 },
 cpassword:{
     type:String,
     required:true
 },
 tokens:[
     {
         token:{
             type:String,
             required:true
         }
     }
 ]


});

userDetail.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

// userDetail.methods.generateAuthToken = async function(){

//     try{

//     }

// }

const User = mongoose.model('USER',userDetail);

module.exports = User;