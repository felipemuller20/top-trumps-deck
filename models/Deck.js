module.exports = (sequelize, DataTypes) => {
    const Deck = sequelize.define('Deck', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      attr1: DataTypes.STRING,
      attr2: DataTypes.STRING,
      attr3: DataTypes.STRING,
      coverImg: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'decks',
    });
  
    return Deck;
  };