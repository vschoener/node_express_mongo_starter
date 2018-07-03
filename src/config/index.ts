import * as dotenv from 'dotenv';
import * as appRoot from 'app-root-path';

dotenv.config({ path: `${appRoot.path}/.env` });

export type ApiServerConfig = {
  port: number;
}

export type DatabaseConfig = {
  url: string;
}

export type AppConfig = {
  api: ApiServerConfig;
  env: string;
  database: DatabaseConfig;
}

const env: string = process.env.ENV || 'development';

//  About new Buffer deprecated in Node 10:
// https://nodesource.com/blog/understanding-the-buffer-deprecation-in-node-js-10/
const appConfig: AppConfig = {
  api: {
    // Avoid typescript error '||' doesn't seems to help
    port: process.env.EXPRESS_PORT ? parseInt(process.env.EXPRESS_PORT) : 8080,
  },
  env,
  database: {
    url: process.env.DATABASE_URL || "mongodb://mongodb:27017/tictic",
  }
};

export default appConfig;

