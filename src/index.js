const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));