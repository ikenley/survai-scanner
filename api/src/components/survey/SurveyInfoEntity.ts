import { SurveyInfo } from "../../types";

export default class SurveyInfoEntity implements SurveyInfo {
  pk: string;
  sk: string;

  id: string;
  userId: string;
  name: string;
  created: Date;
  modified: Date;
}
