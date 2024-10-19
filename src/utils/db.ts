// /utils/db.ts

import { neon } from "@neondatabase/serverless";  // Neon serverless client for PostgreSQL
import { drizzle } from "drizzle-orm/neon-http";  // Use neon-http for Drizzle ORM integration
import { eq } from "drizzle-orm/expressions";  // Import 'eq' for query expressions
import { users, posts, sobrietyTracking } from './schema';  // Import your table schemas

// Ensure the DATABASE_URL environment variable is set
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

// Initialize the Neon query function correctly
const sql = neon(DATABASE_URL);  // 'neon' provides a query function, which Drizzle can use

// Initialize the database connection with Drizzle and Neon
export const db = drizzle(sql);  // Pass the Neon query function directly to Drizzle

// Function to test database connection (fetch current time)
export async function getData() {
  try {
    const result = await db.execute(`SELECT NOW()`);  // Raw SQL query
    console.log('Database result:', result);  // Log the result
    return result;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;  // Re-throw error for proper error handling
  }
}

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

// Function to fetch all posts from the posts table
export async function getPosts() {
  try {
    const allPosts = await db.select().from(posts);  // Fetch all posts
    return allPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;  // Re-throw error for proper error handling
  }
}

// Function to insert a new post into the posts table
export async function addPost(userId: number, content: string) {
  try {
    const newPost = await db.insert(posts).values({
      userId,
      content,
    }).returning();  // Return inserted post data
    return newPost;
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;  // Re-throw error for proper error handling
  }
}

// Function to fetch sobriety tracking data for a specific user
export async function getSobrietyTracking(userId: number) {
  try {
    const sobrietyData = await db
      .select()
      .from(sobrietyTracking)
      .where(eq(sobrietyTracking.userId, userId));  // Use 'eq' to filter by userId
    return sobrietyData;
  } catch (error) {
    console.error('Error fetching sobriety tracking data:', error);
    throw error;  // Re-throw error for proper error handling
  }
}

// Function to add a new sobriety tracking entry
export async function addSobrietyTracking(userId: number, sobrietyDate: Date, milestone: string) {
  try {
    const newEntry = await db.insert(sobrietyTracking).values({
      userId,
      sobrietyDate,
      milestone,
    }).returning();  // Return inserted sobriety tracking entry
    return newEntry;
  } catch (error) {
    console.error('Error adding sobriety tracking entry:', error);
    throw error;  // Re-throw error for proper error handling
  }
}
