const express = require('express');
const router = express.Router();

const routes = [
  {
    url: '/',
    method: 'get',
    handler: './controllers/main.js',
    entrypoint: 'index'
  },
  {
    url: '/getjson',
    method: 'get',
    handler: './controllers/main.js',
    entrypoint: 'getJson'
  }
]

// Init all routes
routes.forEach(route => {
  router[route.method](route.url, require(route.handler)[route.entrypoint]);
});

module.exports = router;