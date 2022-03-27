import ConferenceModel from '../models/conferences';
import isValidConference from '../utils/validateConference';
import { Request, Response } from 'express';
import { Conference } from '../interfaces/Conference';

class ConferenceController {
  public async addConference(req: Request, res: Response) {
    try {
      if (!isValidConference(req.body)) {
        throw new Error('Invalid conference');
      }
      const conference = await ConferenceModel.addData(req.body);
      res.json({
        status: 'success',
        message: 'Conference added successfully',
        error: null,
        data: conference
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
        error: error,
        data: null
      });
    }
  }
  public async addMultipleConferences(req: Request, res: Response) {
    try {
      if (req.body && req.body.length > 0) {
        const conferences = req.body;
        conferences.forEach(async (conference: Conference) => {
          if (!isValidConference(conference)) {
            throw new Error('Invalid conference');
          }
          await ConferenceModel.addData(conference);
        });
        res.json({
          status: 'success',
          message: 'Conference added successfully',
          error: null,
          data: conferences
        });
      } else {
        throw new Error('Invalid conferences array');
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
        error: error,
        data: null
      });
    }
  }
  public async getConferences(req: Request, res: Response) {
    try {
      const conferences = await ConferenceModel.getData();
      res.json({
        status: 'success',
        message: 'Conferences retrieved successfully',
        error: null,
        data: conferences
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error: error,
        data: null
      });
    }
  }
  public async getCongerenceByAuthor(req: Request, res: Response) {
    try {
      const author = req.params.author;
      const conferences = ConferenceModel.getData();
      const conferencesByAuthor = conferences.filter(conference => conference.speaker.indexOf(author) !== -1);
      res.json({
        status: 'success',
        message: 'Conferences retrieved successfully',
        error: null,
        data: conferencesByAuthor
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error: error,
        data: null
      });
    }
  }
}

export default new ConferenceController();