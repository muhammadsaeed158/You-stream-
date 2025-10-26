"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";

export default function SignUpPage() {
  const auth = getAuth(app);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/signin");
    } catch (err) {
      setError("Error creating account. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <style jsx>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 90vh;
          background: linear-gradient(135deg, #00c6ff, #0070f3);
          font-family: "Poppins", sans-serif;
        }
        .auth-box {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          width: 350px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          text-align: center;
          transition: all 0.3s ease;
        }
        .auth-box:hover {
          transform: translateY(-5px);
        }
        .auth-title {
          font-size: 28px;
          color: #0070f3;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .auth-input {
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
          transition: border 0.2s;
        }
        .auth-input:focus {
          border-color: #0070f3;
          outline: none;
        }
        .auth-btn {
          background-color: #0070f3;
          color: white;
          border: none;
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 10px;
          transition: background-color 0.3s;
        }
        .auth-btn:hover {
          background-color: #005ecb;
        }
        .auth-error {
          color: red;
          font-size: 14px;
          margin-top: 5px;
        }
        .auth-text {
          margin-top: 15px;
          color: #555;
        }
        .auth-text a {
          color: #0070f3;
          font-weight: 500;
          text-decoration: none;
        }
        .auth-text a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="auth-container">
        <div className="auth-box">
          <h2 className="auth-title">Create Account</h2>
          <form onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>
          <p className="auth-text">
            Already have an account? <a href="/signin">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}