import { FastifyInstance } from "fastify";
import { TypeOf, z } from "zod";
import { PrismaClient } from '@prisma/client';



export default async function Query(server: FastifyInstance) {
    const prisma = new PrismaClient();
    server.get('/query/:name',async (request,reply) => {

        const type = z.object({
            name: z.string(),
        })
        
        type type =z.infer<typeof type>;

        const {name}= type.parse(request.params);
            console.log('====================================');
            console.log(name);
            console.log('====================================');
            
        const golfinho = await prisma.golfinho.findMany({
            where:{
                name:{
                    contains:name
                }
             },
            
            select:{
                id: true,
                name: true,
                species: true,
                characteristics: true,
                marine: true,
            }
        })

       return reply.send (golfinho)
        })
    
}