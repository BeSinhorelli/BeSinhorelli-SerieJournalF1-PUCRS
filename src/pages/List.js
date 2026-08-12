import React, { useState } from 'react';
import SerieList from '../components/SerieList/SerieList';
import SerieForm from '../components/SerieForm/SerieForm';

const List = ({ series, updateSerie, deleteSerie }) => {
  const [editingSerie, setEditingSerie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (serie) => {
    setEditingSerie(serie);
    setIsEditing(true);
    document.querySelector('.edit-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUpdate = (formData) => {
    updateSerie(editingSerie.id, formData);
    setIsEditing(false);
    setEditingSerie(null);
    alert('✅ Série atualizada com sucesso!');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingSerie(null);
  };

  return (
    <div className="list-container">
      {isEditing && (
        <div className="edit-section" style={{ marginBottom: '2rem' }}>
          <SerieForm 
            onSubmit={handleUpdate}
            initialData={editingSerie}
            isEditing={true}
            onCancel={handleCancelEdit}
          />
        </div>
      )}
      
      <SerieList 
        series={series}
        onEdit={handleEdit}
        onDelete={deleteSerie}
      />
    </div>
  );
};

export default List;