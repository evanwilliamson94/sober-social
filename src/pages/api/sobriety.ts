// /pages/api/sobriety.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSobrietyTracking, addSobrietyTracking } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId } = req.query;
    const sobrietyData = await getSobrietyTracking(Number(userId));
    return res.status(200).json(sobrietyData);
  } else if (req.method === 'POST') {
    const { userId, sobrietyDate, milestone } = req.body;
    const newEntry = await addSobrietyTracking(userId, sobrietyDate, milestone);
    return res.status(201).json(newEntry);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
