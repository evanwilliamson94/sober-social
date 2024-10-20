import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from '@/utils/db'; // Ensure your db.ts is correctly set up


// Webhook secret (ensure this is in your environment variables for security)
const webhookSecret = process.env.SVIX_WEBHOOK_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify the webhook signature (depending on the webhook tool you're using, adjust this)
  const payload = req.body;
  const headers = req.headers;

  try {
    const { first_name, last_name, email, username } = payload.data; // Adjust based on webhook data structure

    // Ensure the required data is present
    if (!first_name || !last_name || !email || !username) {
      return res.status(400).json({ error: 'Invalid user data' });
    }

    // Add the user to Neon database using the addUser function
    const user = await addUser(`${first_name} ${last_name}`, email, username);  // Include username here
    
    return res.status(201).json({ message: 'User added to Neon DB', user });
  } catch (error) {
    console.error('Error adding user:', error);
    return res.status(500).json({ error: 'Error adding user to Neon DB' });
  }
}
