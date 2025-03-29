import { Express,Router } from "express";
import userRouter from "../routes/user-router";


const userController = (server: Express)=>{
 
    
    server.use("/", userRouter)
}

export default userController;