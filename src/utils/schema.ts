import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

// Users Table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),  // Auto-incremented numeric ID
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  username: text('username').notNull(),
  clerkUserId: text('clerk_user_id').notNull(),  // Column for Clerk user ID
  createdAt: timestamp('created_at').defaultNow(),
});

// User Profile Images Table
export const userProfileImages = pgTable('user_profile_images', {
  id: serial('id').primaryKey(),  // Auto-incremented numeric ID for the profile image record
  userId: integer('user_id').references(() => users.id).notNull(),  // Foreign key to the Users table
  imageUrl: text('image_url').notNull(),  // URL of the uploaded image
  createdAt: timestamp('created_at').defaultNow(),  // Timestamp for when the image was uploaded
});