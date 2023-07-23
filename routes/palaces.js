var express = require('express');
var router = express.Router();
const palacesCtrl = require('../controllers/palaceControllers');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /palaces
router.get('/', palacesCtrl.index);

// GET /palaces/new
router.get('/newPalaces', palacesCtrl.new);

//  GET /palaces/:id 
router.get('/:id', palacesCtrl.show);

router.post('/', palacesCtrl.create);

router.post('/', ensureLoggedIn, palacesCtrl.create);

module.exports = router;
