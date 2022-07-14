
## FakerAPI

To install faker in express, please use "require" instead of "import"

On faker documentation, the following is provided.
``` import { faker } from '@faker-js/faker'; ```

import is very similar to require. However, in order to use import, it requires a type of module and that will cause conflicts with the require syntax that we use for express. 

In order to import faker, we could change the import into require. 

Here is an example of the difference between ```import``` and ```require```

```import express from "express"``` === ```const express = require("express")```

Using the above example, think about how you could change ``` import { faker } from '@faker-js/faker'; ``` into require. 

#### Constructing a class

In order to construct a class, we could refer to the OOP section. 

HINT:
```js
class Animal{
    constructor(){
        // attributes for the class
    }
}
```

To instantiate an object with the Animal class...

```js
const cat = new Animal()
```

# MongoDB SHELL command
### Database
- `show dbs` : showing all database
- `use firstDB` : create & switch to the db
- `db.dropDatabase()` : switch to the db and drop database

### Collections (Table)
- `show collections` :show all tables
- `db.createCollection('item')` : create a table
- `db.item.drop()` : drop a table

### Documents (Fields)
- `db.item.insertOne({name: "TV", price: 899, size:{length: 60, height: 50}})` 
- `db.item.insertMany([{name: "TV2", price: 899, size:{length: 60, height: 50}},{name: "TV3", price: 899, size:{length: 60, height: 50}}])` 
- insertMany allows you to add multiple items


### Retreive Data from dbs
- `db.item.find()`  : can add .pretty()
- `db.item.find({price: {$lt: 100}})` : find all fields with the price less than 100
- `$lt` : less than  `$gt` : greater than `$and` : fitting multiple criteria `$or` : fitting either criteria 
- `db.item.find({$and: [{price: {$lt:100}}, {price:{$gt:10}}]})`  
- `db.item.findOne({name:"toy"})` : only returns the first item 

### Update
- `db.item.updateMany({}, {$addToSet:{shops: 'Craigslist'}})` : add one item to the array
- `db.item.updateMany({}, {$addToSet:{shops: {$each:["BestBuy","Amazon", "Walmart"]}}})` :  adding mutiple items to the array using each
- `db.item.updateMany({name:"games"}, {$push: {shops: 'gamestop'}})` : add to array (can be repeated)
- `db.item.updateMany({name:"games"}, {$addToSet: {shops: 'gamestop'}})` : add to array (must be unique)
- `db.item.updateMany({name:"games"}, {$pull: {shops: 'gamestop'}})` : remove from array
- `db.item.updateMany({}, {$inc: {price: 1}})` : increment by 1 
- `db.item.updateMany({}, {$rename: {'rating': 'stock'}})` : renaming the name of the field
- 

### Delete
- both .remove, .deleteOne, .deleteMany work
- `db.item.deleteMany({price: {$gt: 100}})` 
- `db.item.deleteOne({})`
- `db.item.updateMany({}, [{$unset: ['stock']}])` :$unset removes the column


## REMARKS
- $push adds items in the order in which they were received. Also, you can add the same items several times.

- $addToSet adds just unique items, but the order of items is not guaranteed.


