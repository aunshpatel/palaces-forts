const Palace = require('../models/palaceModel');

module.exports = {
    create,
    delete: deleteReviews,
}

async function create(req, res) {
    const palace = await Palace.findById(req.params.id);

    req.body.user = req.user.id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    console.log(req.body.userName);
    palace.reviews.push(req.body);
    try {
        await palace.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/palaces/${palace._id}`);
}

async function deleteReviews(req, res) {
    const palace = await Palace.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });

    if (!palace){
        return res.redirect('/palaces');
    }
    palace.reviews.remove(req.params.id);
    await palace.save();
    res.redirect(`/palaces/${palace._id}`);
}