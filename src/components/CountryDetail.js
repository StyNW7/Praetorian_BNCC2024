import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSkeleton from './LoadingSkeleton';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        setCountry(response.data[0]);
      })
      .catch(error => console.log(error));
  }, [name]);

  if (!country) return <LoadingSkeleton />;

//   if (loading) {
//     return <LoadingSkeleton />;
//   }

  const { googleMaps, openStreetMaps } = country.maps || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{country.name.common}</h1>
      <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-32 h-20 mb-4" />
      <p><strong>Ibukota:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Populasi:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Luas Wilayah:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Mata Uang:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
      <p><strong>Bahasa:</strong> {Object.values(country.languages).join(', ')}</p>
      
      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Peta Lokasi</h2>
        {googleMaps ? (
          <iframe
            src={googleMaps}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Peta Lokasi Google Maps"
          ></iframe>
        ) : openStreetMaps ? (
          <a href={openStreetMaps} target="_blank" rel="noopener noreferrer">
            Lihat Peta di OpenStreetMap
          </a>
        ) : (
          <p>Peta tidak tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
