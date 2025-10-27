import cloudinary from "@/lib/cloudinary";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Only POST allowed" });

  try {
    const { image } = req.body;

    if (!image) return res.status(400).json({ message: "No image provided" });

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "my-stream/uploads",
      resource_type: "image",
    });

    res.status(200).json({
      message: "Upload successful",
      url: uploadResponse.secure_url,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}