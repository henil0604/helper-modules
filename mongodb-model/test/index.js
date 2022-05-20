const MongoDbModel = require("..");
const mongoose = require("mongoose");

const ConnectionString = "mongodb://localhost:27017/test";

let Connection;

Connection = mongoose.connect(ConnectionString).then(e => {

    Connection = e.connections[0];

    const schema = new mongoose.Schema({
        id: String
    })

    const model = mongoose.model("test", schema);

    const Test = new MongoDbModel(model);

});