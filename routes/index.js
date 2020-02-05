const express = require('express');

const v1 = require('./v1');
const ROUTER = express.Router();

ROUTER.use('/v1', v1);

module.exports = ROUTER;
