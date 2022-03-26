import ConferenceModel from '../models/conferences';
import { isValidConference } from '../utils/validateConference';
import { Request, Response } from 'express';

export default {
  addConference: (req: Request, res: Response) => {
    const conference = req.body;
    if (isValidConference(conference)) {
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
  getConferences: (req: Request, res: Response) => {
    const conferences = ConferenceModel.getData();
    return res.json({
      status: 'success',
      message: 'Conferences retrieved successfully',
      error: null,
      data: conferences
    });
  },
  getCongerenceByAuthor: (req: Request, res: Response) => {
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