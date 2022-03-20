const {expect} = require('chai');
const request = require('supertest').agent;
const app = require('../server.js');
describe('Controllers', () => {
  describe('Conference', () => {
    it('addConference: should return a json with conference info', async () => {
      const res = await request(app).post('/api/v1/addConference').send({
        "title": "Conference #1",
        "description": "This is a conference number 1",
        "date": "Sun, 20 Mar 2022 03:05:18 GMT",
        "time": "120",
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
  });
})