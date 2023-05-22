import { FastifyInstance } from "fastify";
import {PrismaClient}from '@prisma/client';

export default async function Get(server:FastifyInstance) {
    const prisma = new PrismaClient();
    server.get('/get', async () =>{
  
        const Golfinho = await prisma.golfinho.findMany({
           select:{
             id:true,
             name:true,
             species:true,
             characteristics: true,
             marine:true,
           }
         })
         return (Golfinho)
       }) 


}
