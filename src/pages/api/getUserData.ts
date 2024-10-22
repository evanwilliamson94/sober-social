import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserById } from '@/utils/db';  // Import the function from your db file

// API handler for fetching user data by ID
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;  // Assume userId is passed in the query string
  
  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await getUserById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ error: 'Error fetching user data' });
  }
}
