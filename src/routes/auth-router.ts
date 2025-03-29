import { Express, request, response, Router } from "express";
import prismaClient from "../prisma/prisma-client";
import { create } from "../respository/auth-repository";


const authRouter=(server: Express)=>{
    const router = Router();

    router.post("/register",async(request,response)=>{
        try{
            const {name, email, password, cpf} = request.body;
            const user = await create(userData)

            if(!name || !email || password || cpf){
                return response.status(400).send("Os campos não foram preenchidos")
                    
                })
            }

        } 
    })
}

export default authRouter;