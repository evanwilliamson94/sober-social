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
    const { first_name, last_name, email, username } = req.body;  // Added username

    if (!first_name || !last_name || !email || !username) {  // Check for username
      return res.status(400).json({ error: 'First name, last name, email, and username are required' });
    }

    try {
      // Add a new user to the database
      const name = `${first_name} ${last_name}`;
      const newUser = await addUser(name, email, username);  // Pass username as well
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
