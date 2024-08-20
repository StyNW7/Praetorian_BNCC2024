// src/components/CountryFilter.js
import React, { useState, useEffect } from 'react';
import { useCountry } from '../contexts/CountryContext';
import { Link } from 'react-router-dom';
import LoadingSkeleton from './LoadingSkeleton';

const CountryFilter = () => {
  const { countries, loading } = useCountry();
  const [region, setRegion] = useState('All');
  const [language, setLanguage] = useState('All');
  const [independent, setIndependent] = useState('All');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (loading) return;
    
    // Filter countries based on selected criteria
    let filtered = countries;
    if (region !== 'All') {
      filtered = filtered.filter(country => country.region === region);
    }
    if (language !== 'All') {
      filtered = filtered.filter(country => Object.values(country.languages || {}).includes(language));
    }
    if (independent !== 'All') {
      filtered = filtered.filter(country => (independent === 'Yes' ? country.independent : !country.independent));
    }
    setFilteredCountries(filtered);
  }, [region, language, independent, countries, loading]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <div className="mb-4">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="All">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border border-gray-300 rounded ml-4"
          >
            <option value="All">All Languages</option>
            {/* Daftar bahasa bisa diambil dari data yang lebih rinci */}
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            {/* Tambahkan lebih banyak bahasa sesuai kebutuhan */}
          </select>
          
          <select
            value={independent}
            onChange={(e) => setIndependent(e.target.value)}
            className="p-2 border border-gray-300 rounded ml-4"
          >
            <option value="All">All Status</option>
            <option value="Yes">Independent</option>
            <option value="No">Not Independent</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCountries.map(country => (
          <div key={country.cca3} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{country.name.common}</h2>
              <p><strong>Benua:</strong> {country.region}</p>
              <p><strong>Bahasa:</strong> {Object.values(country.languages || {}).join(', ')}</p>
              <p><strong>Populasi:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Luas Wilayah:</strong> {country.area.toLocaleString()} km²</p>
              <Link to={`/country/${country.name.common}`} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryFilter;
