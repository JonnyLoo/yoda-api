const Models = require('../models');

const Quote = Models.Quote;

const getQuotes = async (req, res) => {
  console.log('GET ALL QUOTES');

  try {
    const quotes = await Quote.find({});

    return res.status(200).json(quotes);
  }
  catch (err) {
    return res.status(500).json({ error: err });
  }
}

const getQuote = async (req, res) => {
  console.log('GET QUOTE');

  try {
    const quote = await Quote.find({ _id: req.params.id });

    return res.status(200).json(quote);
  }
  catch (err) {
    return res.status(500).json({ error: err });
  }
}

const createQuote = async (req, res) => {
  console.log('CREATE QUOTE');

  const quote = new Quote({
    english: req.body.english,
    yodish: req.body.yodish
  });

  try {
    const created = await quote.save();

    return res.status(201).json({ success: true, quote: created });
  }
  catch (err) {
    return res.status(500).json({ error: err });
  }
}

const deleteQuote = async (req, res) => {
  console.log('DELETE QUOTE');

  try {
    const deleted = await Quote.deleteOne({ _id: req.params.id });

    return res.status(200).json({ success: true, quote: deleted });
  }
  catch (err) {
    return res.status(500).json({ error: err });
  }
}

const updateQuote = async (req, res) => {
  console.log('UPDATE QUOTE');

  const updatedQuote = {};
  if (req.body.english) updatedQuote.english = req.body.english;
  if (req.body.yodish) updatedQuote.yodish = req.body.yodish;

  try {
    const updated = await Quote.updateOne({ _id: req.params.id }, updatedQuote);

    return res.status(200).json({ success: true, quote: updated });
  }
  catch (err) {
    return res.status(500).json({ error: err });
  }
}

module.exports = {
  getQuotes,
  getQuote,
  createQuote,
  deleteQuote,
  updateQuote
};
