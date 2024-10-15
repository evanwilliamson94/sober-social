import { neon, NeonClient } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

// Initialize Neon client correctly with explicit typing
const neonClient: NeonClient = neon(process.env.DATABASE_URL!);

// Pass the Neon client into Drizzle with proper typing
const db = drizzle(neonClient);

export default db;
