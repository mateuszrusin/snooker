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

var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

var options = {
    debug: true
}

app.use('/peer', ExpressPeerServer(server, options));

// save data to mongo
app.post('/game', bodyParser.text(), function(request, response) {

    const data = JSON.parse(request.body);

    Db.games.save(data, function (err, doc) {
        response.send(doc._id.toString());
    });
});

// get data from mongo
app.get('/game/:id', function (request, response) {
    Db.games.findOne({
        _id: Mongojs.ObjectId(request.params.id)
    }, function(err, doc) {
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