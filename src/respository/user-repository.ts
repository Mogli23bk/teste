import prisma from "../prisma/prisma-client"
import userData from "../types/user-data";

    export async function getByEmail(email: string){
        return await prisma.user.findUnique({
            where:{
                email,
            }
        })
    }