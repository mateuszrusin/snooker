'use strict';

const Hapi = require('hapi');
const Mongojs = require('mongojs');
const Fs = require('fs');
const Path = require('path');

const db = Mongojs('mongodb://localhost:27017/snooker', ['games']);
const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/test',
    handler: function (request, reply) {
        const file = 'plik.jakis.jpg';

        console.log(Path.parse(file));

        reply();
    }
});


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        db.games.save({created: 'just now'}, function(err, doc) {
            reply('Inserted' + doc._id.toString())
        });
    }
});
// options
server.route({
    method: 'OPTIONS',
    path: '/upload',
    handler: function (request, reply) {
        reply();
    }
});

// save data to mongo
server.route({
    method: 'POST',
    path: '/',
    handler: function (request, reply) {
        db.games.save(request.payload, function(err, doc) {
            reply('Inserted: ' + doc._id.toString())
        });
    }
});

//save uploaded image
server.route({
    method: 'POST',
    path: '/upload',
    config: {
        payload: {
            maxBytes: 209715200,
            output: 'stream',
            parse: true
        },
        handler: function (request, reply) {

            const data = request.payload;

            if (!data.file) {
                reply();
            }

            const name = Date.now() + Path.parse(data.file.hapi.filename).ext;


            const path = __dirname + "/uploads/" + name;
            const file = Fs.createWriteStream(path);

            file.on('error', function (err) {
                console.error(err)
            });

            data.file.pipe(file);
            data.file.on('end', function (err) {
                const ret = {
                    filename: name,
                }
                reply(JSON.stringify(ret));
            })
        }
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});