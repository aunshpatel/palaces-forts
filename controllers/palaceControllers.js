const Palace = require('../models/palaceModel');

async function index(req, res) {
    const palaces = await Palace.find({});
    res.render('palaces/index', { title: 'All Palaces/Forts', palaces });
  }

module.exports = {
    index
}