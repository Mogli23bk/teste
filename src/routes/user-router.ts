import { Express,response,Router } from "express";
import  getAll  from '../prisma/prisma-client'

const userRouter=(server: Express)=>{
    const router = Router();

    router.get("/",async (req, res)=>{
        const user = await getAll()
        response.status(200).send(user)
    })
}


export default userRouter;