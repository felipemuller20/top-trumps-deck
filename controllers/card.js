const rescue = require('express-rescue');
const { Card, Deck, DeckCard } = require('../models');
const CardServices = require('../services/card');

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

const create = rescue(async (req, res) => {
  const isValid = await CardServices.isValid(req.body);
  if (isValid.message) return res.status(isValid.status).json({ message: isValid.message });
  const { name, attr1, attr2, attr3, 
      description, image, trump = false, deckId } = req.body;
  const createdCard = await Card.create({ 
    name, attr1, attr2, attr3, description, image, trump
  });
  await DeckCard.create({ deck_id: deckId, card_id: createdCard.id });
  res.status(200).json(createdCard);
});

const remove = rescue(async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const isValid = await CardServices.canRemove(id);
  if (isValid.message) return res.status(isValid.status).json({ message: isValid.message });

  if(!password || password !== 'aiiipapaiii') return res
    .status(401).json({ message: 'Invalid Password. Only the administrator can remove a card.' })
  
  const deleted = await Card.findOne({ where: { id } });
  await Card.destroy({ where: { id } });
  res.status(200).json({ message: 'Card successfully deleted', deleted });
})

module.exports = {
  getAll,
  getById,
  create,
  remove,
}