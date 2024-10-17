import { NextApiRequest, NextApiResponse } from 'next';
import { getData } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getData(); // Fetch data from the Neon DB
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
