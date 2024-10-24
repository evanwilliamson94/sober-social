import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../utils/db';  // Correct path for db connection
import { userProfileImages } from '../../utils/schema'; // Assuming you have a schema for user profile images
import { eq } from 'drizzle-orm/expressions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId } = req.body;

    // Handle file upload (save the image to a storage service and get the URL)
    const imageUrl = 'https://path-to-uploaded-image.jpg';  // Replace this with the actual upload logic

    try {
      // Upsert (Insert or Update) into the user_profile_images table
      await db
        .insert(userProfileImages)
        .values({
          userId: parseInt(userId, 10), // Assuming userId is numeric
          imageUrl,
        })
        .onConflictDoUpdate({
          target: userProfileImages.userId,
          set: {
            imageUrl: imageUrl, // Update the imageUrl on conflict
          },
        });

      res.status(200).json({ imageUrl });
    } catch (error) {
      console.error('Error saving image to NeonDB:', error);
      res.status(500).json({ error: 'Failed to upload image' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
