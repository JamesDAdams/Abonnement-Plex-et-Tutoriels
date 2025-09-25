import React from 'react';
import { Check, Info } from 'lucide-react';
const SubscriptionPlans = () => {
  return <section className="py-16 bg-gray-900 text-white transition-colors duration-200" id="abonnements">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">
          Sélectionnez votre abonnement
        </h2>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          {/* Plans Header */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <div className="bg-orange-600 text-white p-4 rounded-md text-center">
                <h3 className="text-xl font-bold">ESSENTIEL</h3>
              </div>
              <div className="text-center mt-4">
                <p className="text-xl font-bold">10€/mois</p>
                <p className="text-sm text-orange-500">Économisez 20 €*</p>
              </div>
              <p className="text-center mt-2 text-lg">100 € / an</p>
            </div>
            <div className="col-span-1">
              <div className="bg-orange-600 text-white p-4 rounded-md text-center">
                <h3 className="text-xl font-bold">STANDARD</h3>
              </div>
              <div className="text-center mt-4">
                <p className="text-xl font-bold">15€/mois</p>
                <p className="text-sm text-orange-500">Économisez 30 €*</p>
              </div>
              <p className="text-center mt-2 text-lg">150 € / an</p>
            </div>
            <div className="col-span-1">
              <div className="bg-orange-600 text-white p-4 rounded-md text-center">
                <h3 className="text-xl font-bold">PREMIUM</h3>
              </div>
              <div className="text-center mt-4">
                <p className="text-xl font-bold">20€/mois</p>
                <p className="text-sm text-orange-500">Économisez 40 €*</p>
              </div>
              <p className="text-center mt-2 text-lg">200 € / an</p>
            </div>
          </div>
          {/* Features Table */}
          <div className="border-t border-gray-800">
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Plex <br/>(Films et Séries)
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Qualité vidéo jusqu'à
              </div>
              <div className="col-span-1 text-center">1080p Full HD HDR</div>
              <div className="col-span-1 text-center">1080p Full HD HDR</div>
              <div className="col-span-1 text-center">1080p Full HD HDR</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Prise en charge de Dolby Atmos et Dolby Vision
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Komga <br/>(Livres, Manga, B.D, Comics)
              </div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Bitwarden <br/>(gestionnaire de mdp)
              </div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Romm <br/>(Jeux N64, NES...)
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Nextcloud <br/>(Stockage)
                                <span className="relative group ml-2">
                  <Info size={16} className="text-gray-400 cursor-pointer" />
                  <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-gray-800 text-xl text-gray-200 rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                    Nextcloud est une solution de stockage en ligne similaire à Google Drive
                  </span>
                </span>
              </div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />{' '}
                1000Go
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium flex items-center">
                Nombre de demandes de films par jour
                <span className="relative group ml-2">
                  <Info size={16} className="text-gray-400 cursor-pointer" />
                  <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-gray-800 text-xl text-gray-200 rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                    Nombre maximum de films que vous pouvez demander chaque jour via la plateforme.
                  </span>
                </span>
              </div>
              <div className="col-span-1 text-center">1</div>
              <div className="col-span-1 text-center">5</div>
              <div className="col-span-1 text-center">10</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Nombre de demandes de séries par jour
                  <span className="relative group ml-2">
                  <Info size={16} className="text-gray-400 cursor-pointer" />
                  <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-gray-800 text-xl text-gray-200 rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                    Nombre maximum de séries que vous pouvez demander chaque jour via la plateforme.
                  </span>
                </span>
              </div>
              <div className="col-span-1 text-center">1</div>
              <div className="col-span-1 text-center">3</div>
              <div className="col-span-1 text-center">5</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Utilisateurs simultanés
              </div>
              <div className="col-span-1 text-center">1</div>
              <div className="col-span-1 text-center">2</div>
              <div className="col-span-1 text-center">2</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Nombres d'appareils autorisés pour le téléchargement
              </div>
              <div className="col-span-1 text-center">Illimités</div>
              <div className="col-span-1 text-center">Illimités</div>
              <div className="col-span-1 text-center">Illimités</div>
            </div>
          </div>
          {/* Buttons */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-md transition-colors">
                Souscrire
              </button>
            </div>
            <div className="col-span-1">
              <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-md transition-colors">
                Souscrire
              </button>
            </div>
            <div className="col-span-1">
              <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-md transition-colors">
                Souscrire
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6 text-center">
            *Économies calculées sur la base du tarif mensuel standard
          </p>
        </div>
      </div>
    </section>;
};
export default SubscriptionPlans;