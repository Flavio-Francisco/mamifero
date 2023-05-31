import { FastifyInstance } from "fastify";
import { PrismaClient } from '@prisma/client';


export default async function Get(server:FastifyInstance) {

    const prisma = new PrismaClient();

    server.get('/get',()=>{
        const List = prisma.golfinho.findMany({
            select:{
                id: true,
                name:true,
                characteristics:true,
                species:true,
                marine:true
            }
        })
        return (List)
    })
    
    
}