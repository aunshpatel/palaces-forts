const Palace = require('../models/palaceModel');

async function index(req, res) {
    const palaces = await Palace.find({});
    res.render('palaces/index', { title: 'All Palaces/Forts List', palaces });
}

async function show(req, res) {
  const palaces = await Palace.findById(req.params.id);
  res.render('palaces/showPalace', { title: 'Palace/Fort Details', palaces});
}

function newPalace(req, res) {
  res.render('palaces/newPalace', { title: 'Add New Palace/Fort', errorMsg: '' });
}

async function create(req, res) {
  req.body.user = req.user.id;
  try {
    await Palace.create(req.body);
    res.redirect(`/palaces`);
  } catch(err) {
    console.log(err);
    res.render('palaces/new', err.message);
  }
}

async function edit(req,res) {
  const palace = await Palace.findById(req.params.id);
  res.render('palaces/editPalaces', {
    title: 'Edit Palace/Fort Details',
    palace
  });
}

async function update(req, res) {
  const palace = await Palace.findOneAndUpdate({_id: req.params.id, user: req.user._id},
    req.body,
    {new: true}
  );
  res.redirect(`/palaces/${palace._id}`);
}

async function deletePalace(req, res) {
  await Palace.findOneAndDelete({_id: req.params.id, user: req.user._id});
  res.redirect(`/palaces`);
}

module.exports = {
  index,
  show,
  new: newPalace,
  create,
  edit,
  update,
  delete: deletePalace,
}