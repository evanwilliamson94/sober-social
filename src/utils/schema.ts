// /utils/schema.ts 

import { pgTable, serial, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';  // Add 'boolean'

// Users Table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  sobrietyDays: integer('sobriety_days').default(0),  // New Column for Sobriety Days
  engagementLevel: text('engagement_level').default(''),  // New Column for Engagement Level
  goals: text('goals').default(''),  // New Column for Goals
  hasCompletedOnboarding: boolean('has_completed_onboarding').default(false),  // New Column for Onboarding Status
});


// Posts Table
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id), // Foreign key to users table
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Sobriety Tracking Table
export const sobrietyTracking = pgTable('sobriety_tracking', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id), // Foreign key to users table
  sobrietyDate: timestamp('sobriety_date').notNull(),
  milestone: text('milestone'), // Optional, for custom milestones
  createdAt: timestamp('created_at').defaultNow(),
});
