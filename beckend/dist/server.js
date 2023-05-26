"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const Create_1 = require("./Create");
const server = (0, fastify_1.default)();
server.get('/get', async () => {
    return ('rota ok');
});
server.register(Create_1.Create);
server.listen({ port: 3000 }, (erro, address) => {
    if (erro) {
        server.log.error(erro);
        process.exit(1);
    }
    else {
        console.log("sevidor rodando: " + address);
    }
});
