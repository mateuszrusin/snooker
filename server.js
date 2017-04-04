

'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'dist')
            }
        }
    }
});

server.connection({
    host: 'localhost',
    port: 3000,
    router: {
        stripTrailingSlash: true
    }
});

server.register(Inert, () => {});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at ${server.info.uri}`);
});

// server.route({
//     method: 'GET',
//     path: '/',
//     handler(request, reply) {
//         return reply.file('index.html');
//     }
// });
//
// server.route({
//     method: 'GET',
//     path: '/{filename}',
//     handler(request, reply) {
//         return reply.file(request.params.filename);
//     }
// });

var PeerServer = require('peer').PeerServer;
var serv = PeerServer({port: 9000, path: '/'}, function(server) {

    console.log(server.address().address, server.address().port);

});
