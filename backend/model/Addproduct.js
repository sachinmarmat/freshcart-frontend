// model/Addproduct.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Productname: String,
    units: String,
    Category: String,
    image: String,
    Description: String,
    price: Number,
    sellprice: Number
});

module.exports = mongoose.model('Addproduct', productSchema);
