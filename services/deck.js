const { Deck } = require('../models');

const validateEntries = (entries) => {
  const { name, attr1, attr2, attr3, coverImg } = entries;
  if (!name || !attr1
      || !attr2 || !attr3 || !coverImg) {
        return { status: 400, message: 'Invalid entries.' };
      }
  return false;
}

const validateExists = async (entries) => {
  const { name } = entries;
  const exists = await Deck.findOne({ where: { name } });
  if (exists && exists.dataValues.name == name) return { status: 400, message: 'Deck already exists.' };
  return false;
}

const canRemove = async (id) => {
  const exists = await Deck.findOne({ where: { id } });
  if (!exists) return { status: 400, message: 'Deck does not exist.' };
  return false;
}

const isValid = async (entries) => {
  const entriesAreValid = validateEntries(entries);
  const entriesExists = await validateExists(entries);
  if (entriesAreValid) return entriesAreValid;
  if (entriesExists) return entriesExists;
  return true;
}

module.exports = {
  isValid,
  canRemove,
}