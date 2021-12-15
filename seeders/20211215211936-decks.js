'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || 'localhost'

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('decks',
        [{
          id: 1,
          name: 'Retroescavadeiras',
          attr1: 'Peso',
          attr2: 'Força',
          attr3: 'Agilidade',
          coverImg: `http://${HOST}:${PORT}/images/cover-escavadeira.jpg`
        },
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('decks', null, {});
    },
  };
