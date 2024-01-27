const
    fastify = require('fastify'),
    fastifySwagger = require('@fastify/swagger'),
    fastifySwaggerUI = require('@fastify/swagger-ui'),
    {debuglog} = require('util'),
    routes = require('./routes'),

    debug = debuglog('server'),

    server = fastify({
        logger: true // TODO: can implement a customLogger
    }),

    main = async () => {
        await server.register(fastifySwagger)
        await server.register(fastifySwaggerUI)

        routes.forEach(routeOptions => server.route(routeOptions))

        await server.ready()
        server.swagger()

        server.listen({
            host: 'localhost',
            port: 3000,
        })
    }


main()
