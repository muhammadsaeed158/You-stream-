"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";

export const metadata = {
  title: "YouStream — Share Your World",
  description: "Watch, upload and share amazing stories, videos and experiences.",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // Simulated auth check
  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (!isAuth && pathname !== "/signin" && pathname !== "/signup") {
      router.push("/signin");
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/a2d9d5f9d2.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/" className="logo">
          🌐 YouStream
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/upload">Upload</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
      <div className="nav-right">
        <Link href="/signin" className="btn btn-outline">Sign In</Link>
        <Link href="/signup" className="btn btn-primary">Sign Up</Link>
      </div>
    </nav>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://www.youtube.com" target="_blank" className="yt"><i className="fab fa-youtube"></i></a>
        <a href="https://www.tiktok.com" target="_blank" className="tk"><i className="fab fa-tiktok"></i></a>
        <a href="https://www.instagram.com" target="_blank" className="ig"><i className="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com" target="_blank" className="tw"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com" target="_blank" className="fb"><i className="fab fa-facebook"></i></a>
        <a href="https://www.yahoo.com" target="_blank" className="yh"><i className="fab fa-yahoo"></i></a>
      </div>
      <p>© {year} YouStream. All rights reserved.</p>
    </footer>
  );
}

/* ---------- CSS Styles ---------- */
const style = document.createElement("style");
style.innerHTML = `
  :root {
    --primary: #007bff;
    --accent: #6610f2;
    --text: #222;
    --muted: #555;
    --bg: #f5f7fa;
    --card: #fff;
    --radius: 14px;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: var(--bg);
    color: var(--text);
  }

  .navbar {
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .navbar .logo {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--accent);
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 18px;
    list-style: none;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--muted);
    font-weight: 500;
    transition: 0.2s;
  }
  .nav-links a:hover { color: var(--accent); }

  .btn {
    padding: 8px 14px;
    border-radius: var(--radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: 0.2s;
  }
  .btn-primary {
    background: var(--accent);
    color: #fff;
  }
  .btn-outline {
    border: 1.5px solid var(--accent);
    color: var(--accent);
  }
  .btn-outline:hover {
    background: var(--accent);
    color: #fff;
  }

  .main {
    padding: 40px 16px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .footer {
    background: white;
    text-align: center;
    padding: 24px 0;
    border-top: 1px solid #eee;
  }
  .footer .socials {
    margin-bottom: 10px;
  }
  .footer .socials a {
    margin: 0 8px;
    font-size: 20px;
    text-decoration: none;
    transition: 0.3s;
  }
  .footer .socials .yt { color: #ff0000; }
  .footer .socials .tk { color: #000; }
  .footer .socials .ig { color: #e4405f; }
  .footer .socials .tw { color: #1da1f2; }
  .footer .socials .fb { color: #1877f2; }
  .footer .socials .yh { color: #6001d2; }
  .footer .socials a:hover { opacity: 0.7; }
`;
document.head.appendChild(style);