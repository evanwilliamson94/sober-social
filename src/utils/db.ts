import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

// Ensure the DATABASE_URL is being correctly used from the environment variables
const neonClient = neon(process.env.DATABASE_URL!);

// Pass the Neon client into Drizzle
const db = drizzle(neonClient);

export default db;
