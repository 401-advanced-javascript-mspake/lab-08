'use strict';

const Category = require('../src/models/categories/categories/categories.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Category data model', () => {
  const category = new Category;

  const testEntry = {
    name: 'Test',
    description: 'I am a test object',
  };

  let entry;

  it('should be an instance of the Category class', () => {
    expect(category).toBeInstanceOf(Category);
  });

  
  describe('it has a post method', () => {
    it('given a valid entry, posting returns the newly made entry', () => {
      return category.post(testEntry)
        .then(result => {
          expect(result.name === testEntry.name).toBeTruthy();
        }).catch(err => {
          expect(err).toBeUndefined();
        });
    });
        
  });



  describe('it has a get method', () => {
    it('getting should return an array', () => {
      return category.get().then( result => {
        entry = result[0];
        console.log(entry);
        expect(result).toBeInstanceOf(Array);
      }).catch(err => {
        expect(err).toBeUndefined();
      });
    });
    
    it('should return a single entry by id', () => {
      console.log(entry._id);
      return category.get(entry._id).then( result => {
        console.log(result);
      });
    });
  });

});