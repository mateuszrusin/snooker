'use strict';
var HOST = 'localhost';
var PORT = 3000;
var PHOTOS = 'img';
var Hapi = require('hapi');
var Mongojs = require('mongojs');
var Fs = require('fs');
var Path = require('path');
var Inert = require('inert');
var Db = Mongojs('mongodb://localhost:27017/snooker', ['games']);
var server = new Hapi.Server();
server.register(Inert, function () { });
server.connection({ port: PORT, host: HOST });
server.route({
    method: 'GET',
    path: '/test',
    handler: function (request, reply) {
        var file = 'plik.jakis.jpg';
        console.log(Path.parse(file));
        reply();
    }
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        Db.games.save({ created: 'just now' }, function (err, doc) {
            reply('Inserted' + doc._id.toString());
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
    path: '/save',
    handler: function (request, reply) {
        Db.games.save(request.payload, function (err, doc) {
            reply('Inserted: ' + doc._id.toString());
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
            if (!data.file) {
                reply();
            }
            var name = Date.now() + Path.parse(data.file.hapi.filename).ext;
            var path = [__dirname, PHOTOS, name].join('/');
            var file = Fs.createWriteStream(path);
            file.on('error', function (err) {
                console.error(err);
            });
            data.file.pipe(file);
            data.file.on('end', function (err) {
                reply([server.info.uri, PHOTOS, name].join('/'));
            });
        }
    }
});
server.route({
    method: 'GET',
    path: '/img/{filename}',
    handler: {
        file: function (request) {
            return [PHOTOS, request.params.filename].join('/');
        }
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log("Server running at: " + server.info.uri);
});
