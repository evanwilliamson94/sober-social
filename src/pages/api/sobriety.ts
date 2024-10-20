import { db } from '@/utils/db';
import { sobrietyTracking } from '@/utils/schema';
import { getAuth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    try {
      const data = await db
        .select()
        .from(sobrietyTracking)
        .where(eq(sobrietyTracking.userId, parseInt(userId, 10))); // Convert userId to number

      if (data.length === 0) {
        return res.status(404).json({ daysSober: 0 });
      }

      const sobrietyDate = data[0]?.sobrietyDate;
      const daysSober = sobrietyDate
        ? Math.floor((new Date().getTime() - new Date(sobrietyDate).getTime()) / (1000 * 60 * 60 * 24))
        : 0;

      res.setHeader('Content-Type', 'application/json'); // Set content type explicitly
      res.status(200).json({ daysSober });
    } catch (error) {
      console.error('Error fetching sobriety data:', error); // Add error logging
      res.status(500).json({ error: 'Error fetching sobriety data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
