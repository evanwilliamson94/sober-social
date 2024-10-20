import { NextApiRequest, NextApiResponse } from 'next';
import { getData, addUser, getUsers } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch test data from Neon DB (e.g., current time)
      const data = await getData();
      // Optionally, fetch all users to test
      const users = await getUsers();
      res.status(200).json({ data, users });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    try {
      // Add a new user to the database
      const newUser = await addUser(name, email);
      res.status(201).json({ newUser });
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Error adding user' });
    }
  } else {
    // Handle unsupported methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
