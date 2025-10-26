"use client";
import { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";

export default function SettingsPage() {
  const auth = getAuth(app);
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      setDisplayName(auth.currentUser.displayName || "");
    }
  }, [auth]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, { displayName });
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage("Update failed!");
    }
  };

  return (
    <div>
      <style jsx>{`
        .settings-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 90vh;
          background: linear-gradient(135deg, #00c6ff, #0070f3);
          font-family: "Poppins", sans-serif;
        }
        .settings-box {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          width: 400px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        h2 {
          color: #0070f3;
          margin-bottom: 20px;
        }
        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin-bottom: 15px;
          font-size: 16px;
        }
        button {
          background-color: #0070f3;
          color: #fff;
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #005ecb;
        }
        p {
          margin-top: 15px;
          color: green;
          font-weight: 500;
        }
      `}</style>

      <div className="settings-container">
        <div className="settings-box">
          <h2>Update Profile Settings</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
          {message && <p>{message}</p>}
          <a href="/dashboard" style={{ color: "#0070f3", textDecoration: "none" }}>
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}