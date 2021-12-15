'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      attr1: {
        type: Sequelize.STRING
      },
      attr2: {
        type: Sequelize.STRING
      },
      attr3: {
        type: Sequelize.STRING
      },
      coverImg: {
          type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('decks');
  }
};