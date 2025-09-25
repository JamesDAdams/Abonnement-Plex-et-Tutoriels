import React from 'react';
import TutorialLayout from '../../components/TutorialLayout';
import { Book } from 'lucide-react';
const KomgaTutorial = () => {
  return <TutorialLayout title="Comment utiliser Komga" description="Guide pour accéder et lire des livres, mangas et comics numériques" icon={<Book size={24} />} color="bg-green-500">
      <div className="prose max-w-none">
        <h2>Qu'est-ce que Komga ?</h2>
        <p>
          Komga est une plateforme de gestion et de lecture de livres
          numériques, spécialement conçue pour les bandes dessinées, mangas et
          comics. Elle vous permet de parcourir et lire une vaste bibliothèque
          de contenu numérique directement dans votre navigateur.
        </p>
        <h2 className="mt-8">Accéder à Komga</h2>
        <p>
          Pour accéder à Komga, utilisez l'adresse URL que nous vous avons
          fournie lors de votre inscription (généralement{' '}
          <span className="font-mono text-sm bg-gray-100 p-1 rounded">
            https://books.JamesServer.fr
          </span>{' '}
          ou similaire).
        </p>
        <h3>Première connexion</h3>
        <ol>
          <li>
            <strong>Identifiants</strong> - Utilisez les identifiants (nom
            d'utilisateur et mot de passe) que nous vous avons communiqués par
            email.
          </li>
          <li>
            <strong>Mot de passe</strong> - Lors de votre première connexion,
            nous vous recommandons de changer votre mot de passe temporaire.
          </li>
        </ol>
        <h2 className="mt-8">Interface de Komga</h2>
        <h3>1. Page d'accueil</h3>
        <p>La page d'accueil présente plusieurs sections :</p>
        <ul>
          <li>
            <strong>Récemment ajoutés</strong> - Les livres récemment ajoutés à
            la bibliothèque
          </li>
          <li>
            <strong>Continuer la lecture</strong> - Les livres que vous avez
            commencés mais pas terminés
          </li>
          <li>
            <strong>Collections</strong> - Des regroupements thématiques de
            livres
          </li>
        </ul>
        <h3 className="mt-4">2. Navigation</h3>
        <p>Le menu de navigation principal se trouve en haut de l'écran :</p>
        <ul>
          <li>
            <strong>Bibliothèques</strong> - Toutes les bibliothèques
            disponibles (ex: Mangas, Comics, BD françaises)
          </li>
          <li>
            <strong>Séries</strong> - Liste de toutes les séries disponibles
          </li>
          <li>
            <strong>Collections</strong> - Regroupements thématiques
          </li>
          <li>
            <strong>Listes de lecture</strong> - Listes personnalisées que vous
            pouvez créer
          </li>
        </ul>
        <h2 className="mt-8">Parcourir et lire des livres</h2>
        <h3>1. Parcourir les séries</h3>
        <ol>
          <li>Cliquez sur "Séries" dans le menu principal</li>
          <li>
            Utilisez les filtres disponibles pour affiner votre recherche
            (genre, auteur, année, etc.)
          </li>
          <li>Cliquez sur une série pour voir tous les volumes disponibles</li>
        </ol>
        <h3 className="mt-4">2. Lire un livre</h3>
        <ol>
          <li>
            Après avoir sélectionné une série, cliquez sur le volume que vous
            souhaitez lire
          </li>
          <li>Cliquez sur le bouton "Lire" pour ouvrir le lecteur</li>
          <li>
            Dans le lecteur, vous pouvez :
            <ul>
              <li>
                Naviguer avec les flèches du clavier ou en cliquant sur les
                côtés de l'écran
              </li>
              <li>
                Utiliser le menu en bas pour accéder aux options (zoom, mode de
                lecture, etc.)
              </li>
              <li>
                Changer le mode de lecture (page par page, défilement continu,
                etc.)
              </li>
            </ul>
          </li>
        </ol>
        <h3 className="mt-4">3. Modes de lecture</h3>
        <p>
          Komga propose plusieurs modes de lecture adaptés aux différents types
          de contenu :
        </p>
        <ul>
          <li>
            <strong>Page par page (LTR)</strong> - Mode classique de gauche à
            droite, idéal pour les BD occidentales
          </li>
          <li>
            <strong>Page par page (RTL)</strong> - Mode de droite à gauche,
            adapté aux mangas japonais
          </li>
          <li>
            <strong>Défilement vertical</strong> - Idéal pour les webtoons ou la
            lecture sur mobile
          </li>
          <li>
            <strong>Double page</strong> - Affiche deux pages côte à côte comme
            un livre ouvert
          </li>
        </ul>
        <h2 className="mt-8">Fonctionnalités avancées</h2>
        <h3>Créer des listes de lecture</h3>
        <p>
          Vous pouvez créer vos propres listes de lecture pour organiser vos
          lectures :
        </p>
        <ol>
          <li>Cliquez sur "Listes de lecture" dans le menu principal</li>
          <li>Cliquez sur "Créer une liste de lecture"</li>
          <li>Donnez un nom à votre liste</li>
          <li>Ajoutez des livres en utilisant la fonction de recherche</li>
          <li>Enregistrez votre liste</li>
        </ol>
        <h3 className="mt-4">Marque-pages</h3>
        <p>
          Pendant la lecture, vous pouvez créer des marque-pages pour retrouver
          facilement des pages spécifiques :
        </p>
        <ol>
          <li>Pendant la lecture, ouvrez le menu en bas de l'écran</li>
          <li>Cliquez sur l'icône de marque-page</li>
          <li>Donnez un nom à votre marque-page</li>
          <li>
            Vous pourrez retrouver tous vos marque-pages dans la section dédiée
            de chaque livre
          </li>
        </ol>
        <h3 className="mt-4">Applications mobiles compatibles</h3>
        <p>
          Bien que Komga fonctionne parfaitement dans le navigateur de votre
          smartphone, vous pouvez également utiliser ces applications tierces
          compatibles :
        </p>
        <ul>
          <li>
            <strong>Tachiyomi</strong> (Android) - Avec l'extension Komga
          </li>
          <li>
            <strong>Paperback</strong> (iOS) - Avec la source Komga configurée
          </li>
        </ul>
        <h2 className="mt-8">Besoin d'aide ?</h2>
        <p>
          Si vous rencontrez des problèmes avec Komga ou si vous avez des
          questions sur l'utilisation du service, n'hésitez pas à nous contacter
          à support@JamesServer.fr.
        </p>
      </div>
    </TutorialLayout>;
};
export default KomgaTutorial;