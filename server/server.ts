import Fastify from 'fastify';


const server = Fastify();

server.get('/get', async () =>{
  
    return('rota ok')
})



server.listen({port:3000}, async (erro, address)=>{
    if (erro) {
        server.log.error(erro)
        process.exit(1)
      }else{
        console.log("sevidor rodando: " + address)
      } 

})