# @helper-modules/mongodb-model


## Installation

```bash
npm i @helper-modules/mongodb-model
```

## Usage

### Syntex
```js
new MongoDbModel(model: Mongoose.Model);
```

- Params:
    - `model`: 
        - type: `Mongoose.Model`
        - default: `undefined`
        - usage: The Model of the Collection that you want to control

-------

## Examples

```js

const MongoDbModel = require("@helper-modules/mongodb-model");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    age: String,
    password: String
})

const model = mongoose.model("users", schema);

const Users = new MongoDbModel(model);

// Creating a user
await Users.create({
    id: 1,
    name: "Henil",
    email: "henilmalaviya06@gmail.com",
    age: 17,
    password: "superstrongpassword"
});

await Users.createMany(/* Data */);

await Users.get({
    id: 1
});

await Users.getMany(/* Data */);

await Users.update({
    id: 1,
}, {
    age: 17.5
})

await Users.updateMany(/* Data */);

await Users.delete({
    id: 1
})

await Users.deleteMany(/* Data */);

await Users.clear() // Deletes all Documents
```