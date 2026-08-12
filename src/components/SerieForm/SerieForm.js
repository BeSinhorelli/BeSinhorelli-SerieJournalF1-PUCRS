import React, { useState, useEffect } from 'react';
import './SerieForm.css';

const SerieForm = ({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    seasons: '',
    releaseDate: '',
    director: '',
    producer: '',
    category: '',
    watchedDate: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        seasons: initialData.seasons || '',
        releaseDate: initialData.releaseDate || '',
        director: initialData.director || '',
        producer: initialData.producer || '',
        category: initialData.category || '',
        watchedDate: initialData.watchedDate || ''
      });
    }
  }, [initialData]);

  const categories = [
    'Ação', 'Comédia', 'Drama', 'Ficção Científica',
    'Fantasia', 'Suspense', 'Terror', 'Documentário', 'Animação'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Título é obrigatório';
    if (!formData.seasons || formData.seasons < 1) {
      newErrors.seasons = 'Número de temporadas deve ser maior que 0';
    }
    if (!formData.releaseDate) newErrors.releaseDate = 'Data de lançamento é obrigatória';
    if (!formData.director.trim()) newErrors.director = 'Diretor é obrigatório';
    if (!formData.producer.trim()) newErrors.producer = 'Produtora é obrigatória';
    if (!formData.category) newErrors.category = 'Categoria é obrigatória';
    if (!formData.watchedDate) newErrors.watchedDate = 'Data em que assistiu é obrigatória';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      if (!isEditing) {
        setFormData({
          title: '', seasons: '', releaseDate: '',
          director: '', producer: '', category: '', watchedDate: ''
        });
      }
    }
  };

  return (
    <form className="serie-form" onSubmit={handleSubmit}>
      <h2 className="form-title">
        {isEditing ? '✏️ Editar Série' : '📝 Cadastrar Nova Série'}
      </h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="title">Título *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
            placeholder="Digite o título da série"
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="seasons">Número de Temporadas *</label>
          <input
            type="number"
            id="seasons"
            name="seasons"
            value={formData.seasons}
            onChange={handleChange}
            className={errors.seasons ? 'error' : ''}
            placeholder="Ex: 3"
            min="1"
          />
          {errors.seasons && <span className="error-message">{errors.seasons}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Data de Lançamento *</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className={errors.releaseDate ? 'error' : ''}
          />
          {errors.releaseDate && <span className="error-message">{errors.releaseDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="watchedDate">Data em que Assistiu *</label>
          <input
            type="date"
            id="watchedDate"
            name="watchedDate"
            value={formData.watchedDate}
            onChange={handleChange}
            className={errors.watchedDate ? 'error' : ''}
          />
          {errors.watchedDate && <span className="error-message">{errors.watchedDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="director">Diretor *</label>
          <input
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            className={errors.director ? 'error' : ''}
            placeholder="Nome do diretor"
          />
          {errors.director && <span className="error-message">{errors.director}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="producer">Produtora *</label>
          <input
            type="text"
            id="producer"
            name="producer"
            value={formData.producer}
            onChange={handleChange}
            className={errors.producer ? 'error' : ''}
            placeholder="Nome da produtora"
          />
          {errors.producer && <span className="error-message">{errors.producer}</span>}
        </div>

        <div className="form-group full-width">
          <label htmlFor="category">Categoria *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Selecione uma categoria</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>
      </div>

      <div className="form-actions">
        {isEditing && (
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
        )}
        <button type="submit" className="btn-submit">
          {isEditing ? 'Atualizar Série' : 'Cadastrar Série'}
        </button>
      </div>
    </form>
  );
};

export default SerieForm;