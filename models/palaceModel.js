const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
});

const imageSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    link: String
  }, {
    timestamps: true
});

const palaceSchema = new Schema({
    palaceName: {
        type: String,
        required: true
    },
    location: String,
    googleMapLink: String,
    website: String,
    constructionStart: {
        type: String,
        default: function() {
            return new Date();
        },
    },
    constructionEnd: {
        type: String,
        default: function() {
            return new Date();
        },
    },
    builtBy: String,
    currentOwner: String,
    images:[imageSchema],
    openToPublic: {
      type: String,
      enum: ['Yes', 'Some Parts', 'No'],
    },
    //photos:[{type:String}],
    reviews: [reviewSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Palace', palaceSchema);