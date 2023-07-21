const Palace = require('../models/palaceModel');

async function index(req, res) {
    //const palaces = await Palace.find({});
    //res.render('palaces/index', { title: 'All Palaces/Forts', palaces });
    res.render('palaces/index', { title: 'All Palaces/Forts' });
}

//Details of a palace
// async function show(req, res) {
//   const palaces = await Palace.findById(req.params.id);
//   res.render('palaces/showPalaces', { title: 'Palace/Fort Details', palaces});
// }

function newPalace(req, res) {
  res.render('palaces/newPalace', { title: 'Add New Palace/Fort', errorMsg: '' });
}

module.exports = {
    index,
    //show,
    new: newPalace,

}