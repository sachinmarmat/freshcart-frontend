const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  Productname: String,
  Category: String,
  image: String,
  sellprice: Number,
  quantity:Number
});

module.exports = mongoose.model('Addtocart', cartSchema);
