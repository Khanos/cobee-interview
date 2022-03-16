var axios = require('axios');

module.exports = {
  getUser: (req, res) => {
    return res.json({
      name: 'John Doe',
      email: 'mail@mail.com',
      age: '30',
      job: 'web developer',
    });
  },
  getJsonFromApi: (req, res) => {
    var config = {
      method: 'get',
      url: 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      return res.json({
        status: 'success',
        data: response.data,
        error: false
      });
    })
    .catch(function (error) {
      return res.json({
        status: 'fail',
        data: error,
        error: true
      });
    });

  },
  getJsonFromDataBase: (req, res) => {
    const dbConnect = require('../models').getDb();
    dbConnect
      .collection("people")
      .find({}).limit(50)
      .toArray(function (err, result) {
        if (err) {
          return res.status(400).send("Error fetching listings!");
        } else {
          return res.json(result);
        }
      });
  }
}