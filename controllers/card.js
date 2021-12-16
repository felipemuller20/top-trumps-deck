const rescue = require('express-rescue');
const { Card, Deck } = require('../models');

const getAll = rescue(async (req, res) => {
  const cards = await Card.findAll({
    include: [
      { model: Deck, as: 'decks', through: { attributes: [] } },
    ]
  });
  res.status(200).json(cards);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const card = await Card.findOne({
    where: { id },
    include: [
      { model: Deck, as: 'decks', through: { attributes: [] } },
    ]
  });
  if (!card) return res.status(400).json({ message: 'Card does not exist' });
  res.status(200).json(card);
});

module.exports = {
  getAll,
  getById,
}