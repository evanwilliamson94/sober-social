import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Log the request method to ensure the webhook is sending POST
  console.log('Request method:', req.method);

  if (req.method === 'POST') {
    try {
      const { first_name, last_name, email_addresses, username } = req.body.data;
      const email = email_addresses[0]?.email_address; // Safely access the email

      // Ensure valid data is present
      if (!first_name || !last_name || !email || !username) {
        return res.status(400).json({ error: 'Invalid user data' });
      }

      // Add the user to the database
      const result = await addUser(`${first_name} ${last_name}`, email, username);

      // Check if an error was returned
      if (result.error) {
        return res.status(result.status).json({ error: result.error });
      }

      // Return success response if user is added
      return res.status(201).json({ message: 'User added to Neon DB', user: result.user });
    } catch (error) {
      console.error('Error adding user to Neon DB:', error);
      return res.status(500).json({ error: 'Error adding user to Neon DB' });
    }
  } else {
    // Respond with 405 if the request is not a POST
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
