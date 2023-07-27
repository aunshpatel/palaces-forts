const Palace = require('../models/palaceModel');

module.exports = {
    create,
    delete: deletePhoto,
}

async function create(req, res) {
    const palace = await Palace.findById(req.params.id);

    req.body.user = req.user.id;
    console.log("palace.images:"+palace.images);

    console.log("req.body.images:"+req.body.images);
    palace.images.push(req.body);
    try {
        await palace.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/palaces/${palace._id}`);
}

async function deletePhoto(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const palace = await Palace.findOne({ 'images._id': req.params.id, 'images.user': req.user._id });
    console.log("palace"+palace);
    if (!palace) return res.redirect('/palaces');
    // Remove the review using the remove method available on Mongoose arrays
    palace.images.remove(req.params.id);
    // Save the updated movie doc
    await palace.save();
    // Redirect back to the movie's show view
    res.redirect(`/palaces/${palace._id}`);
}