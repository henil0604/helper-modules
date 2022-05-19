const MongoDbModel = require("..");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: String
})

const model = mongoose.model("test", schema);

const Test = new MongoDbModel(model);

