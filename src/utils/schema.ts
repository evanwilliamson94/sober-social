// /utils/schema.ts 

import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';


// Users Table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  sobrietyDays: integer('sobriety_days').default(0),  // New Column for Sobriety Days
  engagementLevel: text('engagement_level').default(''),  // New Column for Engagement Level
  goals: text('goals').default('')  // New Column for Goals
});

