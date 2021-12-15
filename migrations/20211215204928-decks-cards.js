'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('decksCards', {
      deck_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'decks',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    }) 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('decksCards');
  }
};