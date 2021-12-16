const { Card } = require('../models');

const validateName = async (entries) => {
  const { name } = entries;

  if (!name) return { status: 400, message: 'Field "name" should be filled.' }
  const exists = await Card.findOne({ where: { name } });

  if (exists && exists.dataValues.name == name) return { 
    status: 400, message: 'Card already exists. Change this Card Name.'
  };
  return false;
}

const validateAttr = (entries) => {
  const { attr1, attr2, attr3 } = entries;
  if (!attr1 || !attr2 || !attr3) return { 
    status: 400, message: 'All attributes should be filled.'
  };
  return false;
}

const validateDescription = entries => {
  const { description, image, trump } = entries;
  if (!description || !image) return { 
    status: 400, message: 'Description or image missing.'
  };
  return false;
}

const validateDeckId = entries => {
  const { deckId } = entries;
  if (!deckId) return { 
    status: 400, message: 'Deck Id is missing.'
  };
  return false;
}

const isValid = async (entries) => {
  const validName = await validateName(entries);
  if (validName) return validName;
  const validAttr = validateAttr(entries);
  if (validAttr) return validAttr;
  const validDesc = validateDescription(entries);
  if (validDesc) return validDesc;
  const validDeckId = validateDeckId(entries);
  if (validDeckId) return validDeckId;
  return false;
}

module.exports = {
  isValid,
}