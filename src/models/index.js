const { MongoClient, ServerApiVersion } = require('mongodb');
const {uri} = require('../../configs/mongo.db.configs.js');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let dbConnection;

module.exports = {
  connectToServer: (callback) => {
    client.connect(err => {
      if(err){
        return callback(err);
      }
      const collection = client.db("test");
      console.log("Connected successfully to server");
      dbConnection = collection;
      return callback();
    });
  },
  getDb: () => {
    return dbConnection;
  }
}