const { DeckCard } = require('../models');
const rescue = require('express-rescue');

const getAll = rescue(async (req, res) => {
  const deckCards = await DeckCard.findAll();
  res.status(200).json(deckCards);
});

module.exports = {
  getAll,
};
