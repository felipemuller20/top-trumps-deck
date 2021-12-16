const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const DeckController = require('./controllers/deck');
const CardController = require('./controllers/card');

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(bodyParser.json());

app.get('/decks', DeckController.getAll);
app.get('/deck/:id', DeckController.getById);
app.get('/cards', CardController.getAll);
app.get('/card/:id', CardController.getById);

app.post('/deck', DeckController.create);

app.delete('/deck/:id', DeckController.remove);

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));