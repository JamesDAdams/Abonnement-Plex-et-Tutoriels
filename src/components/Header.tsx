import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-black text-gray-100 shadow-lg border-b border-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          JamesServer
        </Link>
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} className="text-orange-500" /> : <MenuIcon size={24} className="text-orange-500" />}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-orange-500 transition-colors">
                Tutoriels
              </button>
              <div className="absolute left-0 top-full w-48 bg-gray-900 rounded-md shadow-lg py-1 z-10 hidden group-hover:block border border-gray-800">
                <Link to="/tutoriels/plex" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                  Plex
                </Link>
                <Link to="/tutoriels/overseerr" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                  Overseerr
                </Link>
                <Link to="/tutoriels/komga" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                  Komga
                </Link>
                <Link to="/tutoriels/nextcloud" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                  Nextcloud
                </Link>
                <Link to="/tutoriels/bitwarden" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                  Bitwarden
                </Link>
              </div>
            </div>
            <a href="#abonnements" className="text-gray-300 hover:text-orange-500 transition-colors">
              Abonnements
            </a>
          </nav>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-gray-900 px-4 py-2 transition-colors duration-200">
          <div className="flex flex-col space-y-3 pb-3">
            <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
            <div className="space-y-1 pl-4">
              <p className="font-semibold text-orange-500">Tutoriels:</p>
              <Link to="/tutoriels/plex" className="block text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Plex
              </Link>
              <Link to="/tutoriels/overseerr" className="block text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Overseerr
              </Link>
              <Link to="/tutoriels/komga" className="block text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Komga
              </Link>
              <Link to="/tutoriels/nextcloud" className="block text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Nextcloud
              </Link>
              <Link to="/tutoriels/bitwarden" className="block text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Bitwarden
              </Link>
            </div>
            <a href="#abonnements" className="text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Abonnements
            </a>
          </div>
        </nav>}
    </header>;
};
export default Header;