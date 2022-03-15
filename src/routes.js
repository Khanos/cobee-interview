const express = require('express');
const router = express.Router();

// Route index page
const routes = [
  {
    path: '/',
    method: 'get',
    handler: './controllers/main.js',
    action: 'index',
  },
  {
    path: '/getjson',
    method: 'get',
    handler: './controllers/main.js',
    action: 'getjson',
  }
]

routes.forEach(route => {
  // router.get('/', () = {})
  router[route.method](route.path, require(route.handler)[route.action]);
});

module.exports = router;