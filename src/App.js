import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import List from './pages/List';

function App() {
  // Dados iniciais com categorias variadas
  const [series, setSeries] = useState([
    {
      id: 1,
      title: 'Stranger Things',
      seasons: 4,
      releaseDate: '2022-07-01',
      director: 'The Duffer Brothers',
      producer: 'Netflix',
      category: 'Ficção Científica',
      watchedDate: '2022-07-15'
    },
    {
      id: 2,
      title: 'The Crown',
      seasons: 6,
      releaseDate: '2023-11-16',
      director: 'Peter Morgan',
      producer: 'Netflix',
      category: 'Drama',
      watchedDate: '2023-12-01'
    },
    {
      id: 3,
      title: 'Succession',
      seasons: 4,
      releaseDate: '2023-05-28',
      director: 'Jesse Armstrong',
      producer: 'HBO',
      category: 'Drama',
      watchedDate: '2023-06-10'
    },
    {
      id: 4,
      title: 'The Last of Us',
      seasons: 1,
      releaseDate: '2023-01-15',
      director: 'Craig Mazin',
      producer: 'HBO',
      category: 'Ação',
      watchedDate: '2023-03-20'
    },
    {
      id: 5,
      title: 'Ted Lasso',
      seasons: 3,
      releaseDate: '2023-05-31',
      director: 'Bill Lawrence',
      producer: 'Apple TV+',
      category: 'Comédia',
      watchedDate: '2023-07-01'
    }
  ]);

  // CRUD Operations
  const addSerie = (newSerie) => {
    setSeries([...series, { ...newSerie, id: Date.now() }]);
  };

  const updateSerie = (id, updatedSerie) => {
    setSeries(series.map(serie => 
      serie.id === id ? { ...updatedSerie, id } : serie
    ));
  };

  const deleteSerie = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta série?')) {
      setSeries(series.filter(serie => serie.id !== id));
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={
              <Register addSerie={addSerie} />
            } />
            <Route path="/list" element={
              <List 
                series={series} 
                updateSerie={updateSerie}
                deleteSerie={deleteSerie}
              />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;