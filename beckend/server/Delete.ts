import { FastifyInstance } from "fastify";
import { PrismaClient } from '@prisma/client';
import { z } from "zod";

export default async function(server:FastifyInstance){
const prisma = new PrismaClient();

    server.delete('/delete',async (request,reply) =>{

        const type = z.object({
            id : z.string(),
        })

        const Golfinho = type.parse(request.body)

        const deleteGolfinho = await prisma.golfinho.delete({
        where: {
            id: Golfinho.id
        }
        })
        reply.status(200).send(` Golfinho com ID, ${deleteGolfinho} deletado com  sucesso`)
    })

}