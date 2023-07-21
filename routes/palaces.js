var express = require('express');
var router = express.Router();
const palacesCtrl = require('../controllers/palaceControllers');

// GET /palaces
router.get('/', palacesCtrl.index);

// GET /palaces/new
router.get('/newPalaces', palacesCtrl.new);

router.post('/', palacesCtrl.create);

// GET /palaces/:id 
// router.get('/:id', palacesCtrl.show);

module.exports = router;
