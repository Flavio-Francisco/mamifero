import Fastify from 'fastify';
import { Create }from './Create';


const server = Fastify();


async function Server() {


server.get('/get', async () =>{
  
  return('rota ok')
})


server.register(Create);

    await server.listen({port:3000}, (erro, address)=>{

    if (erro) {
        server.log.error(erro)
        process.exit(1)
      }else{
        console.log("sevidor rodando: " + address)
      } 

})
  
}

Server();
