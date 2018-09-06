const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const movie = require('../controllers/test.controller');

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("Requisição GET");
});

module.exports = router;
