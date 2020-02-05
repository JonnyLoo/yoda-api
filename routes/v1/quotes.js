const express = require('express');
const ROUTER = express.Router();

const controller = require('../../controllers');

ROUTER.get('/', controller.getQuotes);
ROUTER.get('/:id', controller.getQuote);
ROUTER.post('/create', controller.createQuote);
ROUTER.delete('/:id', controller.deleteQuote);
ROUTER.patch('/:id', controller.updateQuote);

module.exports = ROUTER;
