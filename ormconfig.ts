import dotenv from 'dotenv';
import path from 'path';

const dotenv_path = path.resolve(process.cwd(), `.env`);
dotenv.config({ path: dotenv_path });

const DatabaseConfigForMigrations = {
  name: 'countrydb',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ['src/**/*entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/migrations',
  },
  options: { trustServerCertificate: true },
};

export default DatabaseConfigForMigrations;
