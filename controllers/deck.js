const rescue = require('express-rescue');
const { Deck } = require('../models');

const getAll = rescue(async (_req, res) => {
  const decks = await Deck.findAll();
  return res.status(200).json(decks);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const deck = await Deck.findByPk(id);
  if (!deck) return res.status(400).json({ message: 'Deck does not exist' });
  res.status(200).json(deck);
})

module.exports = {
  getAll,
  getById,
};
