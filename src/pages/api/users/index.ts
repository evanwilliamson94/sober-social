import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/utils/db';
import { users } from '@/utils/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all users
    try {
      const allUsers = await db.select().from(users);
      res.status(200).json({ data: allUsers });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  } else if (req.method === 'POST') {
    // Add a new user
    const { name, email } = req.body;
    try {
      const newUser = await db.insert(users).values({ name, email }).returning();
      res.status(201).json({ data: newUser });
    } catch (error) {
      res.status(500).json({ error: 'Error adding user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
