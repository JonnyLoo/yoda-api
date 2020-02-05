const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const QuoteSchema = new mongoose.Schema({
  id: ObjectId,
  english: String,
  yodish: String
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
