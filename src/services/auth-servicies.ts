import bcrypt from "bcryptjs";
import { Express, response, Router } from "express";
import  jwt  from "jsonwebtoken";
import prisma from "../prisma/prisma-client"

const JWT_SECRET = process.env.JWT_SECRET


export async function login(email:string, password: string)
 {
    const user = await prisma.user.getByemail
        where:{
            email,
        }
    })

    if(!user){
        
    }
}   
