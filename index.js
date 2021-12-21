const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
const DeckController = require('./controllers/deck');
const CardController = require('./controllers/card');
const DeckCardController = require('./controllers/deckCard');

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, './', 'images')));

app.get('/decks', DeckController.getAll);
app.get('/deck/:id', DeckController.getById);
app.get('/cards', CardController.getAll);
app.get('/card/:id', CardController.getById);
app.get('/decks-cards', DeckCardController.getAll);

app.post('/deck', DeckController.create);
app.post('/card', CardController.create);

app.delete('/deck/:id', DeckController.remove);
app.delete('/card/:id', CardController.remove);

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));