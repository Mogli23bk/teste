import { Express, Router}from "express";
import authRouter from "../routes/auth-router"



const authController = (server: Express)=>{
    





    server.use("/auth",router)
}