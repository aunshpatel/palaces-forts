var express = require('express');
var router = express.Router();
const palacesCtrl = require('../controllers/palaceControllers');

// GET /movies
router.get('/', palacesCtrl.index);

module.exports = router;
