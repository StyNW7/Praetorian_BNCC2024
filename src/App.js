import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountrySearch from './components/CountrySearch';
import CountryDetail from './components/CountryDetail';
import CountryFilter from './components/CountryFilter';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Struktur Template Website

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/Praetorian_BNCC2024" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<CountrySearch />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="/filter" element={<CountryFilter />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
