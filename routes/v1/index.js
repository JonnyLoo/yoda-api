const express = require('express');

const quotes = require('./quotes');
const ROUTER = express.Router();

ROUTER.use('/quotes', quotes);

module.exports = ROUTER;
