const express = require('express');
const app = express();
const homeController = require('../controllers/home_controller');
const router = express.Router();
console.log('router loaded');

app.get('/', homeController.home);

module.exports = router;