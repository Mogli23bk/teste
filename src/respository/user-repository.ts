import prisma from "../prisma/prisma-client"
import userData from "../types/user-data";


    export async function getAll(){
        return prisma.user.findMany()
    }

    export  function getPaginated(take: number, skip: number){
        
        return  prisma.user.findMany({
            take,
            skip,
        })
    }

    export async function getById(id:string) {
        return await prisma.user.findUnique({
            where:{
                id,
            }
        })
        
    }

    export async function getByEmail(email: string){
        return await prisma.user.findUnique({
            where:{
                email,
            }
        })
    }