const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Helpdesk = require('./api/models/helpdeskModel');
const routes = require('./api/routes/helpdeskRoutes');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/helpdesk');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server is running on port ${port}`);