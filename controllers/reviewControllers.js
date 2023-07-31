const Palace = require('../models/palaceModel');

module.exports = {
    create,
    delete: deleteReviews,
    update,
    edit
}

async function create(req, res) {
    const palace = await Palace.findById(req.params.id);

    req.body.user = req.user.id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    
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

async function update(req, res) {
    const palace = await Palace.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    let review;
    let palaceReviews = palace.reviews;

    for(let i=0;i<palaceReviews.length;i++) {
        if(palaceReviews[i]._id == req.params.id) {
            review = palaceReviews[i];
            req.body.user = req.user.id;
            review.content = req.body.updateContent;
            review.rating = req.body.updateRating;
        }
    }
    
    try {
        await palace.save();
    } catch (err) {
        console.log(err);
    }

    res.redirect(`/palaces/${palace._id}`);
}

async function edit(req, res) {
    const palace = await Palace.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    let reviews;
    let palaceReviews = palace.reviews;

    for(let i=0;i<palaceReviews.length;i++) {
        if(palaceReviews[i]._id == req.params.id) {
            reviews = palaceReviews[i];
        }
    }
    
    res.render('palaces/editReviews', {
      title: 'Edit Palace Review',
      reviews
    });
}
  