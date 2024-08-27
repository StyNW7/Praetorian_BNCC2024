import { Link } from 'react-router-dom';
import { useCountry } from '../contexts/CountryContext';
import LoadingSkeleton from './LoadingSkeleton';

const Home = () => {
  const { countries, loading } = useCountry();
  const limitedCountries = countries.slice(0, 10); // 10 negara teratas saja

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="w-full flex flex-col h-full pb-20 overflow-x-hidden">
      
      {/* Section 1 */}

      <div 
        className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center mb-10 w-full" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgroundFlag.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center w-full">
          WorldUniversity
        </h1>
        <p className="relative text-md sm:text-lg md:text-xl text-white mx-20 sm:mx-12 text-center w-full">
          This platform helps students get detailed information about various countries around the world.
          Here, you can search for country data, view flags, and filter country data based on various criteria.
        </p>
      </div>

      {/* Section 2 */}

      <div className="flex-1 my-10 text-center w-full">
        <h2 className="text-3xl font-semibold mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          <div className="border rounded-lg p-6 shadow-lg w-full max-w-xs mx-4">
            <h3 className="text-xl font-bold mb-2">Searching Country</h3>
            <p>You can search for detailed information by searching for a country.</p>
            <Link to={`/search`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
          <div className="border rounded-lg p-6 shadow-lg w-full max-w-xs mx-4">
            <h3 className="text-xl font-bold mb-2">Filter Country</h3>
            <p>Filter countries by continent, language, or independence status. Easy to use!</p>
            <Link to={`/filter`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
          <div className="border rounded-lg p-6 shadow-lg w-full max-w-xs mx-4">
            <h3 className="text-xl font-bold mb-2">Worldwide Information</h3>
            <p>Our website is always up to date! You can find everything about country here!</p>
            <Link to={`/about`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className='flex-1 my-10 text-center w-full'>
        <h2 className="text-3xl font-semibold mb-6">Popular Countries</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center w-full px-8">
          {limitedCountries.map(country => (
            <div key={country.cca3} className="border rounded-lg p-4 text-center shadow-lg w-full max-w-xs mx-4">
              <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-16 h-10 mx-auto mb-2" />
              <p className="font-semibold">{country.name.common}</p>
              <Link to={`/country/${country.name.common}`} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </div>

    </div>
    
  );
};

export default Home;
