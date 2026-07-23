import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js"
import cors from 'cors'

import dns from "node:dns";

dns.setServers=(["8.8.8.8", "1.1.1.1"]);

const app = express();

const PORT = 5000;
connectDB()

// origin allow

app.use(cors({
  origin:"http://localhost:5173",
   methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// MiddleWare
app.use(express.json());

app.use((req,res,next)=>{
  console.log(req.url)
  next();
})

app.use ('/api/auth',authRoutes)
app.use('/api/',projectRoutes)





app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
