const express = require('express');
const ROUTER = express.Router();

const v1 = require('./v1');

ROUTER.use('/v1', v1);

module.exports = ROUTER;
