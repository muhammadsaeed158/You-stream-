"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    setUploading(true);
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dzm65xht4/upload",
        formData
      );
      setUrl(response.data.secure_url);
    } catch (err) {
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <style jsx>{`
        .upload-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #0070f3, #00c6ff);
          font-family: "Poppins", sans-serif;
        }
        .upload-box {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          width: 400px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .upload-box h2 {
          color: #0070f3;
          margin-bottom: 20px;
        }
        input[type="file"] {
          display: block;
          margin: 15px auto;
          padding: 10px;
        }
        button {
          background-color: #0070f3;
          color: #fff;
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: 0.3s;
        }
        button:hover {
          background-color: #005ecb;
        }
        .preview {
          margin-top: 20px;
        }
        .preview img {
          width: 100%;
          border-radius: 10px;
          margin-top: 10px;
        }
        .back {
          display: inline-block;
          margin-top: 15px;
          text-decoration: none;
          color: #0070f3;
          font-weight: 500;
        }
      `}</style>

      <div className="upload-container">
        <div className="upload-box">
          <h2>Upload to Cloudinary</h2>
          <form onSubmit={handleUpload}>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*,video/*"
            />
            <button type="submit" disabled={uploading}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </form>

          {url && (
            <div className="preview">
              <p>Uploaded Successfully 🎉</p>
              <img src={url} alt="Uploaded file" />
            </div>
          )}
          <a href="/dashboard" className="back">
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}