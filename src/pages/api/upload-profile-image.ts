import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import { IncomingForm, Fields, Files, File as FormidableFile } from 'formidable';
import { db } from '../../utils/db';  // Correct path for db connection
import { userProfileImages } from '../../utils/schema'; // Assuming you have a schema for user profile images

// Configure AWS S3 with your credentials and region
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Helper function to parse FormData using formidable
const parseForm = (req: NextApiRequest): Promise<{ fields: Fields; files: Files }> =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing to handle FormData manually with formidable
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Parse the incoming form data (including file and fields)
      const { fields, files } = await parseForm(req);
      console.log('Parsed fields:', fields);  // Log parsed fields
      console.log('Parsed files:', files);    // Log parsed files

      // Handle userId safely (it could be string or array of strings)
      const userId = Array.isArray(fields.userId) ? fields.userId[0] : fields.userId;

      if (!userId || typeof userId !== 'string') {
        console.error('Invalid user ID:', userId);
        return res.status(400).json({ error: 'Invalid user ID' });
      }

      // Check if files.file exists
      if (!files.file) {
        console.error('No file uploaded');
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Check if a file was uploaded (files.file can be an array or a single file)
      const file = Array.isArray(files.file) ? files.file[0] : files.file;

      // Make sure file is defined and is of type FormidableFile
      if (!file || !(file as FormidableFile).filepath) {
        console.error('Invalid file uploaded:', file);
        return res.status(400).json({ error: 'Invalid file uploaded' });
      }

      const formidableFile = file as FormidableFile;

      // Log the file details
      console.log('File being uploaded:', formidableFile);

      // Define S3 upload parameters
      const fileExtension = formidableFile.originalFilename?.split('.').pop(); // Get the file extension (e.g., jpeg, png)
      const params: AWS.S3.PutObjectRequest = {
        Bucket: process.env.AWS_S3_BUCKET_NAME as string,  // Your S3 bucket name
        Key: `user-profile-images/${userId}.${fileExtension}`,  // File name: userId + file type (e.g., userId.jpeg)
        Body: formidableFile.filepath,  // The file path to the uploaded file
        ACL: 'public-read',  // Publicly readable
        ContentType: formidableFile.mimetype || 'application/octet-stream',  // Set the content type for the image
      };

      // Log S3 upload params
      console.log('S3 upload params:', params);

      // Upload the image to S3
      const { Location } = await s3.upload(params).promise();  // Location is the URL of the uploaded image
      console.log('Image uploaded to S3. URL:', Location);

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
