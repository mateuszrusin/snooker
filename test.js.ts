'use strict';

const Hapi = require('hapi');
const Mongojs = require('mongojs');
const Fs = require('fs');

const db = Mongojs('mongodb://localhost:27017/snooker', ['games']);
const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        db.games.save({created: 'just now'}, function(err, doc) {
            reply('Inserted' + doc._id.toString())
        });
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


            var data = request.payload;

            reply(data);

            //console.log(request.payload);

            // if (data.file) {
            //     var name = data.file.hapi.filename;
            //     var path = __dirname + "/uploads/" + name;
            //     var file = Fs.createWriteStream(path);
            //
            //     file.on('error', function (err) {
            //         console.error(err)
            //     });
            //
            //     data.file.pipe(file);
            //
            //     data.file.on('end', function (err) {
            //         var ret = {
            //             filename: data.file.hapi.filename,
            //             headers: data.file.hapi.headers
            //         }
            //         reply(JSON.stringify(ret));
            //     })
            // }
        }
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});