const Palace = require('../models/palaceModel');

async function index(req, res) {
    const palaces = await Palace.find({});
    res.render('palaces/index', { title: 'All Palaces/Forts', palaces });
    //res.render('palaces/index', { title: 'All Palaces/Forts' });
}

//Details of a palace
async function show(req, res) {
  const palaces = await Palace.findById(req.params.id);
  res.render('palaces/showPalace', { title: 'Palace/Fort Details', palaces});
}

function newPalace(req, res) {
  res.render('palaces/newPalace', { title: 'Add New Palace/Fort', errorMsg: '' });
}

async function create(req, res) {
  req.body.openToPublic = !!req.body.openToPublic;
  try {
    const flight = await Palace.create(req.body);
    res.redirect(`/palaces`);
  } catch(err) {
    console.log(err);
    res.render('palaces/new', err.message);
  }
}

module.exports = {
    index,
    show,
    new: newPalace,
    create
}