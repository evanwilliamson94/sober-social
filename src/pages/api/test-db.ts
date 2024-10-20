import { NextApiRequest, NextApiResponse } from 'next';
import { getUsers, addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch all users from the Neon DB
      const users = await getUsers();
      res.status(200).json({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Error fetching users from the database' });
    }
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    try {
      // Add a new user to the database
      const newUser = await addUser(name, email);
      res.status(201).json({ newUser });
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Error adding user to the database' });
    }
 
} else {
    // Handle unsupported methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
