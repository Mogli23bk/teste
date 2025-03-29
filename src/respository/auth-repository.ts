import prisma from "../prisma/prisma-client"
import userData from "../types/user-data";


export  async function  create(data: userData){
    return await prisma.user.create({
        data,
    })
}

