import React from 'react';
import ServiceCard from './ServiceCard';
import { Film, Search, Book, Cloud, Lock, Activity, BarChart } from 'lucide-react';
const Services = () => {
  const services = [{
    title: 'Plex',
    description: 'Accédez à une bibliothèque complète de films et séries TV en streaming, organisée et personnalisée pour vous.',
    icon: <Film size={24} />,
    tutorialLink: '/tutoriels/plex',
    color: 'bg-orange-500'
  }, {
    title: 'Overseerr',
    description: "Demandez facilement de nouveaux films et séries à ajouter à la bibliothèque et suivez l'état de vos demandes.",
    icon: <Search size={24} />,
    tutorialLink: '/tutoriels/overseerr',
    color: 'bg-blue-500'
  }, {
    title: 'Komga',
    description: 'Explorez une vaste collection de livres numériques, mangas et comics, lisibles sur tous vos appareils.',
    icon: <Book size={24} />,
    tutorialLink: '/tutoriels/komga',
    color: 'bg-green-500'
  }, {
    title: 'Nextcloud',
    description: "Stockez et synchronisez vos fichiers personnels en toute sécurité, accessibles depuis n'importe quel appareil.",
    icon: <Cloud size={24} />,
    tutorialLink: '/tutoriels/nextcloud',
    color: 'bg-purple-500'
  }, {
    title: 'Bitwarden',
    description: 'Gérez vos mots de passe en toute sécurité avec ce gestionnaire de mots de passe open source et chiffré.',
    icon: <Lock size={24} />,
    tutorialLink: '/tutoriels/bitwarden',
    color: 'bg-red-500'
  }, {
    title: 'Tautulli',
    description: "Consultez l'historique de visionnage et les activités détaillées de votre serveur Plex.",
    icon: <Activity size={24} />,
    tutorialLink: '/tutoriels/tautulli',
    color: 'bg-yellow-500'
  }, {
    title: 'PlexRewind',
    description: "Statistiques et récapitulatifs sur votre utilisation Plex, en un clin d'œil.",
    icon: <BarChart size={24} />,
    tutorialLink: '/tutoriels/plexrewind',
    color: 'bg-indigo-500'
  }];
  return <section className="py-16 bg-black transition-colors duration-200" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-500">
          Nos Services
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Découvrez tous les services inclus dans votre abonnement et comment
          ils peuvent améliorer votre expérience numérique.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} tutorialLink={service.tutorialLink} color={service.color} />)}
        </div>
      </div>
    </section>;
};
export default Services;