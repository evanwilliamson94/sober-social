import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Destructure the user data from the request body
      const { firstName, lastName, email, username, clerkUserId } = req.body;

      // Check if all required fields are provided
      if (!firstName || !lastName || !email || !username || !clerkUserId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Add the new user to the Neon DB (with Clerk user ID)
      const newUser = await addUser(`${firstName} ${lastName}`, email, username, clerkUserId);

      // If successful, return the new user data
      return res.status(201).json({ message: 'User added successfully', newUser });
    } catch (error) {
      console.error('Error adding user:', error);
      return res.status(500).json({ error: 'Error adding user' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
