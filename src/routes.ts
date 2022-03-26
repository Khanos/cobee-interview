import express from 'express';
import ConferenceController from './controllers/Conference';
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  next();
})

router.get('/getConferences', ConferenceController.getConferences);
router.get('/getCongerenceByAuthor/:author', ConferenceController.getCongerenceByAuthor);
router.post('/addConference', ConferenceController.addConference);

module.exports = router;