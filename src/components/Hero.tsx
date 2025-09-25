import React from 'react';
const Hero = () => {
  return <div className="bg-gradient-to-r from-gray-900 to-black text-white py-24 border-b border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
          Votre Serveur Multimédia Personnel
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
          Accédez à des films, séries, livres et plus encore, le tout dans un
          environnement sécurisé et personnalisé.
        </p>
        <a href="#abonnements" className="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-orange-500 transition-colors shadow-lg">
          Voir les abonnements
        </a>
      </div>
    </div>;
};
export default Hero;