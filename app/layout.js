"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavbar = ["/signin", "/signup", "/resetpassword"].includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>YouStream</title>
      </head>
      <body>
        {!hideNavbar && (
          <nav className="navbar">
            <div className="logo">
              <Globe2 size={22} className="icon" />
              <span>YouStream</span>
            </div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/upload">Upload</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/settings">Settings</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        )}

        <main>{children}</main>

        {!hideNavbar && (
          <footer className="footer">
            <p>© {new Date().getFullYear()} YouStream | Share your world 🌎</p>
          </footer>
        )}

        <style jsx>{`
          :root {
            --accent: #0070f3;
            --muted: #555;
            --text: #222;
            --card: #fff;
            --radius: 12px;
          }
          body {
            margin: 0;
            font-family: "Poppins", sans-serif;
            background: #f9fafc;
            color: var(--text);
          }
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 30px;
            background: var(--accent);
            color: white;
          }
          .navbar .logo {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 600;
            font-size: 1.2rem;
          }
          .navbar ul {
            display: flex;
            gap: 20px;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .navbar ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s;
          }
          .navbar ul li a:hover {
            opacity: 0.8;
          }
          .footer {
            text-align: center;
            padding: 20px;
            background: #eee;
            color: var(--muted);
            font-size: 0.9rem;
            margin-top: 40px;
          }
        `}</style>
      </body>
    </html>
  );
}