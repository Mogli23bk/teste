import { Prisma } from "@prisma/client"
import prisma from "../prisma/prisma-client"
import userData from "../types/user-data"


    export  async function  createUser(data: Omit<userData, "id" | "createAt" | "updateAt">  ){
        return await prisma.user.create({
            data,
        })
    }
    
    export async function findByEmail(email: string){
        return await prisma.user.findUnique({
            where:{
                email,
            }
        })
    }
   

    export async function findById(id:string) {
        return await prisma.user.findUnique({
            where:{
                id,
            }
        })
        
    }

   

    export async function findByCpf(cpf: string){
        return await prisma.user.findUnique({
            where:{
                cpf,
            }
        })
    }

    export async function update(id: string, data: any){
        return prisma.user.update({
            where:{
                id, data
            }
        })
    }
    

