"use client";
export default function AboutPage() {
  return (
    <div>
      <style jsx>{`
        .about-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #00c6ff, #0070f3);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          font-family: "Poppins", sans-serif;
        }
        .about-box {
          background: rgba(255, 255, 255, 0.15);
          padding: 40px;
          border-radius: 20px;
          max-width: 800px;
          text-align: center;
          backdrop-filter: blur(10px);
        }
        h1 {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          line-height: 1.6;
        }
      `}</style>

      <div className="about-container">
        <div className="about-box">
          <h1>About YouStream 🌍</h1>
          <p>
            YouStream is a next-generation content platform that empowers
            creators to share videos, articles, and stories globally. Built with
            modern technologies like Firebase and Cloudinary, our platform is
            fast, secure, and reliable — giving you a smooth content experience.
          </p>
          <p>
            Our mission is to bring creativity and connection together, making
            it easy for everyone to stream, share, and grow.
          </p>
        </div>
      </div>
    </div>
  );
}