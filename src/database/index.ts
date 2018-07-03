
import { logger } from '../logger/index';
import { DatabaseConfig } from '../config/index';
import { Connection, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';

/**
 * Class
 */
export default class Database {
  config: DatabaseConfig;
  mongoose: Mongoose;

  constructor(config: DatabaseConfig) {
    this.config = config;
  }

  /**
   * Connect to the database
   */
  async connect(): Promise<void> {
    logger.log('info', 'Connecting to Database...');
    this.mongoose = await mongoose.connect(this.config.url);
    logger.log('info', 'Connected to the database');
  }
}

