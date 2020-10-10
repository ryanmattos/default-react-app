const express = require('express');

const ExampleController = require('./controllers/ExampleController');

const routes = express.Router();

/*
   method examples: get, post, etc.

   routes.method('/path', ControllerName.function);
*/

routes.post('/test', ExampleController.index);

module.exports = routes;