const dotenv = require('dotenv');
const express = require('express');
const mangoose = require('mongoose');
const path = require('path')
const app = express();

dotenv.config({path:'./config.env'});

app.use(express.json());
require('./db/db'); 

app.use(require('./routing/route'));

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`server is connected at ${port}`)
});