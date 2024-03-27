
const Hallmodel=require("../models/Hallmodels");

function GET(req,res,next){
    Hallmodel.find()
    .then ((response)=>{
        if (response.length<1){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No data found",
            });
           
        }else
        {
            return res.status(200).json({
                success:true,
                data:response,
                message:"data fetched successfully",
            });
        }
    })
    .catch((e)=>{
        return res.status(402).json({
            success:false,
            erroe:e,
            message:"something went wrong",
        });
    });
}


async function CREATE(req,res,next){
const newHall= await Hallmodel.create(req.body);
console.log(newHall);

    return res.status(200).json({
        message:'successful creating datas'
    });
}
module.exports={
    GET,
    CREATE,
};