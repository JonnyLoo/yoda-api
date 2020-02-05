const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./configs');
const app = express();

const router = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json(), cors());

if (process.env.NODE_ENV === 'local') {
  mongoose.connect(config.DB_URL_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true });
} else {
  mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}
const db = mongoose.connection;

db.once('open', () => {
  console.log('connected to DB you are\n');
  // uncomment to run db setup
  // require('./setup-db.js');
});

db.on('error', () => {
  console.error('error connecting to DB');
});

app.use('/yoda', router);

app.listen(config.PORT, () => {
  console.log(`app listening on port ${config.PORT}`);
});
