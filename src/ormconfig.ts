import { ConnectionOptions } from 'typeorm';
import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';
import * as dotenv from 'dotenv';

dotenv.config();

type OrmConfig = {
  seeds: string[];
  factories: string[];
} & ConnectionOptions;

enum DatabaseEnvFields {
  DB_TYPE = 'DB_TYPE',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_NAME = 'DB_NAME',
}

(() => {
  for (const key in DatabaseEnvFields) {
    if (!process.env[key]) throw new RuntimeException('Check your .env file');
  }
})();

const config: OrmConfig = {
  type: process.env.DB_TYPE as 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,

  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/db/migrations/*{.ts,.js}'],
  seeds: [__dirname + '/db/seeders/initial.seed.ts'],
  factories: [__dirname + '/db/factories/*.factory{.ts,.js}'],

  cli: {
    migrationsDir: 'src/db/migrations',
    entitiesDir: 'src/**/*.entity{.ts,.js}',
  },
};

export default config;
