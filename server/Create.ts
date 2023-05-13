import   Fastify  from 'fastify';
import z from 'zod';
import {PrismaClient}from '@prisma/client';

export async function Create(){

  const server = Fastify();
  const prisma = new PrismaClient();
  
    server.post('/create', async (request) => {

        const type = z.object({
            name: z.string(),
            species: z.string(),
            characteristics: z.string(),
            marine: z.boolean(),
        });

        const golfinho = type.parse(request.body);

        if (golfinho ) {
            prisma.golfinho.create({
                data: {
                    name: golfinho.name,
                    species: golfinho.species,
                    characteristics: golfinho.characteristics,
                    marine: golfinho.marine,
                }
            });
            
        }
        return  {golfinho};
    })
   
}

