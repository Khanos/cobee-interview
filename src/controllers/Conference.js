const ConferenceModel = require('../models/conferences.js');
const isValidConference = require('../utils/validateConference.js');

module.exports = {
  addConference: (req, res) => {
    const conference = req.body;
    if(isValidConference(conference)) {
      ConferenceModel.addData(conference);
      return res.json({
        status: 'success',
        message: 'Conference added successfully',
        error: null,
        data: null
      });
    } else {
      return res.json({
        status: 'error',
        message: 'Conference not added',
        error: 'Invalid conference',
        data: null
      });
    }
  },
  getConferences: (req, res) => {
    const conferences = ConferenceModel.getData();
    return res.json({
      status: 'success',
      message: 'Conferences retrieved successfully',
      error: null,
      data: conferences
    });
  },
  getCongerenceByAuthor: (req, res) => {
    const author = req.params.author;
    const conferences = ConferenceModel.getData();
    const conferencesByAuthor = conferences.filter(conference => conference.speaker.indexOf(author) !== -1);
    return res.json({
      status: 'success',
      message: 'Conferences retrieved successfully',
      error: null,
      data: conferencesByAuthor
    });
  }
}