export default function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <style jsx>{`
        .card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .content {
          padding: 16px;
        }

        h3 {
          font-size: 1.3rem;
          color: #222;
          margin-bottom: 8px;
        }

        p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>

      <img src={imageUrl} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}