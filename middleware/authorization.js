var jwt = require('jsonwebtoken');
require("dotenv").config()


const authorization=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,"masai",async(err, decoded)=>{
            if(decoded){
                const userID=decoded.userID
                req.body.userID=userID
                next()
            }
            else{
                res.send({msg:"Please login"})
            }
        })
    }
    else{
        res.send({msg:"Please login"})
    }
}
   





module.exports={
    authorization
}