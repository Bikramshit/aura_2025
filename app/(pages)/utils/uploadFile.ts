import { v2 as cloudinary } from 'cloudinary';  // Importing v2
import multer from 'multer';
import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer for file parsing
const upload = multer({
  storage: multer.memoryStorage(), // Store file in memory before uploading
});

const handler = nc<NextApiRequest, NextApiResponse>();

// Define the upload route to handle file upload
handler.use(upload.single('file')).post(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload the file to Cloudinary
    cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto', // Let Cloudinary automatically detect the file type (image, video, etc.)
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Upload failed', details: error });
        }

        // Respond with the URL of the uploaded file
        return res.status(200).json({ url: result?.secure_url });
      }
    ).end(req.file.buffer); // Pipe the file to Cloudinary upload stream
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong', details: error });
  }
});

export default handler;
