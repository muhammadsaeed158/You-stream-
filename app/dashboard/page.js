"use client";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "@/firebase/firebaseConfig";

export default function DashboardPage() {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) router.push("/signin");
      else setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/signin");
  };

  return (
    <div>
      <style jsx>{`
        .dashboard {
          padding: 40px;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(135deg, #00c6ff, #0070f3);
          min-height: 100vh;
          color: #fff;
        }
        .dashboard-box {
          background: rgba(255, 255, 255, 0.15);
          padding: 30px;
          border-radius: 16px;
          backdrop-filter: blur(8px);
          max-width: 600px;
          margin: auto;
          text-align: center;
        }
        .dashboard h1 {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .dashboard p {
          font-size: 18px;
          margin-bottom: 30px;
        }
        .btn {
          background-color: #fff;
          color: #0070f3;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s;
          text-decoration: none;
          display: inline-block;
          margin: 8px;
        }
        .btn:hover {
          background-color: #0070f3;
          color: #fff;
        }
      `}</style>

      <div className="dashboard">
        <div className="dashboard-box">
          <h1>Welcome to Your Dashboard</h1>
          {user && <p>Logged in as: {user.email}</p>}
          <a href="/upload" className="btn">
            Upload Content
          </a>
          <a href="/settings" className="btn">
            Settings
          </a>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}