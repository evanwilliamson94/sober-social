import { db } from '@/utils/db';
import { users } from '@/utils/schema';
import { getAuth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (req.method === 'POST') {
    try {
      // Ensure the userId is properly converted if necessary
      const numericUserId = Number(userId);  // Convert userId to a number if it is a string

      if (isNaN(numericUserId)) {
        throw new Error("Invalid user ID");
      }

      // Update the user's onboarding status in the database
      await db.update(users)
        .set({ hasCompletedOnboarding: true })
        .where(eq(users.id, numericUserId));

      res.status(200).json({ message: 'Onboarding completed' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating onboarding status' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
