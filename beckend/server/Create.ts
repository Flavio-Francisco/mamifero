import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export default async function Create(server:FastifyInstance) {
    const prisma = new PrismaClient();

    server.post('/post',async(request,reply)=>{
        const type = z.object({
            name: z.string(),
            species: z.string().max(30),
            characteristics: z.string().min(20).max(1000),
            marine: z.boolean(),
          })
          const Golfinho = type.parse(request.body);
        
          if(Golfinho){}
            const createGolfinho = await prisma.golfinho.create({
      
                  data:{
                    name: Golfinho.name,
                    species: Golfinho.species,
                    characteristics: Golfinho.characteristics,
                    marine: Golfinho.marine,
                  }
                })
            
                return reply.status(201).send({createGolfinho});
               
          
         
  
      
      })  
  
}