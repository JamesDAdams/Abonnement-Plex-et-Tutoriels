import React from 'react';
import { Check } from 'lucide-react';
const plans = [{
  name: 'Basique',
  price: '5€',
  period: 'par mois',
  features: ['Accès à Plex (Films et Séries)', 'Support par email', '1 utilisateur'],
  highlighted: false
}, {
  name: 'Standard',
  price: '10€',
  period: 'par mois',
  features: ['Accès à Plex (Films et Séries)', 'Accès à Overseerr (Demandes)', 'Accès à Komga (Livres et BD)', 'Support prioritaire', '2 utilisateurs'],
  highlighted: true
}, {
  name: 'Premium',
  price: '15€',
  period: 'par mois',
  features: ['Accès à Plex (Films et Séries)', 'Accès à Overseerr (Demandes)', 'Accès à Komga (Livres et BD)', 'Accès à Nextcloud (Stockage)', 'Accès à Bitwarden (Mots de passe)', 'Support prioritaire 24/7', '5 utilisateurs'],
  highlighted: false
}];
const SubscriptionPlans = () => {
  return <section className="py-16 bg-white" id="abonnements">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nos Formules d'Abonnement
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choisissez la formule qui correspond le mieux à vos besoins et
          profitez immédiatement de nos services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${plan.highlighted ? 'border-2 border-indigo-500 transform scale-105 md:scale-110 z-10' : 'border border-gray-200'}`}>
              <div className={`p-6 ${plan.highlighted ? 'bg-indigo-500 text-white' : 'bg-gray-50 text-gray-800'}`}>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-sm opacity-80">{plan.period}</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => <li key={i} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
                <button className={`w-full py-3 rounded-lg mt-8 font-semibold ${plan.highlighted ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition-colors`}>
                  Sélectionner
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SubscriptionPlans;