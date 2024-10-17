import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/utils/db';
import { sobrietyTracking } from '@/utils/schema';
import { eq } from 'drizzle-orm';  // Ensure correct import from Drizzle ORM

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId } = req.query;
    try {
      const sobrietyData = await db
        .select()
        .from(sobrietyTracking)
        .where(eq(sobrietyTracking.userId, Number(userId)));  // Ensure correct eq usage
      res.status(200).json({ data: sobrietyData });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching sobriety tracking data' });
    }
  } else if (req.method === 'POST') {
    const { userId, sobrietyDate, milestone } = req.body;
    try {
      const newEntry = await db.insert(sobrietyTracking).values({
        userId,
        sobrietyDate,
        milestone,
      }).returning();
      res.status(201).json({ data: newEntry });
    } catch (error) {
      res.status(500).json({ error: 'Error adding sobriety tracking entry' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
