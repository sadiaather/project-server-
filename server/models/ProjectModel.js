import mongoose from "mongoose";
import { Model ,Schema } from "mongoose";

const projectSchema = new Schema({
    developerName: String,
    description: String,
    title  : String,
    hostedUrl : String,
   
    
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
