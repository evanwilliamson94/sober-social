import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { first_name, last_name, email } = req.body;
    
    if (!first_name || !last_name || !email) {
      return res.status(400).json({ error: 'Invalid user data' });
    }

    try {
      // Add user to Neon
      const user = await addUser(`${first_name} ${last_name}`, email);
      res.status(201).json({ message: 'User added to Neon DB', user });
    } catch (error) {
      res.status(500).json({ error: 'Error adding user to Neon DB' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
