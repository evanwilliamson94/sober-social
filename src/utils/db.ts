import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm/expressions";
import { users } from './schema';

// Ensure the DATABASE_URL environment variable is set
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

// Initialize the Neon query function
const sql = neon(DATABASE_URL);

// Initialize the database connection with Drizzle and Neon
export const db = drizzle(sql);

// Function to fetch all users from the users table
export async function getUsers() {
  try {
    const allUsers = await db.select().from(users);
    return allUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Updated function to insert a new user into the users table with email uniqueness check
export async function addUser(name: string, email: string, username: string) {
  try {
    // Check if the email already exists
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);

    if (existingUser.length > 0) {
      return { error: `User with email ${email} already exists`, status: 409 }; // Return error object if user exists
    }

    // If no existing user, insert the new user
    const newUser = await db.insert(users).values({
      name,
      email,
      username,
    }).returning();

    return { user: newUser, status: 201 }; // Return user object on success
  } catch (error) {
    console.error('Detailed Neon DB error:', error); // Logs the exact error to Vercel logs
    throw error;
  }
}

// Function to fetch a specific user by ID
export async function getUserById(userId: number) {
  try {
    const user = await db.select().from(users).where(eq(users.id, userId));
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Function to test database connection (fetch current time)
export async function getData() {
  try {
    const result = await db.execute(`SELECT NOW()`);
    return result;
  } catch (error) {
    console.error('Error fetching data from database:', error);
    throw error;
  }
}
