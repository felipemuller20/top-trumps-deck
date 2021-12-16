const rescue = require('express-rescue');
const deckServices = require('../services/deck');
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

const create = rescue(async (req, res) => {
  const { name, attr1, attr2, attr3, coverImg } = req.body;
  const entries = await deckServices.isValid(req.body);
  if (entries.message) return res.status(entries.status).json({ message: entries.message });
  const createdDeck = await Deck.create({ name, attr1, attr2, attr3, coverImg });
  res.status(201).json(createdDeck);
})

module.exports = {
  getAll,
  getById,
  create,
};
