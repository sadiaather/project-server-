import  express  from "express";
import { Router } from "express";
import {login} from "../controllers/UserController.js";
import {signup} from "../controllers/UserController.js";


const router = Router()

router.post("/login",login)
router.post("/signup",signup)





export default router