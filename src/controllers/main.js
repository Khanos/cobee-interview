module.exports = {
  index: (req, res) => {
    res.send('Hello World');
  },
  getjson: (req, res) => {
    return res.json({
      message: 'Hello World',
      status: 'success',
      error: false
    });
  }
};