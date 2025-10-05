export const CognitoJwtVerifierToken = "CognitoJwtVerifier";

export type SurveyInfo = {
  id: string;
  userId: string;
  name: string;
  created: Date;
  modified: Date;
};

export type CreateSurveyInfoParams = {
  name: string;
};

export type CreateSurveyInfoResponse = {
  surveyInfo: SurveyInfo;
};

export type GetSurveysResponse = {
  surveys: SurveyInfo[];
};

export type ResponseInfo = {
  id: string;
  userId: string;
  name: string | null;
  surveyId: string;
  created: Date;
  modified: Date;
};

export type CreateResponseInfoParams = {
  surveyId: string;
  name: string;
};

export type CreateResponseInfoResponse = {
  responseInfo: ResponseInfo;
};

export enum ResponseImageStatus {
  BeginUpload = "BeginUpload",
  FileUploaded = "FileUploaded",
  ResponseIngested = "ResponseIngested",
}

export type ResponseImage = {
  id: string;
  userId: string;
  surveyId: string;
  responseId: string;
  status: ResponseImageStatus;
  s3Uri: string | null;
  created: Date;
  modified: Date;
};

export type CreateResponseImageParams = {
  surveyId: string;
  responseId: string;
};

export type CreateResponseImageResponse = {
  responseImage: ResponseImage;
};

export type AnswerMap = {
  id: string;
  userId: string;
  surveyId: string;
  responseId: string;
  answers: object;
};
