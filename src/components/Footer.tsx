import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black text-white pt-10 pb-6 transition-colors duration-200 border-t border-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              JamesServer
            </h3>
            <p className="text-gray-400 mb-4">
              Votre solution complète pour le divertissement numérique et le
              stockage sécurisé.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <a href="#abonnements" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Abonnements
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#tutoriels" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Tutoriels
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-orange-500" />
                <span className="text-gray-400">contact@JamesServer.fr</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange-500" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-orange-500" />
                <span className="text-gray-400">France</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} JamesServer. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;