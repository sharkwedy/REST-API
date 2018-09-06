const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const movie = require('../controllers/test.controller');

router.get('/', test.index);

module.exports = router;
