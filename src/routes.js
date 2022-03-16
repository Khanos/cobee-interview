const express = require('express');
const router = express.Router()

const routes = [
  {
    path: '/',
    method: 'get',
    handler: './controllers/main.js',
    action: 'index'
  },
  {
    path: '/getuser',
    method: 'get',
    handler: './controllers/users.js',
    action: 'getUser'
  },
  {
    path: '/getjsonfromapi',
    method: 'get',
    handler: './controllers/users.js',
    action: 'getJsonFromApi'
  },
  {
    path: '/getjsonfromdatabase',
    method: 'get',
    handler: './controllers/users.js',
    action: 'getJsonFromDataBase'
  }
]

routes.forEach(route => {
  router[route.method](route.path, require(route.handler)[route.action])  // router.get('/', () => {})
});

module.exports = router;