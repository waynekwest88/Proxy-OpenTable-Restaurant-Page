const mongoose = require('mongoose');
// mongoose.connect(process.env.DB_URI);
const Schema = mongoose.Schema;

let ratingsDistributionSchema = new Schema({
  1: Number,
  2: Number,
  3: Number,
  4: Number,
  5: Number,
});

let statsSchema = new Schema({
  totalRatingsScore: Number,
  totalRatings: Number,
  averageRating: {
    food: Number,
    service: Number,
    ambience: Number,
    value: Number,
  },
  recommendationPercentage: Number,
  ratingsDistribution: Schema.Types.ObjectId,
  noise: Number,
  restaurant: Schema.Types.ObjectId,
  // filterWords: Array
});

let reviewsSchema = new Schema({
  user: Schema.Types.ObjectId,
  text: { type: String, text: true },
  tags: Array,
  averageRating: Number,
  rating: {
    food: Number,
    service: Number,
    ambience: Number,
    value: Number,
  },
  wouldRecommendToFriend: Boolean,
  restaurant: Schema.Types.ObjectId,
  location: String,
  helpfulCount: Number,
  dinedOn: Date,
});

reviewsSchema.path('text').index({ text: true });

let userSchema = new Schema({
  name: String,
  isVIP: Boolean,
  avatar: String,
});

let restaurantSchema = new Schema({
  name: String,
  locations: Array,
});

module.exports = {
  ratingsDistributionSchema,
  statsSchema,
  reviewsSchema,
  userSchema,
  restaurantSchema,
};
