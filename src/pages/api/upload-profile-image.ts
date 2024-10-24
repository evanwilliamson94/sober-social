import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import { db } from '../../utils/db';  // Correct path for db connection
import { userProfileImages } from '../../utils/schema'; // Assuming you have a schema for user profile images

// Configure AWS S3 with your credentials and region
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, image } = req.body;  // Assuming image is sent as base64 string

    try {
      // Convert base64 image to binary
      const base64Data = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
      const fileType = image.split(';')[0].split('/')[1];  // Get file type (e.g., jpeg, png)

      // Define S3 upload parameters
      const params: AWS.S3.PutObjectRequest = {
        Bucket: process.env.AWS_S3_BUCKET_NAME as string,  // Your S3 bucket name
        Key: `user-profile-images/${userId}.${fileType}`,  // File name: userId + file type (e.g., userId.jpeg)
        Body: base64Data,  // The binary image data
        ACL: 'public-read',  // Publicly readable
        ContentEncoding: 'base64',  // Specify that the image is base64 encoded
        ContentType: `image/${fileType}`,  // Set the content type for the image
      };

      // Upload the image to S3
      const { Location } = await s3.upload(params).promise();  // Location is the URL of the uploaded image

      // Upsert (Insert or Update) into the user_profile_images table
      await db
        .insert(userProfileImages)
        .values({
          userId: parseInt(userId, 10),  // Assuming userId is numeric
          imageUrl: Location,  // Save the S3 image URL
        })
        .onConflictDoUpdate({
          target: userProfileImages.userId,
          set: {
            imageUrl: Location,  // Update the imageUrl on conflict
          },
        });

      // Respond with the uploaded image URL
      res.status(200).json({ imageUrl: Location });
    } catch (error) {
      console.error('Error uploading image or saving to NeonDB:', error);
      res.status(500).json({ error: 'Failed to upload image. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
