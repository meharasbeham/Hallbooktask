const express=require("express");
const http=express();
const cors=require("cors");
const bodyparser=require("body-parser");
const {connectToDatabase}=require('./database/data');
const PORT=1000;

connectToDatabase();
http.use(cors()),
http.use(express.json()),
http.use(bodyparser.json()),
http.set("view engine","ejs");

http.use('/api/Halldata',require("./countroloers/Halldata"));

http.use('/api/Customerdata',require("./countroloers/Customerdata"));



    
http.listen (PORT,()=>{
    console.log("starting...");
});