const axios = require('axios');
module.exports = {
  getUser: (req, res) => {
    res.json({
      name: 'John',
      age: '25',
      email: 'test@mail.com',
      password: '123456'
    });
  },
  postJson:(req, res) => {
    const data = req.body || {};
    res.json({
      status: 'success',
      data: data,
      error: false,
      message: 'Data received',
    });
  },
  getUserFromApi: async (req, res) => {
    const config = {
      method: 'get',
      url: 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001',
      headers: { }
    };
    try {
      const response = await axios(config);
      res.json({
        status: 'success',
        data: response.data,
        error: false,
        message: 'User fetched successfully'
      });
    } catch (error) {
      res.json({
        status: 'error',
        data: error,
        error: true,
        message: 'Error fetching user'
      });
    }
    // const response = await axios(config);
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    //   res.json({
    //     status: 'success',
    //     data: response.data,
    //     error: false,
    //     message: 'User fetched successfully'
    //   });
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   res.json({
    //     status: 'error',
    //     data: error,
    //     error: true,
    //     message: 'Error fetching user'
    //   });
    // });
  },
  getUserFromDataBase: (req, res) => {
    const db = require('../models/index').getDb();
    db.collection('people').find({}).limit(50).toArray((err, result) => {
      if(err){
        res.json({
          status: 'error',
          data: err,
          error: true,
          message: 'Error fetching user'
        });
      }
      res.json({
        status: 'success',
        data: result,
        error: false,
        message: 'User fetched successfully'
      });
    });
  }
}