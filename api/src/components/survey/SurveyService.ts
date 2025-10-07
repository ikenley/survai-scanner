import { injectable } from "tsyringe";
import winston from "winston";
import LoggerProvider from "../../utils/LoggerProvider";
import { CreateSurveyInfoParams, CreateSurveyInfoResponse } from "../../types";
import { ConfigOptions } from "../../config";
import User from "../../auth/User";
import SurveyInfoRepo from "./SurveyInfoRepo";

@injectable()
export default class SurveyService {
  private logger: winston.Logger;

  constructor(
    protected loggerProvider: LoggerProvider,
    protected config: ConfigOptions,
    protected user: User,
    protected surveyInfoRepo: SurveyInfoRepo
  ) {
    this.logger = loggerProvider.provide("SurveyService");
  }

  /** Submit an image request to the job queue */
  public async createSurveyInfo(
    params: CreateSurveyInfoParams
  ): Promise<CreateSurveyInfoResponse> {
    const { name } = params;

    const surveyInfo = await this.surveyInfoRepo.insert(name, this.user);

    this.logger.info(`createSurveyInfo: created`, { surveyInfo });

    return { surveyInfo };
  }
}
