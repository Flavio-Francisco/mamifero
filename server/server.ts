import Fastify from 'fastify';
import Get from './Get';
import Update from './Update';
import Delete from './Delete';
import Create from './Create';
import Query from './Query';


async function Server() {

  const server = Fastify();

  
  await server.register(Create)
  await server.register(Get)
  await server.register(Update)
  await server.register(Delete)
  await server.register(Query)



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
