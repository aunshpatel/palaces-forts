var express = require('express');
var router = express.Router();
const palacesCtrl = require('../controllers/palaceControllers');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /palaces
router.get('/', palacesCtrl.index);

router.get('/newPalaces',ensureLoggedIn, palacesCtrl.new);

router.get('/:id', palacesCtrl.show);

router.delete('/:id', palacesCtrl.delete);

router.post('/', ensureLoggedIn, palacesCtrl.create);

router.post('/:id/editPalaces', palacesCtrl.edit);

router.put('/:id', palacesCtrl.update);

module.exports = router;
