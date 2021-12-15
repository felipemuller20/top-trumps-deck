'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || 'localhost'

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('decksCards',
        [{
          deck_id: 1,
          card_id: 1,
        },
        {
          deck_id: 1,
          card_id: 2,
        },
        {
          deck_id: 1,
          card_id: 3,
        },
        {
          deck_id: 1,
          card_id: 4,
        },
        {
          deck_id: 1,
          card_id: 5,
        }
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('decksCards', null, {});
    },
  };
