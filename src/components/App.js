import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Anime from './Anime';
import Cv from './Cv';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/anime" element={<Anime />} />
      </Routes>
    </Router>
  );
};

export default App;