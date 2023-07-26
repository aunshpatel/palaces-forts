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
  //req.body.openToPublic = !!req.body.openToPublic;
  try {
    await Palace.create(req.body);
    res.redirect(`/palaces`);
  } catch(err) {
    console.log(err);
    res.render('palaces/new', err.message);
  }
}

async function edit(req,res) {
  //const palace = await Palace.findById(req.params.id);
  console.log("req.params.id:"+req.params.id);
  const palace = await Palace.findById(req.params.id);

  res.render('palaces/editPalaces', {
    title: 'Edit Palace/Fort Details',
    palace
  });
}

async function update(req, res) {
  const palace = await Palace.findById(req.params.id);
  console.log("palace:"+palace);

  palace.user = req.user.id;
  palace.palaceName = req.body.palaceName;
  palace.location = req.body.location;
  palace.googleMapLink = req.body.googleMapLink;
  palace.constructionStart = req.body.constructionStart;
  palace.constructionEnd = req.body.constructionEnd;
  palace.builtBy = req.body.builtBy;
  palace.currentOwner = req.body.currentOwner;
  palace.openToPublic = req.body.openToPublic;

  try {
    await palace.save();
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/palaces/${palace._id}`);
}

module.exports = {
    index,
    show,
    new: newPalace,
    create,
    edit,
    update
}