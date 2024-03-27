
const {GET, CREATE}=require("../Router/Halldatarouter");

const HalldataRouter=require("express").Router();

 HalldataRouter.get("/",GET);
 HalldataRouter.post("/create",CREATE);
    

 
module.exports=HalldataRouter; 
 
 

