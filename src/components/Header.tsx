import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-indigo-700 dark:bg-indigo-900 text-white shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ServeurPlus
        </Link>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />
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
              <div className="absolute left-0 top-full w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/tutoriels/plex" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors">
                  Plex
                </Link>
                <Link to="/tutoriels/overseerr" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors">
                  Overseerr
                </Link>
                <Link to="/tutoriels/komga" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors">
                  Komga
                </Link>
                <Link to="/tutoriels/nextcloud" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors">
                  Nextcloud
                </Link>
                <Link to="/tutoriels/bitwarden" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors">
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
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-indigo-800 dark:bg-indigo-950 px-4 py-2 transition-colors duration-200">
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