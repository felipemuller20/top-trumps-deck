require('dotenv').config();

const config = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  host: process.env.SQL_HOST,
  dialect: 'mysql',
}

module.exports = {
  development: {
    ...config,
    database: 'trump_deck_dev'
  },
  test: {
    ...config,
    database: 'trump_deck_test'
  },
  production: {
    ...config,
    database: 'trump_deck'
  },
};