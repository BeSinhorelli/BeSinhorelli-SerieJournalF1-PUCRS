import React from 'react';
import SerieForm from '../components/SerieForm/SerieForm';

const Register = ({ addSerie }) => {
  const handleSubmit = (formData) => {
    addSerie(formData);
    alert('✅ Série cadastrada com sucesso!');
  };

  return (
    <div className="register-container">
      <SerieForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;