import  Fastify  from 'fastify';
import z from 'zod';
import {PrismaClient}from '@prisma/client';

export function Create(){

  const server = Fastify();
  const prisma = new PrismaClient();
  
  server.post('/post', async(request)=>{

    const type = z.object({
        name: z.string(),
        race :z.string(),
        paws :z.number(),

    })

    const mamifero = await type.parse(request.body)

    if (mamifero){
        prisma.mamifero.create({
            data:{
                name: mamifero.name,
                race: mamifero.race,
                paws: mamifero.paws,
            }
        })
    }
    return console.log("mamifero criado com sucesso!");
    ;

 })
}