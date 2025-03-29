import prisma from "../prisma/prisma-client"


    export  async function  create(data: any){
        return await prisma.user.create({
            data,
        })
    }

    export async function getAll(){
        return prisma.user.findMany()
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

    export async function getByCpf(cpf: string){
        return await prisma.user.findUnique({
            where:{
                cpf,
            }
        })
    }
   