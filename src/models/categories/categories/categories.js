'use strict';

const uuid = require('uuid/v4');

const schema = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  get(_id) {
    let entry = _id ? {_id} : _id;
    return schema.find(entry); 
  }
  
  post(entry) {
    let toAdd = new schema(entry);
    return toAdd.save();
  }

  put(_id, entry) {
    return schema.findByIdAndUpdate(_id, entry, {new:true});
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
