import express from "express";
import { Router } from "express";

import { createProject } from "../controllers/ProjectController.js";
import { authentication } from "../middlewares/auth.js";
import { allProjects } from "../controllers/ProjectController.js"

const router = Router()

router.post("/addproject",authentication, createProject)
router.get("/allprojects",allProjects)



export default router;