'use strict';

const Category = require('../src/models/categories/categories.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Category data model', () => {
  const category = new Category;

  const testEntry = {
    name: 'Test',
    description: 'I am a test object',
  };

  const updateInfo = {
    name: 'Updated',
    description: 'I am an updated entry',
  };

  let retrievedEntry;

  it('should be an instance of the Category class', () => {
    expect(category).toBeInstanceOf(Category);
  });

  
  describe('it has a post method', () => {
    it('given a valid entry, posting returns the newly made entry', () => {
      return category.post(testEntry)
        .then(result => {
          expect(result.name === testEntry.name).toBeTruthy();
        });
    });
        
  });

  describe('it has a get method', () => {

    it('getting should return an array', () => {
      return category.get().then( result => {
        retrievedEntry = result[0];
        expect(result).toBeInstanceOf(Array);
        expect(result[0]).toHaveProperty('name');
        expect(result[0]).toHaveProperty('_id');
      });
    });
    
    it('get can return a single entry by id', () => {
      return category.get(retrievedEntry._id).then( result => {
        console.log(retrievedEntry._id);
        expect(result[0].name).toEqual(testEntry.name);
      });
    });

    it('getting an id that doesn\'t exist returns an error', () => {
      return category.put(12740851, updateInfo).then()
        .catch(err => {
          expect(err).toBeDefined();
        });
    });

  });

  describe('it has a put method', () => {
    it('given a valid id, it updates the information if an entry', () => {
      return category.put(retrievedEntry._id, updateInfo).then( result => {
        expect(result.name).toEqual(updateInfo.name);
      });
    });

    it('updating an id that doesn\'t exist returns an error', () => {
      return category.put(12740851, updateInfo).then()
        .catch(err => {
          expect(err).toBeDefined();
        });
    });
  });

  describe('it has a delete method', () => {
    it('given a valid id, it will delete the entry at that id', () => {
      return category.delete(retrievedEntry._id).then( result => {
        expect(result.name).toEqual(updateInfo.name);
      });
    });

    it('getting the deleted entry returns an empty array', () => {
      return category.get(retrievedEntry._id).then(result => {
        expect(result[0]).toBeFalsy();
      });
    });
  });

});