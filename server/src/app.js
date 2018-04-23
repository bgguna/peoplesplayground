const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/catchups');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
    console.log('Connection succeeded');
});

var Catchup = require('../models/catchup');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/catchups', (request, response) => {
    response.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
});

// Add new catchup.
app.post('/catchups', (request, response) => {
    var db = request.db;
    var title = request.body.title;
    var description = request.body.description;
    var new_catchup = new Catchup({
        title: title,
        description: description
    });

    new_catchup.save(function(error) {
        if (error) {
            console.log(error);
        }
        response.send({
            success: true,
            message: 'Catchup saved successfully.'
        })
    });
});

// Fetch all catchups.
app.get('/catchups', (request, response) => {
    Catchup.find({}, 'title description', function(error, catchups) {
        if (error) {
            console.error(error);
        }
        response.send({
            catchups: catchups
        })
    }).sort({_id:-1})
});

app.listen(process.env.PORT || 8081);