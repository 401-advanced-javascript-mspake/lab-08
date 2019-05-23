'use strict';

const uuid = require('uuid/v4');
const schema = require('./products-schema.js');

class Products {

  constructor() {
  }

  get(id) {
    let entry = id ? {id} : id;
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

module.exports = Products;
