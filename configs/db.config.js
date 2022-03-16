require('dotenv-safe').config();
module.exports = {
  uri: `mongodb+srv://${process.env.MONGODB_USERNAME}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@cluster0.q90sg.mongodb.net/test?retryWrites=true&w=majority`
}