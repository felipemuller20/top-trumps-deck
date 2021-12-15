module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      attr1: DataTypes.INTEGER,
      attr2: DataTypes.INTEGER,
      attr3: DataTypes.INTEGER,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      trump: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
      tableName: 'cards',
    });
  
    return Card;
  };