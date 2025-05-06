import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExchangeRates from './ExchangeRates';
import About from './About';
import ErrorPage from './ErrorPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/exchange" element={<ExchangeRates />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
