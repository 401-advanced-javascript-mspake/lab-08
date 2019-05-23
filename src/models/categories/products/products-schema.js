'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: false},
  category: {type: String, required: false},
});

module.exports = mongoose.model('products', products);