module.exports = {
  index: (req, res) => {
    res.send('Hello World!');
  },
  getJson: (req, res) => {
    res.json({
      message: 'Hello World!'
    });
  }
};