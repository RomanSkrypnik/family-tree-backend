import { ConnectionOptions } from 'typeorm';

type OrmConfig = {
  seeds: string[];
  factories: string[];
} & ConnectionOptions;

const config: OrmConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'family-tree',
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
