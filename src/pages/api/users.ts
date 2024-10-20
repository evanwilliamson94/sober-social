import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, username } = req.body;
    try {
      const newUser = await addUser(`${firstName} ${lastName}`, email, username);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error adding user:', error);
      return res.status(500).json({ error: 'Error adding user' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
