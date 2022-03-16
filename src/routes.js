const express = require('express');
const router = express.Router();

const routes = [
  {
    path: '/',
    method: 'get',
    handler: './controllers/index.js',
    action: 'index'
  },
  {
    path: '/getuser',
    method: 'get',
    handler: './controllers/user.js',
    action: 'getUser'
  },
  {
    path: '/getuserfromapi',
    method: 'get',
    handler: './controllers/user.js',
    action: 'getUserFromApi'
  },
  {
    path: '/getuserfromdatabase',
    method: 'get',
    handler: './controllers/user.js',
    action: 'getUserFromDataBase'
  }
];

routes.forEach(route => {
  router[route.method](route.path, require(route.handler)[route.action]);
}); // router.get('/', ()=>{})

module.exports = router;