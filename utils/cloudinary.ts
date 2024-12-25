import { v2 as cloudinary } from 'cloudinary';
import getDataUri from './getDataUri';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


// export const UploadFile = async (file: File) => {
//     try {
//         const fileUri = await getDataUri(file);
//         console.log("File Url:::",fileUri);
//         const myCloud = await cloudinary.uploader.upload(fileUri.content);
//         console.log("myClud::", myCloud);

//         return myCloud.secure_url;
//     } catch (error) {
        
//     }
// }

export const UploadFile = async (file: File) => {
  try {
      // Convert file to buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      

      // Sanitize the filename to remove spaces and special characters
      const sanitizedFileName = file.name
          .split(".")[0]  // Get the file name without the extension
          .replace(/\s+/g, "_")  // Replace spaces with underscores
          .replace(/[^\w-_]+/g, "")  // Remove any special characters
          .toLowerCase();  // Optional: convert to lowercase for consistency

      // Create a promise-based function for Cloudinary upload
      const uploadToCloudinary = (buffer: Buffer) => {
          return new Promise((resolve, reject) => {
              cloudinary.uploader.upload_stream(
                  {
                      resource_type: "raw",  // Ensure non-image files are treated correctly
                      public_id: sanitizedFileName,  // Use sanitized file name
                      format: "pdf"  // Specify the format explicitly
                  },
                  (error, result) => {
                      if (error) {
                          reject(error);
                      } else {
                          resolve(result);
                      }
                  }
              ).end(buffer);
          });
      };

      // Upload file to Cloudinary
      const uploadResult: any = await uploadToCloudinary(buffer);

      if (uploadResult && uploadResult.secure_url) {
          console.log("File uploaded successfully:", uploadResult);
          return uploadResult.secure_url;  // Return the URL of the uploaded PDF
      } else {
          throw new Error("Error in uploading PDF. No result returned.");
      }
  } catch (error) {
      console.error("File upload error:", error);
      throw new Error("Failed to upload file.");
  }
};
