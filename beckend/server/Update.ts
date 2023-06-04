import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export default async function Update(server:FastifyInstance) {
    const prisma = new PrismaClient();

    server.put('/update/:name', async (request,reply) =>{
        
        const type = z.object({
            name : z.string(),
            species: z.string(),
            characteristics : z.string(),
            marine : z.boolean(),
          })
          const typeName= z.object({name: z.string()});
          const Golfinho = type.parse(request.body);
          const name = typeName.parse(request.params);

          console.log('====================================');
          console.log(name);
          console.log('====================================');
          console.log(Golfinho);
          console.log('====================================');

          const updateGolfinho = await prisma.golfinho.update({
            where:{
               name:name.name
            },
            data:{
                 name: Golfinho.name,
                 species: Golfinho.species,
                 characteristics: Golfinho.characteristics,
                 marine: Golfinho.marine,
            }
        })

        return reply.status(200).send({updateGolfinho})
    })

    
}