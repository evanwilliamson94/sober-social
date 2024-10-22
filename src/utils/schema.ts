import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Users Table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),  // Auto-incremented numeric ID
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  username: text('username').notNull(),
  clerkUserId: text('clerk_user_id').notNull(),  // New column for Clerk user ID
  createdAt: timestamp('created_at').defaultNow(),
});
