import mongoose from "mongoose";

import dotenv from "dotenv"

import chalk from "chalk";

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
  
dotenv.config()

const dbConection = process.env.MONGODB_URL  


const connectDB = async () => {
    try {
      await mongoose.connect(dbConection);
      
      
      console.log(chalk.blue.bgRed.bold('MongoDB connected successfully'));
    } catch (error) {
      console.error('MongoDB connection failed:', error);
      
    }
  };
  
  export default  connectDB;
  

