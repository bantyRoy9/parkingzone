const dotenv = require('dotenv');
const express = require('express');
const mangoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

dotenv.config({path:'./config.env'});

app.use(express.json());
require('./db/db'); 

app.use(require('./routing/route'));

if(process.env.NODE.ENV == "production")
{
    app.use(express.static("client/build"));
}
app.listen(port, () =>{
    console.log(`server is connected at ${port}`)
});