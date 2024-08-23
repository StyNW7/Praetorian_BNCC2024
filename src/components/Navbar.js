import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Judul di kiri */}
        <Link to="/" className="text-2xl font-bold">WorldUniversity</Link>

        {/* Menu Toggle untuk mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl z-50 relative">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Link navigasi di ujung kanan */}
        <div className="hidden md:flex items-center ml-auto space-x-4">
          <Link to="/" className="px-4 py-2 hover:bg-blue-700 rounded">Home</Link>
          <Link to="/search" className="px-4 py-2 hover:bg-blue-700 rounded">Country Search</Link>
          <Link to="/filter" className="px-4 py-2 hover:bg-blue-700 rounded">Country Filter</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-blue-700 rounded">About</Link>
        </div>
      </div>

      {/* Sidebar yang muncul saat toggle di mobile */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-blue-600 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 py-6">
          <Link to="/" onClick={toggleMenu} className="text-xl hover:bg-blue-700 rounded px-4 py-2 w-full text-center">Home</Link>
          <Link to="/search" onClick={toggleMenu} className="text-xl hover:bg-blue-700 rounded px-4 py-2 w-full text-center">Country Search</Link>
          <Link to="/filter" onClick={toggleMenu} className="text-xl hover:bg-blue-700 rounded px-4 py-2 w-full text-center">Country Filter</Link>
          <Link to="/about" onClick={toggleMenu} className="text-xl hover:bg-blue-700 rounded px-4 py-2 w-full text-center">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
