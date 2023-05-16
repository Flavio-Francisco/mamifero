import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export default function Post(server:FastifyInstance) {

    const prisma = new PrismaClient();

    server.post("/create", async(request, reply)=>{

        const type = z.object({
          name : z.string(),
          species: z.string(),
          characteristics : z.string(),
          marine : z.boolean(),
        })
        const Golfinho = type.parse(request.body);
      
    
        prisma.golfinho.create({
        
          data:{
            name: Golfinho.name,
            species: Golfinho.species,
            characteristics: Golfinho.characteristics,
            marine: Golfinho.marine,
          }
        })
    
        return reply.status(201).send({Golfinho});
       
      
      })  
}