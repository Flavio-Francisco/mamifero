import Fastify from 'fastify';
import  cors  from '@fastify/cors';
import Update from './Update';
import Delete from './Delete';
import Create from './Create';
import Query from './Query';



async function Server() {

  const server = Fastify({
    logger: true,
  });



  await server.register(cors, {
    origin: true,
})
  
  await server.register(Create)
  await server.register(Update)
  await server.register(Delete)
  await server.register(Query)



   server.listen({port:5432, host:'0.0.0.0' }, (erro, address)=>{

    if (erro) {
        server.log.error(erro)
        process.exit(1)
      }else{
        console.log("sevidor rodando: " + address)
      } 

  
      
})
}

Server();
