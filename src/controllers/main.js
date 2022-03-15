const axios = require("axios").default;
module.exports = {
  index: (req, res) => {
    return res.send('Hello World!');
  },
  getJson: (req, res) => {
    return res.json({
      message: 'Hello World!',
      data: ['cool stuff', 'more stuff', 'scott stuff'],
      error: false
    });
  },
  getJsonFromApi: (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://hub.dummyapis.com/singlelistwithid?text=Test&noofRecords=100'
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      return res.json({
        message: 'success',
        error: false,
        response: response.data,
      });
    }).catch(function (error) {
      console.error(error);
      return res.json({
        message: 'error',
        error: true,
        response: error,
      });
    });
  },
  postJson: (req, res) => {
    const data = req.body;
    return res.json({
      message: 'Body successfully',
      body: data,
    });
  },
  postJsonById: (req, res) => {
    const data = req.params;
    return res.json({
      message: 'Params successfully',
      params: data,
    });
  }
};