module.exports = (sequelize, DataTypes) => {
    const DeckCard = sequelize.define('DeckCard', {},
    { timestamps: false, tableName: 'decksCards' });
    
    DeckCard.associate = (models) => {
      models.Deck.belongsToMany(models.Card, {
        as: 'cards',
        through: DeckCard,
        foreignKey: 'deck_id',
        otherKey: 'card_id',
      });
      models.Card.belongsToMany(models.Deck, {
        as: 'decks',
        through: DeckCard,
        foreignKey: 'card_id',
        otherKey: 'deck_id',
      });
    };
    
    return DeckCard;
  };