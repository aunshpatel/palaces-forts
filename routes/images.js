const express = require('express');
const router = express.Router();
const imagesCtrl = require('../controllers/imageControllers');

router.post('/palaces/:id/addImages', imagesCtrl.create);

router.delete('/photos/:id', imagesCtrl.delete);

module.exports = router;