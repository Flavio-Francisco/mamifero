"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
const fastify_1 = __importDefault(require("fastify"));
const zod_1 = __importDefault(require("zod"));
const client_1 = require("@prisma/client");
function Create() {
    const server = (0, fastify_1.default)();
    const prisma = new client_1.PrismaClient();
    server.post('/post', async (request) => {
        const type = zod_1.default.object({
            name: zod_1.default.string(),
            race: zod_1.default.string(),
            paws: zod_1.default.number(),
        });
        const mamifero = await type.parse(request.body);
        if (mamifero) {
            prisma.mamifero.create({
                data: {
                    name: mamifero.name,
                    race: mamifero.race,
                    paws: mamifero.paws,
                }
            });
        }
        return console.log("mamifero criado com sucesso!");
        ;
    });
}
exports.Create = Create;
