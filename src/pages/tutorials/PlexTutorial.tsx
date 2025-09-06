import React from 'react';
import TutorialLayout from '../../components/TutorialLayout';
import { Film } from 'lucide-react';
const PlexTutorial = () => {
  return <TutorialLayout title="Comment utiliser Plex" description="Guide complet pour configurer et utiliser Plex pour regarder des films et séries" icon={<Film size={24} />} color="bg-orange-500">
      <div className="prose max-w-none">
        <h2>Qu'est-ce que Plex ?</h2>
        <p>
          Plex est une plateforme de streaming qui vous permet d'accéder à une
          bibliothèque complète de films, séries TV, musique et plus encore.
          Avec notre service, vous n'avez pas besoin de configurer votre propre
          serveur - tout est déjà prêt pour vous.
        </p>
        <h2 className="mt-8">Première connexion</h2>
        <ol>
          <li>
            <strong>Créez un compte Plex</strong> - Avant de commencer,
            rendez-vous sur{' '}
            <a href="https://www.plex.tv/sign-up/" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
              plex.tv
            </a>{' '}
            et créez un compte gratuit si vous n'en avez pas déjà un.
          </li>
          <li>
            <strong>Communiquez votre adresse email</strong> - Envoyez-nous
            l'adresse email associée à votre compte Plex pour que nous puissions
            vous ajouter à notre serveur.
          </li>
          <li>
            <strong>Acceptez l'invitation</strong> - Vous recevrez une
            invitation par email. Cliquez sur le lien pour accepter et vous
            serez connecté à notre serveur Plex.
          </li>
        </ol>
        <h2 className="mt-8">Accéder à Plex</h2>
        <p>Vous pouvez accéder à Plex de plusieurs façons :</p>
        <ul>
          <li>
            <strong>Navigateur web</strong> - Visitez{' '}
            <a href="https://app.plex.tv" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
              app.plex.tv
            </a>{' '}
            et connectez-vous avec votre compte.
          </li>
          <li>
            <strong>Applications</strong> - Téléchargez l'application Plex sur
            votre :
            <ul>
              <li>Smart TV (Samsung, LG, Android TV, etc.)</li>
              <li>Smartphone ou tablette (iOS ou Android)</li>
              <li>Console de jeux (PlayStation, Xbox)</li>
              <li>Box TV (Apple TV, Roku, Fire TV, etc.)</li>
            </ul>
          </li>
        </ul>
        <h2 className="mt-8">Navigation dans Plex</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="font-semibold">
            Remarque : L'interface peut varier légèrement selon l'appareil que
            vous utilisez.
          </p>
        </div>
        <h3>1. Menu principal</h3>
        <p>Dans le menu de gauche, vous trouverez différentes sections :</p>
        <ul>
          <li>
            <strong>Films</strong> - Tous les films disponibles
          </li>
          <li>
            <strong>Séries TV</strong> - Toutes les séries disponibles
          </li>
          <li>
            <strong>Récemment ajouté</strong> - Contenu récemment ajouté au
            serveur
          </li>
        </ul>
        <h3 className="mt-4">2. Recherche</h3>
        <p>
          Utilisez la barre de recherche en haut pour trouver rapidement des
          films ou séries par titre, acteur, réalisateur, etc.
        </p>
        <h3 className="mt-4">3. Lecture d'un contenu</h3>
        <ol>
          <li>
            Cliquez sur l'affiche du film ou de la série que vous souhaitez
            regarder
          </li>
          <li>
            Pour les séries, sélectionnez d'abord la saison, puis l'épisode
          </li>
          <li>Cliquez sur le bouton "Lecture" pour commencer à regarder</li>
        </ol>
        <h2 className="mt-8">Fonctionnalités utiles</h2>
        <h3>Créer des listes de lecture</h3>
        <p>
          Vous pouvez créer des listes personnalisées pour organiser vos films
          et séries préférés :
        </p>
        <ol>
          <li>Survolez un contenu et cliquez sur les trois points (...)</li>
          <li>Sélectionnez "Ajouter à la liste"</li>
          <li>Choisissez une liste existante ou créez-en une nouvelle</li>
        </ol>
        <h3 className="mt-4">Téléchargement pour visionnage hors-ligne</h3>
        <p>
          Sur les applications mobiles, vous pouvez télécharger du contenu pour
          le regarder sans connexion internet :
        </p>
        <ol>
          <li>Ouvrez les détails du contenu que vous souhaitez télécharger</li>
          <li>Appuyez sur l'icône de téléchargement</li>
          <li>
            Une fois téléchargé, le contenu sera disponible dans la section
            "Téléchargements"
          </li>
        </ol>
        <h2 className="mt-8">Besoin d'aide ?</h2>
        <p>
          Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas
          à nous contacter par email à support@JamesServer.fr.
        </p>
      </div>
    </TutorialLayout>;
};
export default PlexTutorial;