import React, { useState } from 'react';
import { useCountry } from '../contexts/CountryContext';
import { Link } from 'react-router-dom';
import LoadingSkeleton from './LoadingSkeleton';

const CountrySearch = () => {
  const { countries, loading } = useCountry();
  const [query, setQuery] = useState('');

  if (loading) {
    return <LoadingSkeleton />;
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 pb-20 min-h-screen">
      <input
        type="text"
        placeholder="Search countries..."
        className="p-2 border border-gray-300 rounded w-full mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredCountries.length === 0 ? (
        <p className="text-center text-lg text-red-500">No countries found matching your query.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries.map(country => (
            <div key={country.cca3} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold">{country.name.common}</h2>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Language:</strong> {Object.values(country.languages || {}).join(', ')}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Country Area:</strong> {country.area.toLocaleString()} km²</p>
                <Link to={`/country/${country.name.common}`} className="text-blue-500 hover:underline">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySearch;
