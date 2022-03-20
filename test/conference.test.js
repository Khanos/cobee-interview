const {expect} = require('chai');
const request = require('supertest').agent;
const app = require('../server.js');
const ConferenceModel = require('../src/models/conferences.js');
describe('Controllers', () => {
  describe('Conference', () => {
    before(function () {
      ConferenceModel.addBulkData([
        {
          "title": "Conference #1",
          "description": "This is a conference number 1",
          "date": "Sun, 20 Mar 2022 03:05:18 GMT",
          "time": "120",
          "location": "Room 1",
          "speaker": "John Doe"
        },
        {
          "title": "Conference #2",
          "description": "This is a conference number 2",
          "date": "Sun, 21 Mar 2022 03:05:18 GMT",
          "time": "45",
          "location": "Room 1",
          "speaker": "John Doe"
        },
        {
          "title": "Conference #3",
          "description": "This is a conference number 3",
          "date": "Sun, 20 Mar 2022 04:05:18 GMT",
          "time": "100",
          "location": "Room 1",
          "speaker": "Peter Smith"
        },
        {
          "title": "Conference #4",
          "description": "This is a conference number 4",
          "date": "Sun, 20 Mar 2022 12:00:18 GMT",
          "time": "90",
          "location": "Room 2",
          "speaker": "Mark Wilson"
        },{
          "title": "Conference #5",
          "description": "This is a conference number 5",
          "date": "Sun, 21 Mar 2022 11:00:00 GMT",
          "time": "30",
          "location": "Room 1",
          "speaker": "Kelly Miller"
        },
      ])
    });
    it('addConference: should return a json with conference info', async () => {
      const res = await request(app).post('/api/v1/addConference').send({
        "title": "Conference #10",
        "description": "This is a conference number 10",
        "date": "Sun, 21 Mar 2022 04:00:00 GMT",
        "time": "60",
        "location": "Room 1",
        "speaker": "John Doe"
      });
      expect(res.status).to.equal(200);
      expect(res.body).not.to.be.empty;
      expect(res.body).to.be.an('object');
      expect(res.body).ownProperty('status');
      expect(res.body).ownProperty('message');
      expect(res.body).ownProperty('error');
      expect(res.body).ownProperty('data');
    });
    it('getConferences: should return a json with all conferences info', async () => {
      const res = await request(app).get('/api/v1/getConferences');
      expect(res.status).to.equal(200);
      expect(res.body).not.to.be.empty;
      expect(res.body).to.be.an('object');
      expect(res.body).ownProperty('status');
      expect(res.body).ownProperty('message');
      expect(res.body).ownProperty('error');
      expect(res.body).ownProperty('data');
      expect(res.body.data).to.be.an('array');
    });
    it('getCongerenceByAuthor: should return a list of conferences filtered by author', async () => {
      const res = await request(app).get('/api/v1/getCongerenceByAuthor/John Doe');
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal('success');
      expect(res.body.data).to.be.an('array');
      expect(res.body.data).to.have.lengthOf(3);
    });
  });
})