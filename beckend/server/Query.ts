import { FastifyInstance } from "fastify";
import { TypeOf, z } from "zod";
import { PrismaClient } from '@prisma/client';



export default async function Query(server: FastifyInstance) {
    const prisma = new PrismaClient();
    server.get('/query/:name',async (request) => {

        const type = z.object({
            name: z.string(),
        })
        
       

        const {name} = type.parse(request.params);
       console.log('====================================');
       console.log(name);
       console.log('====================================');
        
            
        const golfinho = await prisma.golfinho.findUnique({
            where:{
                name:name
             },
            
        })
        console.log(golfinho);
       return {golfinho}
      
        })
        
        
    
}