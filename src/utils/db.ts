import { neon } from "@neondatabase/serverless";

// Database connection setup
export const sql = neon(process.env.DATABASE_URL!);

// Function to test the database connection
async function testDatabase() {
  try {
    const result = await sql`SELECT NOW()`;  // Query to get the current time from the database
    console.log(result);  // Outputs the result to your browser's console
  } catch (error) {
    console.error('Database connection error:', error);  // Logs errors if the connection fails
  }
}

// Call the function to test the database connection
testDatabase();
