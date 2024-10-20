import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const payload = req.body;

  try {
    const { first_name, last_name, email, username } = payload.data;

    if (!first_name || !last_name || !email || !username) {
      return res.status(400).json({ error: 'Invalid user data' });
    }

    const user = await addUser(`${first_name} ${last_name}`, email, username);
    return res.status(201).json({ message: 'User added to Neon DB', user });
  } catch (error) {
    console.error('Error adding user:', error);
    return res.status(500).json({ error: 'Error adding user to Neon DB' });
  }
}

