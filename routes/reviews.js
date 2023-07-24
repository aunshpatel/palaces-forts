const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviewControllers');

router.post('/palaces/:id/reviews', reviewsCtrl.create);

router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;