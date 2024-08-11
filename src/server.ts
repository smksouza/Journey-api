import fastify from 'fastify'


const app = fastify()

app.get('/', () => {
    return 'OI'
})

app.listen({ port: 3333 }).then(() => {
    console.log('Server running!')
})