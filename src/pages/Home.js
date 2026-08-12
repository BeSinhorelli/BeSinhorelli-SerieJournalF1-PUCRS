import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">🎬 Series Journal</h1>
        <p className="hero-subtitle">
          Gerencie suas séries favoritas em um só lugar!
        </p>
        <p className="hero-description">
          Cadastre, organize e acompanhe todas as séries que você já assistiu
          com este diário digital de séries.
        </p>
        <div className="hero-actions">
          <Link to="/register" className="btn-primary">
            Começar Agora
          </Link>
          <Link to="/list" className="btn-secondary">
            Ver Séries
          </Link>
        </div>
      </div>

      <div className="features-section">
        <h2>Funcionalidades</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Cadastro</h3>
            <p>Adicione novas séries com todas as informações relevantes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Listagem</h3>
            <p>Visualize todas as suas séries de forma organizada</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Edição</h3>
            <p>Atualize informações das séries a qualquer momento</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗑️</div>
            <h3>Exclusão</h3>
            <p>Remova séries que não deseja mais acompanhar</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-section {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          color: white;
          margin-bottom: 3rem;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          opacity: 0.95;
        }

        .hero-description {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .features-section {
          padding: 2rem;
          text-align: center;
        }

        .features-section h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: #666;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;