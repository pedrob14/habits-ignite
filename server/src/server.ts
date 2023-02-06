// Importação do fastify
import Fastify from 'fastify'
// Importação do PrismaClient
import { PrismaClient } from '@prisma/client'
// Criando a aplicação com fastify
const app = Fastify()
// Ter acesso a todas as tabelas do banco de dados
const prisma = new PrismaClient()
/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 */
// Criando a rota desta aplicação
app.get('/hello', async () => {
    // prisma.habit -> Acessando a tabela habits através do Prisma
    // findMany() -> porque quero retornar vários hábitos de dentro do meu banco de dados
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})
// fazendo com que a aplicação ouça a porta 3333
app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running')
})