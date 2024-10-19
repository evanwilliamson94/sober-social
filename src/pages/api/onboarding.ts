import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/utils/db';  // Import your db setup
import { users } from '@/utils/schema'; // Assuming users table exists
import { eq } from 'drizzle-orm';
import { getAuth } from '@clerk/nextjs/server';  // Clerk's auth

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);  // Get authenticated user ID

  // Convert Clerk's userId (string) to a number
  const numericUserId = Number(userId); 

  if (req.method === 'POST') {
    const { sobrietyDays, engagementLevel, goals } = req.body;

    try {
      // Update user's onboarding data in the database
      const updatedUser = await db.update(users)
        .set({
          sobrietyDays, 
          engagementLevel,
          goals
        })
        .where(eq(users.id, numericUserId));  // Use converted userId as number

      res.status(200).json({ success: true, user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
