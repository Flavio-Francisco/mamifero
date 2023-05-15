import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import {PrismaClient}from '@prisma/client';

async  function Server() {
  const prisma = new PrismaClient();
  const server = Fastify();



 server.get('/create', async () =>{
  
 const Golfinho = await prisma.golfinho.findMany({
    select:{
      name:true,
      species:true,
      characteristics: true,
      marine:true,
    }
  })
  return (Golfinho)
})
  server.post("/create", async(request, reply)=>{

    const type = z.object({
      name : z.string(),
      species: z.string(),
      characteristics : z.string(),
      marine : z.boolean(),
    })
    const Golfinho = type.parse(request.body);

   if (Golfinho) {
    
    prisma.golfinho.create({
      data:{
        name: Golfinho.name,
        species: Golfinho.species,
        characteristics: Golfinho.characteristics,
        marine: Golfinho.marine,
      }
    })
    return reply.status(201).send({Golfinho})
   }else{
    return reply.send({message:"TÁ TUDO ERRADO!"})
   }
  })

    server.listen({port:5432}, (erro, address)=>{

    if (erro) {
        server.log.error(erro)
        process.exit(1)
      }else{
        console.log("sevidor rodando: " + address)
      } 

})
  
}

Server();
