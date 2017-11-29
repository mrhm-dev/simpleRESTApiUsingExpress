const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Book = require('./model/book');

// Connect MongoDB Database
mongoose.connect('mongodb://localhost/booksapi', {useMongoClient: true});
mongoose.Promise = global.Promise;

const api = require('./route/api');

const app = express();

// Using Morgan Middleware for Logging
app.use(morgan('dev'));

// Using Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Route for api
app.use('/api', api);

// Catch 404 and Forward to Error Handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send({type: 'ERROR', message: res.locals.message});
});

app.listen(process.env.PORT || 4444, () => {
    console.log("Server is Running...");
});

