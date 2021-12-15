'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || 'localhost'

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('cards',
        [{
          id: 1,
          name: 'Escavadeira de Areia',
          attr1: 70,
          attr2: 50,
          attr3: 30,
          description: 'Uma escavadeira comum, muito utilizada no início de construções de grandes edifícios corporativos',
          image: `http://${HOST}:${PORT}/images/escava-areia.jpg`,
          trump: false,
        },
        {
          id: 2,
          name: 'Escavadeira de Brinquedo',
          attr1: 10,
          attr2: 10,
          attr3: 60,
          description: 'Escavadeira feita de um material um pouco mais resistente que o plástico. Muito utilizado por colecionadores de Action Figures.',
          image: `http://${HOST}:${PORT}/images/retro-brinquedo.jpg`,
          trump: false,
        },
        {
          id: 3,
          name: 'Escavadeira de Luxo',
          attr1: 80,
          attr2: 20,
          attr3: 50,
          description: 'Escavadeira de luxo, muito utilizada pela elite agropecuária brasileira.',
          image: `http://${HOST}:${PORT}/images/retro-brinquedo.jpg`,
          trump: false,
        },
        {
          id: 4,
          name: 'Escavadeira Deus',
          attr1: 70,
          attr2: 40,
          attr3: 40,
          description: 'Alguns dizem não existir, porém outros acreditam na sua existência por conta da sua fé. Realiza milagres em aqueles que acreditam.',
          image: `http://${HOST}:${PORT}/images/cover-escavadeira.jpg`,
          trump: true,
        },
        {
          id: 5,
          name: 'Escavadeira Barata',
          attr1: 10,
          attr2: 5,
          attr3: 13,
          description: 'Escavadeira feita de materiais reciclados. Bastante utilizado pelas pessoas sem condições financeiras.',
          image: `http://${HOST}:${PORT}/images/retro-brinquedo.jpg`,
          trump: false,
        }
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('cards', null, {});
    },
  };
