import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            🎬 Series Journal
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className={`nav-link ${isActive('/register')}`}>
              Cadastrar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/list" className={`nav-link ${isActive('/list')}`}>
              Listar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;