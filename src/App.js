import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountrySearch from './components/CountrySearch';
import CountryDetail from './components/CountryDetail';
import CountryFilter from './components/CountryFilter';
import About from './components/About'; // Pastikan About diimpor
import Navbar from './components/Navbar'; // Pastikan Navbar diimpor

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<CountrySearch />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="/filter" element={<CountryFilter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
