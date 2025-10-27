import { FaYoutube, FaTiktok, FaInstagram, FaTwitter, FaFacebook, FaYahoo } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <style jsx>{`
        footer {
          background-color: #0b0f19;
          color: #ffffff;
          text-align: center;
          padding: 30px 20px;
          font-family: "Poppins", sans-serif;
          position: relative;
          bottom: 0;
          width: 100%;
        }

        .icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 15px;
        }

        .icons a {
          color: inherit;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .icons a:hover {
          transform: scale(1.2);
        }

        .youtube:hover {
          color: #ff0000;
        }

        .tiktok:hover {
          color: #69c9d0;
        }

        .instagram:hover {
          color: #e4405f;
        }

        .twitter:hover {
          color: #1da1f2;
        }

        .facebook:hover {
          color: #1877f2;
        }

        .yahoo:hover {
          color: #720e9e;
        }

        p {
          font-size: 0.95rem;
          opacity: 0.85;
        }
      `}</style>

      <div className="icons">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="yahoo"
        >
          <FaYahoo />
        </a>
      </div>

      <p>© {year} YouStream 🌍 — All rights reserved.</p>
    </footer>
  );
}