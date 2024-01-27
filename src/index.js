const
    fastify = require('fastify'),
    {debuglog} = require('util'),
    routes = require('./routes'),

    debug = debuglog('server'),

    server = fastify({
        logger: true // TODO: can implement a customLogger
    }),

    main = () => {
        routes.forEach(routeOptions => server.route(routeOptions))

        server.listen(3000, (err, address) => {
            debug(`Server listening on ${address}`)
        })
    }

main()
