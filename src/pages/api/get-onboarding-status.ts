// /pages/api/get-onboarding-status.ts

import { db } from '@/utils/db';
import { users } from '@/utils/schema';
import { getAuth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Fetch user's onboarding status from the database
    const user = await db.select().from(users).where(eq(users.id, Number(userId)));

    if (user.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ hasCompletedOnboarding: user[0].hasCompletedOnboarding });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching onboarding status' });
  }
}
