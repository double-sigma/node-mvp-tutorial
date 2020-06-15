var express = require('express');
var router = express.Router();


let = landing = require('../controllers/landing');
router.get('/', landing.get_landing);

module.exports = router;