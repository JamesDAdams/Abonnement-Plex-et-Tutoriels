import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ServeurPlus
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-indigo-200 transition-colors">
            Accueil
          </Link>
          <div className="relative group">
            <button className="hover:text-indigo-200 transition-colors">
              Tutoriels
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <Link to="/tutoriels/plex" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
                Plex
              </Link>
              <Link to="/tutoriels/overseerr" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
                Overseerr
              </Link>
              <Link to="/tutoriels/komga" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
                Komga
              </Link>
              <Link to="/tutoriels/nextcloud" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
                Nextcloud
              </Link>
              <Link to="/tutoriels/bitwarden" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
                Bitwarden
              </Link>
            </div>
          </div>
          <a href="#abonnements" className="hover:text-indigo-200 transition-colors">
            Abonnements
          </a>
          <a href="#contact" className="hover:text-indigo-200 transition-colors">
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-indigo-800 px-4 py-2">
          <div className="flex flex-col space-y-3 pb-3">
            <Link to="/" className="hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
            <div className="space-y-1 pl-4">
              <p className="font-semibold">Tutoriels:</p>
              <Link to="/tutoriels/plex" className="block hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Plex
              </Link>
              <Link to="/tutoriels/overseerr" className="block hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Overseerr
              </Link>
              <Link to="/tutoriels/komga" className="block hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Komga
              </Link>
              <Link to="/tutoriels/nextcloud" className="block hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Nextcloud
              </Link>
              <Link to="/tutoriels/bitwarden" className="block hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Bitwarden
              </Link>
            </div>
            <a href="#abonnements" className="hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Abonnements
            </a>
            <a href="#contact" className="hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </nav>}
    </header>;
};
export default Header;