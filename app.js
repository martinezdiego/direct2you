const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const settings = require('./settings');

const models = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

if (settings.env === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

models.sequelize.sync();

app.listen(settings.port, () => console.log(`Listening on port ${settings.port}`)); 
