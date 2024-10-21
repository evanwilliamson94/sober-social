import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { first_name, last_name, email, username } = req.body.data;
      const user = await addUser(`${first_name} ${last_name}`, email, username);

      if ('error' in user) {
        return res.status(user.status).json({ error: user.error });
      }

      return res.status(201).json({ message: 'User added to Neon DB', user });
    } catch (error) {
      console.error('Error adding user to Neon DB:', error);
      return res.status(500).json({ error: 'Error adding user to Neon DB' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
