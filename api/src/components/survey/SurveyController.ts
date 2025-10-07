import { DependencyContainer, injectable } from "tsyringe";
import { Request, Response, Router } from "express";
import { CreateSurveyInfoParams } from "../../types";
import { ConfigOptions } from "../../config";
import AuthenticationMiddlewareProvider from "../../auth/AuthenticationMiddlewareProvider";
import AuthorizationMiddleware from "../../auth/AuthorizationMiddleware";
import ImageMetadataService from "./SurveyService";

const route = Router();

@injectable()
export default class ImageController {
  constructor(
    protected config: ConfigOptions,
    protected authenticationMiddlewareProvider: AuthenticationMiddlewareProvider,
    protected authorizationMiddleware: AuthorizationMiddleware
  ) {}

  public registerRoutes(app: Router) {
    app.use("/survey", route);

    route.use(this.authenticationMiddlewareProvider.provide());
    route.use(this.authorizationMiddleware.isAuthorized);

    const getService = (res: Response) => {
      const container = res.locals.container as DependencyContainer;
      return container.resolve(ImageMetadataService);
    };

    route.post(
      "/",
      async (req: Request<{}, {}, CreateSurveyInfoParams>, res) => {
        const service = getService(res);
        const surveyInfo = await service.createSurveyInfo(req.body);
        res.send(surveyInfo);
      }
    );

    route.get("/", async (_req, res) => {
      const service = getService(res);
      const surveys = await service.getSurveysByUserId();
      res.send(surveys);
    });
  }
}
