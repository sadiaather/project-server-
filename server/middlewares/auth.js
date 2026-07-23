import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const secret = process.env.secret




export const  authentication=(req,res,next)=>{
    console.log(req.headers.authorization)
   try{
     const result = req.headers.authorization

    if(! result){
      res.status(500).json({
        success:false,
        message : "plz login or signup"
      })
    }
    const token = result.split(" ")[1]
    console.log(token);

    
 const user =  jwt.verify(token,secret)

  if(!user){
      res.status(500).json({
        success:false,
        message : "invalid email or password"
      })
    }
next()
   }
   catch(err){
    console.log(err.message);
    
   }
    
  }