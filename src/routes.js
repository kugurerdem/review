module.exports = [
    {
        method: 'GET',
        path: '/ping',
        handler: (req, reply) => {
            reply.header('Content-Type', 'application/json; charset=utf-8')
            reply.send(JSON.stringify('pong'))
        },
    },
]
