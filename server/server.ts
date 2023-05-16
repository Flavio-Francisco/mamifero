import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import {PrismaClient}from '@prisma/client';
import Get from './Get';
import Post from './Post';

async  function Server() {
  const prisma = new PrismaClient();
  const server = Fastify();


server.register(Get)
server.register(Post)

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
