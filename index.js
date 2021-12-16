const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const DeckController = require('./controllers/deck');

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(bodyParser.json());

app.get('/decks', DeckController.getAll);
app.get('/deck/:id', DeckController.getById);

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));