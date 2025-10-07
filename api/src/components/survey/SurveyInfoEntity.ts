import { EntityType, SurveyInfo } from "../../types";

export default class SurveyInfoEntity implements SurveyInfo {
  pk: string;
  sk: string;
  entityType: EntityType;
  entityKey: string;

  surveyInfoId: string;
  userId: string;
  name: string;
  created: string;
  modified: string;
}
