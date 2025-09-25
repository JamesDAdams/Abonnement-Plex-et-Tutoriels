import React from 'react';
import { Check } from 'lucide-react';
const SubscriptionPlans = () => {
  return <section className="py-16 bg-gray-900 text-white transition-colors duration-200" id="abonnements">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">
          Sélectionnez votre abonnement
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto text-lg">
          Abonnez-vous jusqu'au 27 septembre et économisez sur un abonnement
          mensuel pendant 3 mois !
        </p>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          {/* Plans Header */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <div className="bg-orange-600 text-white p-4 rounded-md text-center">
                <h3 className="text-xl font-bold">BASIQUE</h3>
              </div>
              <div className="text-center mt-4">
                <p className="text-xl font-bold">5€/mois</p>
                <p className="text-sm text-orange-500">Économisez 3,00 €*</p>
              </div>
              <p className="text-center mt-2 text-lg">59,90 € / an</p>
            </div>
            <div className="col-span-1">
              <div className="bg-orange-600 text-white p-4 rounded-md text-center">
                <h3 className="text-xl font-bold">STANDARD</h3>
              </div>
              <div className="text-center mt-4">
                <p className="text-xl font-bold">10€/mois</p>
                <p className="text-sm text-orange-500">Économisez 4,00 €*</p>
              </div>
              <p className="text-center mt-2 text-lg">99,90 € / an</p>
            </div>
            <div className="col-span-1">
              <div className="bg-orange-600 text-white p-4 rounded-md text-center">
                <h3 className="text-xl font-bold">PREMIUM</h3>
              </div>
              <div className="text-center mt-4">
                <p className="text-xl font-bold">15€/mois</p>
                <p className="text-sm text-orange-500">Économisez 4,00 €*</p>
              </div>
              <p className="text-center mt-2 text-lg">139,90 € / an</p>
            </div>
          </div>
          {/* Features Table */}
          <div className="border-t border-gray-800">
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Plex (Films et Séries)
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
              <div className="col-span-1 text-center">1080p Full HD</div>
              <div className="col-span-1 text-center">1080p Full HD</div>
              <div className="col-span-1 text-center">4K Ultra HD et HDR</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Komga (Livres et BD)
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
                Demandes de films par jour
              </div>
              <div className="col-span-1 text-center">1</div>
              <div className="col-span-1 text-center">5</div>
              <div className="col-span-1 text-center">10</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Demandes de séries par jour
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
              <div className="col-span-1 text-center">3</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">
                Accès à Bitwarden (gestionnaire de mdp)
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
                Accès à Nextcloud (Stockage)
              </div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">
                <Check size={24} className="text-orange-500 mx-auto" />{' '}
                100Go/personne
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">Option Plex 4K</div>
              <div className="col-span-1 text-center">+5€</div>
              <div className="col-span-1 text-center">+5€</div>
              <div className="col-span-1 text-center">Inclus</div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-gray-800">
              <div className="col-span-1 font-medium">Option Nextcloud 1To</div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">
                <div className="w-6 h-0.5 bg-gray-600 mx-auto"></div>
              </div>
              <div className="col-span-1 text-center">+5€</div>
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