// lib/cloudinary.js
// Cloudinary setup for image and video uploads

import { v2 as cloudinary } from "cloudinary";

// Automatically reads CLOUDINARY_URL from environment variables
// Format: cloudinary://API_KEY:API_SECRET@CLOUD_NAME

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Optional: helper function for easy uploads (server-side)
export async function uploadImage(filePath, folder = "uploads") {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw error;
  }
}