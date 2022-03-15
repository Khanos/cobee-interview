const express = require('express');
const router = express.Router();

const routes = [
  {
    path: '/',
    method: 'get',
    handler: './controllers/main.js',
    action: 'index'
  },
  {
    path: '/getjson',
    method: 'get',
    handler: './controllers/main.js',
    action: 'getJson'
  },
  {
    path: '/getjsonfromapi',
    method: 'get',
    handler: './controllers/main.js',
    action: 'getJsonFromApi'
  },
  {
    path: '/postjson',
    method: 'post',
    handler: './controllers/main.js',
    action: 'postJson'
  },
  {
    path: '/postjsonbyid/:id',
    method: 'post',
    handler: './controllers/main.js',
    action: 'postJsonById'
  }
];

// router.get('/', () => {});
routes.forEach(route => {
  router[route.method](route.path, require(route.handler)[route.action]);
});

module.exports = router;