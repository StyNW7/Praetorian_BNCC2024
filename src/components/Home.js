import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch data negara dari API
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data.slice(0, 5)); // Ambil 5 negara populer sebagai contoh
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Selamat Datang di WorldUniversity</h1>
      <p className="text-lg mb-4">
        Platform ini membantu mahasiswa mendapatkan informasi detail tentang berbagai negara di seluruh dunia. 
        Di sini, Anda dapat mencari data negara, melihat bendera, dan memfilter data negara berdasarkan berbagai kriteria.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Negara Populer</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {countries.map(country => (
          <div key={country.cca3} className="border rounded-lg p-4 text-center">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-16 h-10 mx-auto mb-2" />
            <p className="font-semibold">{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
