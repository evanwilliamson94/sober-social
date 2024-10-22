import { NextApiRequest, NextApiResponse } from 'next';
import { getUserById } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.userId as string;  // Cast userId to string

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const user = await getUserById(userId);
    if (user) {
      return res.status(200).json(user);  // Return user data
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ error: 'Error fetching user data' });
  }
}
