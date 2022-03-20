const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  next();
})

const routes = [
  {
    path: '/addConference',
    method: 'post',
    handler: './controllers/Conference.js',
    action: 'addConference'
  },
  {
    path: '/getConferences',
    method: 'get',
    handler: './controllers/Conference.js',
    action: 'getConferences'
  }
];

routes.forEach(route => {
  router[route.method](route.path, require(route.handler)[route.action]);
});

module.exports = router;