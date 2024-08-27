import React from 'react';
import { useParams } from 'react-router-dom';
import { useCountry } from '../contexts/CountryContext';
import LoadingSkeleton from './LoadingSkeleton';

const CountryDetail = () => {
  const { name } = useParams();
  const { countries, loading } = useCountry();

  if (loading) return <LoadingSkeleton />;

  const country = countries.find(
    country => country.name.common.toLowerCase() === name.toLowerCase()
  );

  if (!country) return <p>Country not found</p>;

  const { googleMaps, openStreetMaps } = country.maps || {};

  // Harus ganti YOUR_API_KEY menjadi API Key asli (namun saya tidak menampilkan API Key saya (Safety))

  const googleMapsEmbedUrl = googleMaps
    ? `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(country.name.common)}`
    : null;

  return (

    <div className="container mx-auto p-4 pb-20">
      <h1 className="text-4xl font-bold mb-4">{country.name.common}</h1>
      <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-32 h-20 mb-4" />
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Country Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Currency:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
      <p><strong>Language:</strong> {Object.values(country.languages).join(', ')}</p>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Map Location</h2>
        {googleMapsEmbedUrl ? (
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        ) : openStreetMaps ? (
          <a href={openStreetMaps} target="_blank" rel="noopener noreferrer">
            See the map at openStreetMaps
          </a>
        ) : (
          <p>There is no such map</p>
        )}
        
      </div>

    </div>

  );
};

export default CountryDetail;
