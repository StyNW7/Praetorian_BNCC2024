import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Mengimpor ikon dari react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">WorldUniversity</Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className={`md:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="px-4 py-2 hover:bg-blue-700 rounded">Home</Link>
          <Link to="/search" className="px-4 py-2 hover:bg-blue-700 rounded">Country Search</Link>
          <Link to="/filter" className="px-4 py-2 hover:bg-blue-700 rounded">Country Filter</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-blue-700 rounded">About</Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
