"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [welcome, setWelcome] = useState("Loading...");
  useEffect(() => {
    const user = localStorage.getItem("auth");
    setWelcome(user ? "Welcome back to YouStream!" : "Welcome to YouStream!");
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1>{welcome}</h1>
        <p>Watch, Upload and Share your world with YouStream.</p>
        <div className="hero-btns">
          <Link href="/upload" className="btn btn-primary">Upload Now</Link>
          <Link href="/dashboard" className="btn btn-outline">My Dashboard</Link>
          <Link href="/about" className="btn btn-outline">About</Link>
          <Link href="/contact" className="btn btn-outline">Contact</Link>
        </div>
      </section>

      <section className="cards">
        <h2>Featured Content</h2>
        <div className="grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card">
              <img src={`https://picsum.photos/seed/${i}/400/220`} alt="content" />
              <div className="card-body">
                <h3>Sample Video {i + 1}</h3>
                <p>Engaging description of this amazing content.</p>
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .home .hero {
          text-align: center;
          padding: 60px 10px;
        }
        .home .hero h1 {
          font-size: 2.2rem;
          color: var(--accent);
        }
        .home .hero p {
          color: var(--muted);
          margin-top: 8px;
          font-size: 1.1rem;
        }
        .hero-btns {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn {
          background: var(--accent);
          color: white;
          padding: 10px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;
        }
        .btn:hover {
          opacity: 0.85;
        }
        .btn-outline {
          background: white;
          color: var(--accent);
          border: 2px solid var(--accent);
        }
        .cards {
          margin-top: 50px;
        }
        .cards h2 {
          text-align: center;
          margin-bottom: 24px;
          color: var(--text);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .card {
          background: var(--card);
          border-radius: var(--radius);
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.2s;
        }
        .card:hover { transform: translateY(-5px); }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-body {
          padding: 16px;
        }
        .card-body h3 {
          margin: 0;
          color: var(--accent);
          font-size: 1.1rem;
        }
        .card-body p {
          color: var(--muted);
          margin: 8px 0 12px;
        }
      `}</style>
    </div>
  );
}