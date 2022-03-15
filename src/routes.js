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

// Validate the routes
const uniqueRoutes = new Set();
routes.forEach(route => {
  if (uniqueRoutes.has(route.url)) {
    throw new Error(`Duplicated route: ${route.url}`);
  }
  uniqueRoutes.add(route.url);
});

// Init all routes
routes.forEach(route => {
  router[route.method](route.url, require(route.handler)[route.entrypoint]);
});

module.exports = router;