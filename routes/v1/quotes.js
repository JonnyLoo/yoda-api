const express = require('express');

const ROUTER = express.Router();
const controller = require('../../controllers');

ROUTER.get('/:id', controller.getQuote);
ROUTER.post('/create', controller.createQuote);
ROUTER.delete('/:id', controller.deleteQuote);
ROUTER.put('/:id', controller.updateQuote);

module.exports = ROUTER;
