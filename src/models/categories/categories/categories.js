'use strict';

const uuid = require('uuid/v4');

const schema = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  get(_id) {
    console.log(_id);
    let entry = _id ? {_id} : _id;
    console.log(entry);
    return schema.find(entry); 
  }
  
  post(entry) {
    let toAdd = new schema(entry);
    return toAdd.save();
  }

  put(id, entry) {
    return schema.findByIdAndUpdate(id, entry, {new:true});
  }

  delete(id) {
    return schema.findByIdAndDelete(id);
  }

}

module.exports = Categories;
