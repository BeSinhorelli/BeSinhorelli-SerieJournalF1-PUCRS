import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="page-title">ℹ️ Sobre o Projeto</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Series Journal</h2>
          <p>
            O Series Journal é um sistema de gerenciamento de séries desenvolvido 
            como parte do aprendizado de desenvolvimento frontend com React.
          </p>
        </section>

        <section className="about-section">
          <h3>🎯 Objetivo</h3>
          <p>
            Este projeto tem como objetivo demonstrar a implementação de um CRUD 
            completo (Create, Read, Update, Delete) utilizando React, com 
            componentização, validação de formulários e navegação entre páginas.
          </p>
        </section>

        <section className="about-section">
          <h3>🛠️ Tecnologias Utilizadas</h3>
          <ul className="tech-list">
            <li>⚛️ React 18</li>
            <li>🔄 React Router DOM para navegação</li>
            <li>🎨 CSS3 com design responsivo</li>
            <li>📦 Create React App para configuração</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>📋 Funcionalidades</h3>
          <ul className="features-list">
            <li>✅ Cadastro de séries com validação</li>
            <li>✅ Listagem com busca e filtro por categoria</li>
            <li>✅ Edição de séries existentes</li>
            <li>✅ Exclusão de séries</li>
            <li>✅ Navegação entre páginas</li>
            <li>✅ Feedback visual para usuário</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>📁 Estrutura do Projeto</h3>
          <div className="project-structure">
            <pre>
{`src/
├── components/
│   ├── NavBar/
│   │   ├── NavBar.jsx
│   │   └── NavBar.css
│   ├── SerieForm/
│   │   ├── SerieForm.jsx
│   │   └── SerieForm.css
│   └── SerieList/
│       ├── SerieList.jsx
│       └── SerieList.css
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Register.jsx
│   └── List.jsx
├── App.jsx
├── App.css
├── index.js
└── index.css`}
            </pre>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-content {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .about-section {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .about-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .about-section h2 {
          color: #333;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .about-section h3 {
          color: #555;
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
        }

        .about-section p {
          color: #666;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .tech-list, .features-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .tech-list li, .features-list li {
          padding: 0.5rem 1rem;
          background: #f8f9fa;
          border-radius: 6px;
          color: #555;
          font-size: 0.95rem;
        }

        .project-structure {
          background: #2d2d2d;
          border-radius: 8px;
          padding: 1.5rem;
          overflow-x: auto;
        }

        .project-structure pre {
          color: #f8f8f8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
          font-family: 'Courier New', monospace;
        }

        @media (max-width: 768px) {
          .tech-list, .features-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;