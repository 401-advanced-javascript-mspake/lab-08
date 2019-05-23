'use strict';

const Product = require('../src/models/categories/products/products.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Product data model', () => {
  const product = new Product;

  const testEntry = {
    name: 'Test',
    description: 'I am a test object',
  };

  const updateInfo = {
    name: 'Updated',
    description: 'I am an updated entry',
  };

  let retrievedEntry;

  it('should be an instance of the Product class', () => {
    expect(product).toBeInstanceOf(Product);
  });

  
  describe('it has a post method', () => {
    it('given a valid entry, posting returns the newly made entry', () => {
      return product.post(testEntry)
        .then(result => {
          expect(result.name === testEntry.name).toBeTruthy();
        });
    });
        
  });

  describe('it has a get method', () => {

    it('getting should return an array', () => {
      return product.get().then( result => {
        retrievedEntry = result[0];
        expect(result).toBeInstanceOf(Array);
        expect(result[0]).toHaveProperty('name');
        expect(result[0]).toHaveProperty('_id');
      });
    });
    
    it('get can return a single entry by id', () => {
      return product.get(retrievedEntry._id).then( result => {
        expect(result[0].name).toEqual(testEntry.name);
      });
    });

    it('getting an id that doesn\'t exist returns an error', () => {
      return product.put(12740851, updateInfo).then()
        .catch(err => {
          expect(err).toBeDefined();
        });
    });

  });

  describe('it has a put method', () => {
    it('given a valid id, it updates the information if an entry', () => {
      return product.put(retrievedEntry._id, updateInfo).then( result => {
        expect(result.name).toEqual(updateInfo.name);
      });
    });

    it('updating an id that doesn\'t exist returns an error', () => {
      return product.put(12740851, updateInfo).then()
        .catch(err => {
          expect(err).toBeDefined();
        });
    });
  });

  describe('it has a delete method', () => {
    it('given a valid id, it will delete the entry at that id', () => {
      return product.delete(retrievedEntry._id).then( result => {
        expect(result.name).toEqual(updateInfo.name);
      });
    });

    it('getting the deleted entry returns an empty array', () => {
      return product.get(retrievedEntry._id).then(result => {
        expect(result[0]).toBeFalsy();
      });
    });
  });

});