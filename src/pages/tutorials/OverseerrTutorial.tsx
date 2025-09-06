import React from 'react';
import TutorialLayout from '../../components/TutorialLayout';
import { Search } from 'lucide-react';
const OverseerrTutorial = () => {
  return <TutorialLayout title="Comment utiliser Overseerr" description="Guide pour demander de nouveaux films et séries à ajouter à la bibliothèque" icon={<Search size={24} />} color="bg-blue-500">
      <div className="prose max-w-none">
        <h2>Qu'est-ce qu'Overseerr ?</h2>
        <p>
          Overseerr est une application qui vous permet de demander l'ajout de
          nouveaux films et séries TV à notre bibliothèque Plex. Si vous ne
          trouvez pas un film ou une série que vous souhaitez regarder, vous
          pouvez utiliser Overseerr pour en faire la demande.
        </p>
        <h2 className="mt-8">Accéder à Overseerr</h2>
        <p>
          Pour accéder à Overseerr, utilisez l'adresse URL que nous vous avons
          fournie lors de votre inscription (généralement{' '}
          <span className="font-mono text-sm bg-gray-100 p-1 rounded">
            https://requests.serveurplus.fr
          </span>{' '}
          ou similaire).
        </p>
        <h3>Première connexion</h3>
        <ol>
          <li>
            <strong>Connexion avec Plex</strong> - Lors de votre première
            visite, cliquez sur "Se connecter avec Plex" et utilisez les mêmes
            identifiants que pour votre compte Plex.
          </li>
          <li>
            <strong>Autorisation</strong> - Vous devrez peut-être autoriser
            Overseerr à accéder à votre compte Plex. Suivez les instructions à
            l'écran.
          </li>
        </ol>
        <h2 className="mt-8">Faire une demande de film ou série</h2>
        <h3>1. Rechercher un contenu</h3>
        <ol>
          <li>Utilisez la barre de recherche en haut de l'interface</li>
          <li>Tapez le titre du film ou de la série que vous souhaitez</li>
          <li>Les résultats s'afficheront au fur et à mesure que vous tapez</li>
        </ol>
        <h3 className="mt-4">2. Demander un film</h3>
        <ol>
          <li>Cliquez sur l'affiche du film dans les résultats de recherche</li>
          <li>
            Sur la page de détails du film, cliquez sur le bouton "Demander"
          </li>
          <li>
            Sélectionnez la qualité souhaitée (si l'option est disponible)
          </li>
          <li>
            Ajoutez éventuellement un commentaire pour justifier votre demande
          </li>
          <li>Cliquez sur "Soumettre la demande"</li>
        </ol>
        <h3 className="mt-4">3. Demander une série</h3>
        <ol>
          <li>
            Cliquez sur l'affiche de la série dans les résultats de recherche
          </li>
          <li>Sur la page de détails, cliquez sur "Demander"</li>
          <li>
            Vous pouvez choisir de demander :
            <ul>
              <li>Toute la série</li>
              <li>Des saisons spécifiques</li>
              <li>Des épisodes spécifiques</li>
            </ul>
          </li>
          <li>
            Sélectionnez la qualité souhaitée (si l'option est disponible)
          </li>
          <li>Ajoutez éventuellement un commentaire</li>
          <li>Cliquez sur "Soumettre la demande"</li>
        </ol>
        <h2 className="mt-8">Suivre vos demandes</h2>
        <p>Vous pouvez suivre l'état de vos demandes à tout moment :</p>
        <ol>
          <li>Cliquez sur votre nom d'utilisateur en haut à droite</li>
          <li>Sélectionnez "Mes demandes"</li>
          <li>
            Vous verrez toutes vos demandes avec leur statut actuel :
            <ul>
              <li>
                <span className="text-yellow-500 font-semibold">
                  En attente
                </span>{' '}
                - La demande est en cours d'examen
              </li>
              <li>
                <span className="text-blue-500 font-semibold">Approuvée</span> -
                La demande a été acceptée et sera ajoutée
              </li>
              <li>
                <span className="text-green-500 font-semibold">Disponible</span>{' '}
                - Le contenu est maintenant disponible sur Plex
              </li>
              <li>
                <span className="text-red-500 font-semibold">Refusée</span> - La
                demande n'a pas pu être satisfaite (avec motif)
              </li>
            </ul>
          </li>
        </ol>
        <h2 className="mt-8">Bonnes pratiques</h2>
        <ul>
          <li>
            <strong>Vérifiez d'abord</strong> - Avant de faire une demande,
            assurez-vous que le contenu n'est pas déjà disponible sur Plex.
          </li>
          <li>
            <strong>Soyez patient</strong> - L'ajout de nouveaux contenus peut
            prendre du temps selon la disponibilité et la taille du fichier.
          </li>
          <li>
            <strong>Limitez vos demandes</strong> - Pour assurer un service
            équitable pour tous les utilisateurs, essayez de limiter vos
            demandes à un nombre raisonnable par semaine.
          </li>
        </ul>
        <h2 className="mt-8">Besoin d'aide ?</h2>
        <p>
          Si vous rencontrez des problèmes avec Overseerr ou si vous avez des
          questions sur vos demandes, contactez-nous à support@serveurplus.fr.
        </p>
      </div>
    </TutorialLayout>;
};
export default OverseerrTutorial;