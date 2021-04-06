const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async() => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '3.16.21.163',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);


    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();