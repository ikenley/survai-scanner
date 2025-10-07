import { injectable } from "tsyringe";
import winston from "winston";
import LoggerProvider from "../../utils/LoggerProvider";
import {
  CreateSurveyInfoParams,
  CreateSurveyInfoResponse,
  GetSurveysResponse,
} from "../../types";
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

  /** Create a new SurveyInfo */
  public async createSurveyInfo(
    params: CreateSurveyInfoParams
  ): Promise<CreateSurveyInfoResponse> {
    const { name } = params;

    const surveyInfo = await this.surveyInfoRepo.insert(name, this.user);

    this.logger.info(`createSurveyInfo: created`, { surveyInfo });

    return { surveyInfo };
  }

  public async getSurveysByUserId(): Promise<GetSurveysResponse> {
    this.logger.info("getSurveyInfoByUserId");

    const surveys = await this.surveyInfoRepo.getByUserId(this.user.id);

    return { surveys };
  }
}
