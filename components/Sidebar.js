import Link from "next/link";
import { Home, Upload, Settings, Info, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <style jsx>{`
        .sidebar {
          width: 230px;
          height: 100vh;
          background: #0b0f19;
          color: white;
          display: flex;
          flex-direction: column;
          padding: 30px 15px;
          position: fixed;
          left: 0;
          top: 0;
          box-shadow: 3px 0 10px rgba(0, 0, 0, 0.3);
          font-family: "Poppins", sans-serif;
        }

        .sidebar h2 {
          font-size: 1.6rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 25px;
          color: #00c6ff;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .menu a {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 8px;
        }

        .menu a:hover {
          background: #1b2135;
          color: #00c6ff;
        }

        .logout {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 900px) {
          .sidebar {
            position: relative;
            width: 100%;
            height: auto;
            flex-direction: row;
            justify-content: space-around;
          }
          .menu {
            flex-direction: row;
            gap: 15px;
          }
          .logout {
            border-top: none;
            margin-top: 0;
          }
        }
      `}</style>

      <h2>Dashboard</h2>

      <div className="menu">
        <Link href="/"><Home size={20} /> Home</Link>
        <Link href="/upload"><Upload size={20} /> Upload</Link>
        <Link href="/settings"><Settings size={20} /> Settings</Link>
        <Link href="/about"><Info size={20} /> About</Link>
      </div>

      <div className="logout">
        <Link href="/signin">
          <LogOut size={20} /> Logout
        </Link>
      </div>
    </aside>
  );
}