const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logMiddleware = require('./common/logMiddleware');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(logMiddleware);
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

fs.readdirSync('./controllers')
    .map(fn => require(`./controllers/${fn}`))
    .forEach(c => app.use(`/${c.path}`, c.router));

app.listen(port, () => console.log(`Server listening on port ${port}`));
