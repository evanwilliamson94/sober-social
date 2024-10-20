import { neon } from "@neondatabase/serverless";  // Neon serverless client for PostgreSQL
import { drizzle } from "drizzle-orm/neon-http";  // Use neon-http for Drizzle ORM integration
import { eq } from "drizzle-orm/expressions";  // Import 'eq' for query expressions
import { users } from './schema';  // Import your users table schema

// Ensure the DATABASE_URL environment variable is set
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

// Initialize the Neon query function correctly
const sql = neon(DATABASE_URL);  // 'neon' provides a query function, which Drizzle can use

// Initialize the database connection with Drizzle and Neon
export const db = drizzle(sql);  // Pass the Neon query function directly to Drizzle

// Function to fetch all users from the users table
export async function getUsers() {
  try {
    const allUsers = await db.select().from(users);  // Fetch all users
    return allUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;  // Re-throw error for proper error handling
  }
}

// Function to insert a new user into the users table
export async function addUser(name: string, email: string) {
  try {
    const newUser = await db.insert(users).values({
      name,
      email,
    }).returning();  // Return inserted user data
    return newUser;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;  // Re-throw error for proper error handling
  }
}

// Function to fetch a specific user by ID
export async function getUserById(userId: number) {
  try {
    const user = await db.select().from(users).where(eq(users.id, userId));  // Fetch user by ID
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;  // Re-throw error for proper error handling
  }
}

// Function to test database connection (fetch current time)
export async function getData() {
  try {
    const result = await db.execute(`SELECT NOW()`);  // Fetch current time from the DB
    return result;
  } catch (error) {
    console.error('Error fetching data from database:', error);
    throw error;
  }
}
