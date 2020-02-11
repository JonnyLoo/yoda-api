const express = require('express');
const ROUTER = express.Router();

const controller = require('../../controllers');

// admin routes
ROUTER.get('/', controller.getQuotes);
ROUTER.get('/quote/:id', controller.getQuote);
ROUTER.post('/quote/create', controller.createQuote);
ROUTER.delete('/quote/:id', controller.deleteQuote);
ROUTER.patch('/quote/:id', controller.updateQuote);

// app routes
ROUTER.get('/random', controller.getRandomQuote);

module.exports = ROUTER;
