module.exports = [
    {
        method: 'GET',
        path: '/ping',

        schema: {
            tags: ['api'],
            summary: 'Ping endpoint',
        },

        handler: (req, reply) => {
            reply.header('Content-Type', 'application/json; charset=utf-8')
            reply.send(JSON.stringify('pong'))
        },
    },
]
