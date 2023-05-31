import { FastifyInstance } from "fastify";
import { TypeOf, z } from "zod";
import { PrismaClient } from '@prisma/client';



export default async function Query(server: FastifyInstance) {
    const prisma = new PrismaClient();
    server.get('/query',async (request ) => {

        const type = z.object({
            name: z.string(),
        })
        
        type type =z.infer<typeof type>;

        const nameGolfinho = type.parse(request.body);

        const golfinho = await prisma.golfinho.findMany({
            where:{
             AND:{
                name:{
                    contains:nameGolfinho.name,
                }
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

       return {golfinho}
        })
    
}