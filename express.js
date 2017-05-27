'use strict';

const IP = process.argv[2] || 'localhost';
const PORT = process.argv[3] || 3000;
const PHOTOS = 'img';

var express = require('express');
var app = express();

var server = app.listen(PORT, IP, function() {
    console.log(server.address());
});

/** PEER **/
var ExpressPeerServer = require('peer').ExpressPeerServer;
app.use('/peer', ExpressPeerServer(server, {debug: true}));

/** GAME **/
var bodyParser = require('body-parser');
var Mongojs = require('mongojs');
var Db = Mongojs('mongodb://' + IP + ':27017/snooker', ['games']);
var joi = require('joi');
var validExpress = require('valid-express');
var validator = validExpress();
var bodySchema = {
    body: {
        player1: joi.object().keys({
            name: joi.string().required(),
            photo: joi.string().allow(null)
        }),
        player2: joi.object().keys({
            name: joi.string().required(),
            photo: joi.string().allow(null)
        }),
        referee: joi.object().required(),
        frames: joi.number().integer().min(1).max(100),
        title: joi.string().allow('')
    }
};
app.use(bodyParser.json());
app.post('/game', validator.validate(bodySchema), function(request, response) {
    var data = request.body;
    data.created = new Date().toISOString().replace('T', ' ').substr(0, 19);

    Db.games.save(data, function (err, doc) {
        response.send(doc._id.toString());
    });
});
app.get('/game/:id', function (request, response) {
    Db.games.findOne({_id: Mongojs.ObjectId(request.params.id)}, function(err, doc) {
        response.send(doc)
    });
});

/** UPLOAD **/
var Fs = require('fs');
var Path = require('path');
var multer  = require('multer');
var upload = multer({dest: PHOTOS});
app.post('/upload', upload.single('file'), function(request, response) {
    var name = Date.now() + Path.parse(request.file.originalname).ext;
    var path = [__dirname, PHOTOS, name].join('/');
    Fs.rename(request.file.path, path, function(err) {
        if (err) {
            console.log(err);
        }
        response.send(name);
    });
});

/** STATIC **/
app.use('/img', express.static('img'));
app.use('/asset', express.static('asset'));
app.use('/', express.static('dist'))