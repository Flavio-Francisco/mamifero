import Fastify from 'fastify';
import z from 'zod';

const server = Fastify();

server.listen({port:3000}, async (erro, address)=>{
    if (erro) {
        server.log.error(erro)
        process.exit(1)
      }else{
        console.log("sevidor rodando" + address)
      } 

})