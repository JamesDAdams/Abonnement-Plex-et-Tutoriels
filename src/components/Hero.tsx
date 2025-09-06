import React from 'react';
const Hero = () => {
  return <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Votre Serveur Multimédia Personnel
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Accédez à des films, séries, livres et plus encore, le tout dans un
          environnement sécurisé et personnalisé.
        </p>
        <a href="#abonnements" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
          Voir les abonnements
        </a>
      </div>
    </div>;
};
export default Hero;