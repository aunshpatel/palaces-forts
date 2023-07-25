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

async function update(req, res) {
    // const palaceReviews = await Palace.reviews.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // console.log('palaceReviews:'+palaceReviews)
    // if (!palace){
    //     return res.redirect('/palaces');
    // }
    // palace.reviews.remove(req.params.id);
    // await palace.save();
    // res.redirect(`/palaces/${palace._id}`);


    const palace = await Palace.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    console.log("palace:"+palace)
    let review;
    let palaceReviews = palace.reviews;
    console.log('palaace:'+palace);

    for(let i=0;i<palaceReviews.length;i++) {
        if(palaceReviews[i]._id == req.params.id) {
            review = palaceReviews[i];
            console.log('review11:'+review);

            req.body.user = req.user.id;
            console.log('req.body.user:'+req.body.user);
            console.log("req.body.updateContent:"+req.body.updateContent);
            console.log("req.body.updateRating:"+req.body.updateRating);
            review.content = req.body.updateContent;
            review.rating = req.body.updateRating;
            // palace.reviews.rating = req.user.rating;
            // console.log('palace.reviews.rating:'+req.user.rating);

            // palace.reviews.content = req.user.content;
            // console.log('palace.reviews.content:'+req.user.content);

            console.log('review12:'+review);
            // palace.reviews.push(review);
            // console.log('palace new:'+palace)
            // try {
            //     await palace.reviews.save();
                
            // } catch (err) {
            //     console.log(err);
            // }
            // res.redirect(`/palaces/${palace._id}`);
            //palace.reviews.update(req.params.id, req.body);
        }
    }
    //palace.reviews.update(review);

    //palace.reviews.push(review);
    console.log('palace new:'+palace)
    try {
        await palace.save();
    } catch (err) {
        console.log(err);
    }

    //palace.update(req.params.id, req.body);
    res.redirect(`/palaces/${palace._id}`);
}

async function edit(req, res) {
    // console.log('req.params.id:'+req.params.id);
    // console.log('req.user._id :'+req.user._id );
    const palace = await Palace.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    let reviews;
    //let palaceRev = palace.reviews.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    let palaceReviews = palace.reviews;
    //console.log('palaace:'+palace);
    // let reviewId;
    // palaceRev.forEach(function(r) {
    //     reviewId = r.findById(req.params.id)
    //     console.log('rv:'+rv);
    // });

    for(let i=0;i<palaceReviews.length;i++) {
        if(palaceReviews[i]._id == req.params.id) {
            reviews = palaceReviews[i];
            // console.log("review selected:"+reviews);
            // console.log("review content:"+reviews.content)
        }
    }
    
    res.render('palaces/editReviews', {
      title: 'Edit Palace Review',
      reviews
      //palace
    });
  }
  