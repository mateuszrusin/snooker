'use strict';

const HOST = 'localhost';
const PORT = 3000;
const PHOTOS = 'img';

var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;
var Mongojs = require('mongojs');
var Fs = require('fs');
var Path = require('path');
var Db = Mongojs('mongodb://localhost:27017/snooker', ['games']);
var multer  = require('multer');
var bodyParser = require('body-parser');
var joi = require('joi');
//  Initialize valid-express module
var validExpress = require('valid-express');
var validator = validExpress();


var server = app.listen(PORT, function () {
    console.log('Listening on port ' + PORT)
})

var options = {
    debug: true
}

app.use('/peer', ExpressPeerServer(server, options));

app.use(bodyParser.json());

var bodySchema = {
    body: {
        player1: joi.object().required(),
        player2: joi.object().required(),
        referee: joi.object().required(),
        frames: joi.number().integer().min(1).max(100),
        title: joi.string().allow('')
    }
};


// save data to mongo
app.post('/game', validator.validate(bodySchema), function(request, response) {

    const data = (request.body);

    Db.games.save(data, function (err, doc) {
        response.send(doc._id.toString());
    });
});

// get data from mongo
app.get('/game/:id', function (request, response) {

    const data = { _id: Mongojs.ObjectId(request.params.id) };

    Db.games.findOne(data, function(err, doc) {
        response.send(doc)
    });
});

var upload = multer({dest: 'img/'});

//save uploaded image
app.post('/upload', upload.single('file'), function(request, response) {

    const name = Date.now() + Path.parse(request.file.originalname).ext;
    const path = [__dirname, PHOTOS, name].join('/');

    Fs.rename(request.file.path, path, function(err) {
        if (err) {
            console.log(err);
        }

        response.send(name);
    });

});

app.use('/img', express.static('img'));
app.use('/asset', express.static('asset'));

app.use('/', express.static('dist'))