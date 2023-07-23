var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Palace/Forts' });
  res.redirect('/palaces');
});


router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect:'/palaces',
    failureRedirect:'/palaces'
  }
));


router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/palaces');
  });
});

module.exports = router;
