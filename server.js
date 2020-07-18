const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/healthCheck', async function (req, res) {
    res.send('Service is working');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
