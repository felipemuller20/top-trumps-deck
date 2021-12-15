'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cards', {
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
        type: Sequelize.INTEGER
      },
      attr2: {
        type: Sequelize.INTEGER
      },
      attr3: {
        type: Sequelize.INTEGER
      },
      trump: {
          type: Sequelize.BOOLEAN
      },
      description: {
          type: Sequelize.STRING
      },
      image: {
          type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cards');
  }
};