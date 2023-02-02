// Importação do fastify
import Fastify from 'fastify'
// Criando a aplicação com fastify
const app = Fastify()

/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 */
// Criando a rota desta aplicação
app.get('/hello', () => {
    return 'Hello World'
})
// fazendo com que a aplicação ouça a porta 3333
app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running')
})