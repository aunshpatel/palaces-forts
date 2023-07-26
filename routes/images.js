const express = require('express');
const router = express.Router();
const imagesCtrl = require('../controllers/imageControllers');

router.post('/palaces/:id/addImages', imagesCtrl.create);

//router.delete('/images/:id', imagesCtrl.delete);

//Update a image(update button)
//router.put('/images/:id', imagesCtrl.update);

//router.get('/palaces/:id/editImages', imagesCtrl.edit);

module.exports = router;