![CF](http://i.imgur.com/7v5ASc8.png) LAB  
=================================================  
  
## Lab 08 - Data Modeling  
  
### Author: Morgana Spake  
  
### Links and Resources  
* [submission PR](https://github.com/401-advanced-javascript-mspake/lab-08/pull/1)  
* [travis](https://www.travis-ci.com/401-advanced-javascript-mspake/lab-08)  
  
### Modules  
#### `categories.js, categories-schema.js, products.js, products-schema.js`  
##### Exported Values and Methods  
  
###### `Category -> instance of the Category class`  
Returns an instance of the category class with get, post, put, and delete methods  
  
###### `Product -> instance of the Product class`  
Returns an instance of the product class with get, post, put, and delete methods  
  
###### `category-schema -> mongoose Schema instance`  
Returns a mongoose (mongodb) schema.  
  
###### `products-schema -> mongoose Schema instance`  
Returns a mongoose (mongodb) schema.  
  
### Setup
#### `.env` requirements
* `PORT` - Port Number (i.e: 3000)  
* `MONGODB_URI` - URL to the running mongo instance/db  
  
#### Running the app  
* `npm install`  
* `node start`  
  
**Endpoints:**  
* /categories  
* /categories  
* /categories/:id  
* /categories/:id  
* /categories/:id  

* /products  
* /products  
* /products/:id  
* /products/:id  
* /products/:id  
  
#### Tests  
* How do you run tests?  
  * `npm test`  
* What assertions were made?  
  * posting returns the object posted, getting returns an array, updating returns the updated object, deleting returns an empty array, getting updating or deleting to an invalid id returns an error.   
* What assertions need to be / should be made?  
  * posting an invalid entry.  
  
#### UML  
![uml](https://github.com/401-advanced-javascript-mspake/lab-08/blob/data-model-construction-and-testing/assets/20190522_133955.jpg)  