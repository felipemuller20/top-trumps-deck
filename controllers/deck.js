const rescue = require('express-rescue');
const deckServices = require('../services/deck');
const { Deck, Card } = require('../models');

const getAll = rescue(async (_req, res) => {
  const decks = await Deck.findAll({
    include: [
      { model: Card, as: 'cards', through: { attributes: [] } },
    ]
  });
  return res.status(200).json(decks);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const deck = await Deck.findOne({
    where: { id },
    include: [
      { model: Card, as: 'cards', through: { attributes: [] } },
    ]
  });
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

const remove = rescue(async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const isValid = await deckServices.canRemove(id);
  if (isValid.message) return res.status(isValid.status).json({ message: isValid.message });

  if(!password || password !== 'aiiipapaiii') return res
  .status(401).json({ message: 'Invalid Password. Only the administrator can remove a deck.' })
  
  const deleted = await Deck.findOne({ where: { id } });
  await Deck.destroy({ where: { id } });
  res.status(200).json({ message: 'Deck successfully deleted', deleted });
})

module.exports = {
  getAll,
  getById,
  create,
  remove,
};
