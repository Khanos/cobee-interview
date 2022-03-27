import { Router, Request, Response } from 'express';
import ConferenceController from './controllers/Conference';

class IndexRouter {
  router: Router = Router();
  constructure() {
    this.config();
    this.routes();
  }
  config() {
    // Middleware
    this.router.use((req: Request, res: Response, next) => {
      next();
    })
  }
  routes() {
    this.router.get('/getConferences', ConferenceController.getConferences);
    this.router.get('/getCongerenceByAuthor/:author', ConferenceController.getCongerenceByAuthor);
    this.router.post('/addConference', ConferenceController.addConference);
  }

}

const indexRoutes = new IndexRouter();

export default indexRoutes.router;