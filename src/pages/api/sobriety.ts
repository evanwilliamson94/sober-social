import { db } from '@/utils/db';
import { sobrietyTracking } from '@/utils/schema';
import { getAuth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextApiRequest, NextApiResponse } from 'next'; // Add correct types for req, res

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (req.method === 'GET') {
    try {
      const data = await db
        .select()
        .from(sobrietyTracking)
        .where(eq(sobrietyTracking.userId, Number(userId))); // Ensure userId is a number

      if (data.length === 0) {
        return res.status(404).json({ daysSober: 0 });
      }

      const sobrietyDate = data[0]?.sobrietyDate;
      const daysSober = sobrietyDate
        ? Math.floor((new Date().getTime() - new Date(sobrietyDate).getTime()) / (1000 * 60 * 60 * 24))
        : 0;

      res.status(200).json({ daysSober });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching sobriety data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
