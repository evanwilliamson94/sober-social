import { NextApiRequest, NextApiResponse } from 'next';
import { getData, addUser, getUsers } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await getData(); // Fetch some test data from the Neon DB (e.g., current time)
      const users = await getUsers(); // Optionally, fetch all users to test
      res.status(200).json({ data, users });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    try {
      const newUser = await addUser(name, email); // Add a new user to the database
      res.status(201).json({ newUser });
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Error adding user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
