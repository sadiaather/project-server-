import chalk from "chalk";
import Project from "../models/ProjectModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const createProject = async (req,res)=> {
    console.log(req.body);
    
    const {developerName,tiltle,description,hostedUrl}=req.body

    if(!developerName || !tiltle || !description || !hostedUrl){
         res.status(502).json({
    success :false,
    message:"some thing is missing"
  });
  return
    }
    try{
    const result = await Project.create({
        developerName:developerName,
        description:description,
        tiltle:tiltle,
        hostedUrl:hostedUrl
    })
    res.status(200).json({
      success:true,
      message:"project add successfully",
      data:result
    });
}
    catch(error){
      console.error(chalk.red("Error during add project:", error));
    
    } 
}



export const allProjects = async(req,res)=>{
try{
  const project = await Project.find() 
  console.log(project);
  
  if(Project.length==[]){
    res.status(404).json({
      success:false,
      message:"no projects "
    })
    return;
  }
  res.status(201).json({
    success:true,
    message:"fetch all projects successsfully",
    data:project
  })
} catch(err){
  console.log(err.message);
  
}
}