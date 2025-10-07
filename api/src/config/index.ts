import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({ path: "../.env" });

export type AppEnv = "local" | "test" | "dev" | "staging" | "prod";

export class ConfigOptions {
  api: { prefix: string };
  app: { env: AppEnv; name: string; version: string };
  aws: {
    region: string;
  };
  baseDomain: string | null;
  cognito: {
    userPoolId: string;
    userPoolClientId: string;
    userPoolClientSecret: string;
  };
  fromEmailAddress: string;
  dyanmo: { tableName: string; userIdIndexName: string };
  imageS3BucketName: string;
  jobQueueUrl: string;
  logs: { level: string };
  nodeEnv: string;
  port: number;
}

/** Get ConfigOptions from env vars.
 * (This is a function to lazy-load and
 *    give bootstrap services time to inject env vars)
 */
export const getConfigOptions = () => {
  const config: ConfigOptions = {
    api: { prefix: "/survai/api" },
    app: {
      env: process.env.APP_ENV as AppEnv,
      name: process.env.APP_NAME || "survai-api",
      version: process.env.APP_VERSION!,
    },
    aws: {
      region: process.env.AWS_REGION!,
    },
    baseDomain: process.env.BASE_DOMAIN || null,
    cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID!,
      userPoolClientSecret: process.env.COGNITO_USER_POOL_CLIENT_SECRET!,
    },
    dyanmo: {
      tableName: process.env.DYNAMO_TABLE_NAME!,
      userIdIndexName: process.env.DYNAMO_USER_ID_INDEX_NAME!,
    },
    fromEmailAddress: process.env.FROM_EMAIL_ADDRESS!,
    jobQueueUrl: process.env.JOB_QUEUE_URL!,
    logs: { level: process.env.LOGS__LEVEL || "http" },
    nodeEnv: process.env.NODE_ENV!,
    port: parseInt(process.env.PORT || "8094", 10),
    imageS3BucketName: process.env.IMAGE_S3_BUCKET_NAME!,
  };

  return config;
};
