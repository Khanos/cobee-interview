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
  }
];

routes.forEach(route => {
  router[route.method](route.path, require(route.handler)[route.action]);
});

module.exports = router;