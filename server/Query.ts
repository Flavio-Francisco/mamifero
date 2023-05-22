import { FastifyInstance } from "fastify";
import { TypeOf, z } from "zod";
import { PrismaClient } from '@prisma/client';
import async from './Query';


export default async function Query(server: FastifyInstance) {
    const prisma = new PrismaClient();
    server.post('/query',async (request, reply ) => {

        const type = z.object({
            name: z.string(),
        })
        
        type type =z.infer< typeof type >;

        const namrGolfinho = type.parse(request.body);

        const golfinho = await prisma.golfinho.findUnique({
            where:{
                name: namrGolfinho.name,
            },
            select:{
                id: true,
                name: true,
                species: true,
                characteristics: true,
                marine: true,
            }
        })

       return reply.send({golfinho})
        })
    
}