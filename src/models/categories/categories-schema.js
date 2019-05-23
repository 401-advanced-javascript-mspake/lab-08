'use strict';

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const categories = mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: false},
  category: {type: String, required: false},
});

module.exports = mongoose.model('categories', categories);