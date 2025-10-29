"use client";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/lib/firebaseConfig";

export default function ResetPasswordPage() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset link sent to your email!");
    } catch (error) {
      setMessage("❌ Failed to send reset link. Try again.");
    }
  };

  return (
    <div>
      <style jsx>{`
        .reset-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #0070f3, #00c6ff);
          font-family: "Poppins", sans-serif;
        }
        .reset-box {
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
        a {
          color: #0070f3;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }
      `}</style>

      <div className="reset-container">
        <div className="reset-box">
          <h2>Reset Your Password</h2>
          <form onSubmit={handleReset}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </form>
          {message && <p>{message}</p>}
          <a href="/signin">← Back to Sign In</a>
        </div>
      </div>
    </div>
  );
}