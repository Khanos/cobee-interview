require('dotenv-safe').config();
module.exports = {
  uri: `mongodb+srv://${encodeURIComponent(process.env.MONGODB_USERNAME)}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@cluster0.q90sg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}