const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviewControllers');

router.post('/palaces/:id/reviews', reviewsCtrl.create);

module.exports = router;