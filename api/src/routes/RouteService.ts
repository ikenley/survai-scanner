import { injectable } from "tsyringe";
import { Router } from "express";
import SurveyController from "../components/survey/SurveyController";
import StatusController from "../components/status/StatusController";

@injectable()
export default class RouteService {
  constructor(
    protected statusController: StatusController,
    protected surveyController: SurveyController
  ) {}

  public registerRoutes() {
    const app = Router();

    this.statusController.registerRoutes(app);
    this.surveyController.registerRoutes(app);

    return app;
  }
}
