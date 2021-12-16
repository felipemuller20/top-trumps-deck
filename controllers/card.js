const rescue = require('express-rescue');
const { Card } = require('../models');

const getAll = rescue(async (req, res) => {
  const cards = await Card.findAll();
  res.status(200).json(cards);
});

module.exports = {
  getAll,
}