const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// App setup.
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Utilities.
const utils = require('./utils');

// Database connection.
const mongodbConnection = require('./mongodbConnection');
var db = mongodbConnection.connect();

var Catchup = require("../models/catchup");

/**
 * Retrieves all catch-ups.
 */
app.get('/catchups', (request, response) => {
    Catchup.find({}, 'date summary', function (error, catchups) {
        if (error) { console.error(error); }
        response.send({
            catchups: catchups
        });
    }).sort({ _id: -1 })
});

/**
 * Adds/creates catch-up.
 */
app.post('/add_catchup', (request, response) => {
    var db = request.db;
    var date = utils.getFormattedDate();
    var summary = request.body.summary;
    var new_catchup = new Catchup({
        date: date,
        summary: summary
    });

    new_catchup.save(function(error) {
        if (error) {
            console.log(error)
        }
        response.send({
            success: true
        });
    });
});

app.put('/catchups/:id', (request, response) => {
    var db = request.db;
    Catchup.findById(request.params.id, 'date summary', function (error, catchup) {
        if (error) {
            console.error(error);
        }

        catchup.date = request.body.date;
        catchup.summary = request.body.summary;
        catchup.save(function (error) {
            if (error) {
                console.log(error);
            }
            response.send({
                success: true
            });
        });
    });
});

/**
 * Deletes catch-up with id 'id'.
 */
app.delete('/catchups/:id', (request, response) => {
    var db = request.db;
    Catchup.remove({
        _id: request.params.id
    }, function (error, catchup) {
        if (error)
            response.send(error);
        response.send({
            success: true
        });
    });
});

/**
 * Get catch-up with id 'id'.
 */
app.get('/catchup/:id', (request, response) => {
    var db = request.db;
    Catchup.findById(request.params.id, 'date summary', function (error, catchup) {
        if (error) {
            console.error(error);
        }
        response.send(catchup);
    });
});

app.listen(process.env.PORT || 8081);
