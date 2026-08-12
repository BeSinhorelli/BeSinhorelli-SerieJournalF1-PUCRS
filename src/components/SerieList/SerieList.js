import React, { useState } from 'react';
import './SerieList.css';

const SerieList = ({ series, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // LISTA COMPLETA DE TODAS AS CATEGORIAS (9 categorias)
  const allCategories = [
    'Ação', 
    'Comédia', 
    'Drama', 
    'Ficção Científica',
    'Fantasia', 
    'Suspense', 
    'Terror', 
    'Documentário', 
    'Animação'
  ];

  // Filtrar séries
  const filteredSeries = series.filter(serie => {
    const matchesSearch = serie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || serie.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="serie-list-container">
      <div className="list-header">
        <h2 className="list-title">📺 Minhas Séries</h2>
        <div className="filters">
          <input
            type="text"
            placeholder="🔍 Buscar por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas as categorias</option>
            {/* LISTA COMPLETA DE TODAS AS CATEGORIAS */}
            {allCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredSeries.length === 0 ? (
        <div className="empty-state">
          <p>Nenhuma série encontrada.</p>
          <p>Cadastre sua primeira série!</p>
        </div>
      ) : (
        <div className="series-grid">
          {filteredSeries.map(serie => (
            <div key={serie.id} className="serie-card">
              <div className="serie-header">
                <h3 className="serie-title">{serie.title}</h3>
                <span className="serie-category">{serie.category}</span>
              </div>
              
              <div className="serie-info">
                <div className="info-item">
                  <span className="info-label">Temporadas:</span>
                  <span className="info-value">{serie.seasons}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Lançamento:</span>
                  <span className="info-value">{formatDate(serie.releaseDate)}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Diretor:</span>
                  <span className="info-value">{serie.director}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Produtora:</span>
                  <span className="info-value">{serie.producer}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Assistida em:</span>
                  <span className="info-value">{formatDate(serie.watchedDate)}</span>
                </div>
              </div>

              <div className="serie-actions">
                <button className="btn-edit" onClick={() => onEdit(serie)}>
                  ✏️ Editar
                </button>
                <button className="btn-delete" onClick={() => onDelete(serie.id)}>
                  🗑️ Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="series-count">
        Total: {filteredSeries.length} série{filteredSeries.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default SerieList;