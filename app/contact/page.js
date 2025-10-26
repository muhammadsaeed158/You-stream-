"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0070f3, #00c6ff);
          font-family: "Poppins", sans-serif;
          color: #333;
          padding: 20px;
        }
        .contact-box {
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          width: 450px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }
        h2 {
          text-align: center;
          color: #0070f3;
          margin-bottom: 25px;
        }
        input,
        textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
        }
        button {
          background-color: #0070f3;
          color: #fff;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          width: 100%;
          cursor: pointer;
          font-size: 16px;
          transition: 0.3s;
        }
        button:hover {
          background-color: #005ecb;
        }
        .success {
          color: green;
          text-align: center;
          margin-top: 10px;
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-box">
          <h2>Contact Us 📩</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {submitted && <p className="success">✅ Message sent successfully!</p>}
        </div>
      </div>
    </div>
  );
}