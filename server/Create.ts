import  Fastify  from 'fastify';
import z from 'zod';

export function Create(){

  const server = Fastify();

 server.post('/post', async(request)=>{

    const type = z.object({

    })

 })
}