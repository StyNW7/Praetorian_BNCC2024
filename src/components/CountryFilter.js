import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCountry } from '../contexts/CountryContext';
import LoadingSkeleton from './LoadingSkeleton';
import Footer from './Footer';

const CountryFilter = () => {
  const { countries, loading } = useCountry(); // Menggunakan context API
  const [regions, setRegions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [independenceStatuses, setIndependenceStatuses] = useState(['All Status', 'Not Independent', 'Independent']);
  const [region, setRegion] = useState('All');
  const [language, setLanguage] = useState('All');
  const [independent, setIndependent] = useState('All Status');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (loading) return;

    // Extract unique regions
    const uniqueRegions = [...new Set(countries.map(country => country.region))].filter(Boolean);
    setRegions(['All', ...uniqueRegions]);

    // Extract unique languages
    const uniqueLanguages = [
      ...new Set(
        countries.flatMap(country => Object.values(country.languages || {}))
      )
    ].filter(Boolean);
    setLanguages(['All', ...uniqueLanguages]);

    // Extract unique independence statuses
    const uniqueIndependenceStatuses = ['Not Independent', 'Independent'];
    setIndependenceStatuses(['All Status', ...uniqueIndependenceStatuses]);

  }, [countries, loading]);

  useEffect(() => {
    if (loading) return;

    let filtered = countries;
    if (region !== 'All') {
      filtered = filtered.filter(country => country.region === region);
    }
    if (language !== 'All') {
      filtered = filtered.filter(country => Object.values(country.languages || {}).includes(language));
    }
    if (independent !== 'All Status') {
      filtered = filtered.filter(country => (independent === 'Independent' ? country.independent : !country.independent));
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
            {regions.map((reg, index) => (
              <option key={index} value={reg}>{reg}</option>
            ))}
          </select>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border border-gray-300 rounded ml-4"
          >
            {languages.map((lang, index) => (
              <option key={index} value={lang}>{lang}</option>
            ))}
          </select>
          
          <select
            value={independent}
            onChange={(e) => setIndependent(e.target.value)}
            className="p-2 border border-gray-300 rounded ml-4"
          >
            {independenceStatuses.map((status, index) => (
              <option key={index} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCountries.map(country => (
          <div key={country.cca3} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{country.name.common}</h2>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Language:</strong> {Object.values(country.languages || {}).join(', ')}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
              <Link to={`/country/${country.name.common}`} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default CountryFilter;
