const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviewControllers');

router.post('/palaces/:id/reviews', reviewsCtrl.create);

router.delete('/reviews/:id', reviewsCtrl.delete);

//Update a review(update button)
router.put('/reviews/:id', reviewsCtrl.update);

router.get('/palaces/:id/editReviews', reviewsCtrl.edit);

module.exports = router;