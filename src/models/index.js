const {uri} = require('../../configs/db.config.js');
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(err => {
      if (err) {
        return callback(err);
      }
      dbConnection = client.db("test");
      console.log("Successfully connected to MongoDB.");
      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
