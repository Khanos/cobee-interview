const { v4: uuidv4 } = require('uuid');
const conference = [];
module.exports = {
  addData: (data) => {
    data.id = uuidv4();
    return conference.push(data);
  },
  addBulkData: (data) => {
    return conference.push(...data);
  },
  getData: () => {
    return conference;
  },
}