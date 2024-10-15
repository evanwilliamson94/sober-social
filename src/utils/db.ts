import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// Example query to test connection
async function testConnection() {
  try {
    const result = await sql`SELECT NOW()`;
    console.log('Connection successful:', result);
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection(); // This will run the test query when the file is executed

export default sql;
