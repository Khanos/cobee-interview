import { Router, Request, NextFunction, Response } from 'express';
import ConferenceController from './controllers/Conference';

class IndexRouter {
  public router: Router = Router();
  constructor() {
    this.initMiddleware();
    this.initRoutes();
  }
  private initMiddleware() {
    // Middleware
    this.router.use((req: Request, res: Response, next: NextFunction) => {
      next();
    })
  }
  private initRoutes() {
    // Conference routes
    this.router.get('/getConferences', ConferenceController.getConferences);
    this.router.get('/getCongerenceByAuthor/:author', ConferenceController.getCongerenceByAuthor);
    this.router.post('/addConference', ConferenceController.addConference);
    this.router.post('/addMultipleConferences', ConferenceController.addMultipleConferences);
  }
}

const indexRoutes = new IndexRouter();

export default indexRoutes.router;