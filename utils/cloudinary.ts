import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const UploadFile = async (file: File) => {




  try {
      // Convert file to buffer
      const buffer = Buffer.from(await file.arrayBuffer());

      // Create a promise-based function for Cloudinary upload
      const uploadToCloudinary = (buffer: Buffer) => {
          return new Promise((resolve, reject) => {
              cloudinary.uploader.upload_stream(
                  {
                      resource_type: "raw", // Ensure non-image files are treated correctly
                      public_id: file.name.split(".")[0], // Optional: set the file name without extension
                      format:"pdf"
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

      console.log("File uploaded successfully:", uploadResult);
      return uploadResult.secure_url; // Contains secure_url and other details
  } catch (error) {
      console.error("File upload error:", error);
      throw new Error("Failed to upload file.");
  }
};
