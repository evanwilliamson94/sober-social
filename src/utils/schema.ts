import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Users Table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  username: text('username').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});