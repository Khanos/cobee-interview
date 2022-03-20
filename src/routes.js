const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  next();
})

const routes = [
];

routes.forEach(route => {
  router[route.method](route.path, require(route.handler)[route.action]);
});

module.exports = router;