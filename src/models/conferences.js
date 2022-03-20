const conference = [];
module.exports = {
  addData: (data) => {
    return conference.push(data);
  },
  getData: () => {
    return conference;
  },
}