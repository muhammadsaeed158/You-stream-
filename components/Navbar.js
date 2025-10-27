"use client";
import Link from "next/link";
import { useState } from "react";
import { Globe2 } from "lucide-react"; // 🌍 world icon (from lucide-react)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <style jsx>{`
        nav {
          background: linear-gradient(90deg, #0070f3, #00c6ff);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 40px;
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: "Poppins", sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .logo {
          font-size: 1.6rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo span {
          display: flex;
          align-items: center;
        }

        .menu {
          display: flex;
          gap: 25px;
        }

        .menu a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .menu a:hover {
          color: #d1ecff;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.8rem;
        }

        @media (max-width: 768px) {
          .menu {
            display: ${menuOpen ? "flex" : "none"};
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.9);
            position: absolute;
            top: 65px;
            right: 0;
            width: 200px;
            border-radius: 8px;
            padding: 15px;
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>

      <div className="logo">
        <span>
          <Globe2 size={26} /> YouStream
        </span>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/signin">Sign In</Link>
      </div>
    </nav>
  );
}