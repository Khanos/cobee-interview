module.exports = {
  addConference: (req, res) => {
    return res.json({
      status: 'success',
      message: 'Conference added successfully',
      error: null,
      data: null
    });
  }
}