const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongodbConnection = require('./mongodbConnection');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

var db = mongodbConnection.connect();

var Catchup = require('../models/catchup');

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

// Fetch single catchup.
app.get('/catchup/:id', (request, response) => {
    var db = request.db;
    Catchup.findById(request.params.id, 'title description', function (error, catchup) {
        if (error) {
            console.error(error);
        }
        response.send(catchup);
    })
});

// Update a catchup.
app.put('/catchups/:id', (request, response) => {
    var db = request.db;
    Catchup.findById(request.params.id, 'title description', function (error, catchup) {
        if (error) {
            console.error(error);
        }

        catchup.title = request.body.title;
        catchup.description = request.body.description;
        catchup.save(function (error) {
            if (error) {
                console.log(error);
            }
            response.send({
                success: true
            });
        });
    })
});

// Delete a catchup.
app.delete('/catchups/:id', (request, response) => {
    var db = request.db;
    Catchup.remove({
        _id: request.params.id
    }, function(error, catchup) {
        if (error) {
            response.send(error);
        }
        response.send({
            success: true
        })
    })
});

app.listen(process.env.PORT || 8081);