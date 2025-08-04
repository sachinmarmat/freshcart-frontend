const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  Productname: String,
  Category: String,
  image: String,
  sellprice: Number,
  quantity:Number
});

module.exports = mongoose.model('Addwishlist', wishlistSchema);
