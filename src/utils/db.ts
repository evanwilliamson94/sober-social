import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

// Initialize a Neon client using the database URL
const client = neon(process.env.DATABASE_URL!);

// Initialize Drizzle with the Neon client
const db = drizzle(client);

export default db;
