import { FastifyInstance } from "fastify";
import { PrismaClient } from '@prisma/client';
import { z } from "zod";

export default async function(server:FastifyInstance){
const prisma = new PrismaClient();

    server.delete('/delete',async (request) =>{

        const type = z.object({
        
            name: z.string(),
        })

        const Golfinho = type.parse(request.body)

        const deleteGolfinho = await prisma.golfinho.delete({
        where: {
           name:Golfinho.name,
        },
        select:{
            id: true,
            name: true,
            characteristics: true,
            species: true,
            marine: true
        }
        })
        return(` Golfinho com ID, ${deleteGolfinho} deletado com  sucesso`)
    })

}