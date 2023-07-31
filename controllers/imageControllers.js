const Palace = require('../models/palaceModel');

module.exports = {
    create,
    delete: deletePhoto,
}

async function create(req, res) {
    const palace = await Palace.findById(req.params.id);

    req.body.user = req.user.id;
    
    palace.images.push(req.body);
    try {
        await palace.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/palaces/${palace._id}`);
}

async function deletePhoto(req, res) {
    const palace = await Palace.findOne({ 'images._id': req.params.id, 'images.user': req.user._id });
    if (!palace) return res.redirect('/palaces');
    palace.images.remove(req.params.id);
    await palace.save();
    res.redirect(`/palaces/${palace._id}`);
}