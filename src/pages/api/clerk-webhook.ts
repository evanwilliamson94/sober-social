import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Log the request method and headers to ensure the webhook is sending POST
  console.log('Request method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', JSON.stringify(req.body, null, 2)); // Log the full body in a formatted way

  if (req.method === 'POST') {
    try {
      // Safely access the body and ensure it's structured as expected
      const { first_name, last_name, email_addresses, username } = req.body?.data || {};

      // Ensure email_addresses array exists and is not empty
      const email = email_addresses?.[0]?.email_address;

      // Ensure valid data is present
      if (!first_name || !last_name || !email || !username) {
        console.error('Invalid user data received:', req.body);
        return res.status(400).json({ error: 'Invalid user data' });
      }

      // Add the user to the database
      const result = await addUser(`${first_name} ${last_name}`, email, username);

      // Check if an error was returned
      if (result.error) {
        console.error('Error returned from addUser:', result.error);
        return res.status(result.status).json({ error: result.error });
      }

      // Return success response if the user is added
      console.log('User added successfully:', result.user);
      return res.status(201).json({ message: 'User added to Neon DB', user: result.user });
    } catch (error) {
      console.error('Error adding user to Neon DB:', error);
      return res.status(500).json({ error: 'Error adding user to Neon DB' });
    }
  } else {
    // Log the error for wrong method and respond with 405
    console.error('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
