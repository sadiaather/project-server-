
import chalk from "chalk";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const secret = process.env.secret


export const signup = async (req,res)=>{

  const {name,email,password}= req.body

if(!name || !email || !password){
  res.status(502).json({
    success :false,
    message:"data is missing"
  });
  return
}
try{
const hashedPassword = await bcrypt.hash(password, 10);

const result = await User.create({name,email,password: hashedPassword})
res.status(200).json({
  success:true,
  message:"user created successfully",
  data:result
});

const token = await jwt.sign({
  userId:User._id},secret)
  res.status(200).json({
  success:true,
  message:"login successful",
  token,  
})}
catch(error){
  console.error(chalk.red("Error during signup:", error));

} 
}


export const login = async (req,res)=>{
 const {email,password} = req.body
  try{
   const user = await User.findOne({email})
    if(!email)
{
  res.status(404).json({
    success:false,
    message:"user not found"
  })
  return
}
const isMatch = await bcrypt.compare(password,user.password)
if(isMatch){
  res.status(200).json({
    success:true,
    message:"invalid password",
  })
}
const token =jwt.sign({userId:user._id},secret)
res.status(200).json({
  success:true,
  message:"login successful",
  token,  
})
  } 
  catch(error){
    console.error(chalk.red("Error during login:", error));
    res.status(500).json({ message: "Internal server error" });
  }  
}  