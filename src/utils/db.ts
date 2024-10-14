import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

const db = drizzle(neon(process.env.DATABASE_URL!)); // Using the environment variable DATABASE_URL

export default db;
