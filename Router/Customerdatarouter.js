

const Customermodel=require("../models/Customermodels");

function GET(req,res,next){
    Customermodel.find()
    .then ((response)=>{
        if (response.length<1){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No datas found",
            
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


function POST(req,res,next){
    Customermodel.find()
    .then ((response)=>{
        if (customerdata===newCustomerdata){
            return res.status(400).json({
                success:true,
                data:response,
                message:"all ready booked",
            
            });
            
  
        }else
        {
            return res.status(200).json({
                success:true,
                data:response,
                message:"room booking successfully",
            });
        }
    })
}
async function CREATE(req,res,next){
const newCustomerdata= await Customermodel.create(req.body);
console.log(newCustomerdata);

    return res.status(200).json({
        message:'successful creating datas'
    });
}
module.exports={
    GET,
    POST,
    CREATE,
};