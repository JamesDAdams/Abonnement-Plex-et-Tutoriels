import React from 'react';
import TutorialLayout from '../../components/TutorialLayout';
import { Cloud } from 'lucide-react';
const NextcloudTutorial = () => {
  return <TutorialLayout title="Comment utiliser Nextcloud" description="Guide pour stocker, synchroniser et partager vos fichiers en toute sécurité" icon={<Cloud size={24} />} color="bg-purple-500">
      <div className="prose max-w-none">
        <h2>Qu'est-ce que Nextcloud ?</h2>
        <p>
          Nextcloud est une plateforme de stockage et de synchronisation de
          fichiers sécurisée, similaire à Dropbox ou Google Drive, mais avec un
          contrôle total sur vos données. Vous pouvez l'utiliser pour stocker,
          synchroniser et partager vos fichiers, contacts, calendriers et plus
          encore.
        </p>
        <h2 className="mt-8">Accéder à Nextcloud</h2>
        <p>
          Pour accéder à votre espace Nextcloud, utilisez l'adresse URL que nous
          vous avons fournie lors de votre inscription (généralement{' '}
          <span className="font-mono text-sm bg-gray-100 p-1 rounded">
            https://cloud.JamesServer.fr
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
            nous vous recommandons de changer votre mot de passe temporaire dans
            les paramètres.
          </li>
        </ol>
        <h2 className="mt-8">Interface de Nextcloud</h2>
        <h3>1. Vue d'ensemble</h3>
        <p>
          Après vous être connecté, vous verrez le tableau de bord Nextcloud
          avec différentes applications :
        </p>
        <ul>
          <li>
            <strong>Fichiers</strong> - Pour gérer vos fichiers et dossiers
          </li>
          <li>
            <strong>Photos</strong> - Pour visualiser et organiser vos photos
          </li>
          <li>
            <strong>Contacts</strong> - Pour gérer vos contacts
          </li>
          <li>
            <strong>Calendrier</strong> - Pour gérer vos événements et
            rendez-vous
          </li>
          <li>
            <strong>Notes</strong> - Pour prendre des notes rapides
          </li>
          <li>
            Et d'autres applications selon la configuration de notre serveur
          </li>
        </ul>
        <h3 className="mt-4">2. Application Fichiers</h3>
        <p>
          L'application Fichiers est l'outil principal pour gérer vos documents
          :
        </p>
        <ul>
          <li>
            <strong>Navigation</strong> - Menu de gauche pour naviguer entre les
            dossiers
          </li>
          <li>
            <strong>Zone principale</strong> - Affiche le contenu du dossier
            actuel
          </li>
          <li>
            <strong>Barre d'actions</strong> - En haut, pour créer de nouveaux
            fichiers/dossiers
          </li>
          <li>
            <strong>Menu contextuel</strong> - Clic droit sur un élément pour
            voir les options
          </li>
        </ul>
        <h2 className="mt-8">Utilisation de base</h2>
        <h3>1. Gestion des fichiers</h3>
        <p>Voici les opérations de base que vous pouvez effectuer :</p>
        <ul>
          <li>
            <strong>Téléverser des fichiers</strong> - Cliquez sur le bouton "+"
            en haut ou glissez-déposez des fichiers dans la fenêtre
          </li>
          <li>
            <strong>Créer un dossier</strong> - Cliquez sur le bouton "+" puis
            "Nouveau dossier"
          </li>
          <li>
            <strong>Télécharger des fichiers</strong> - Cliquez sur les trois
            points à côté d'un fichier puis "Télécharger"
          </li>
          <li>
            <strong>Déplacer/Copier</strong> - Sélectionnez un fichier, puis
            utilisez les options "Déplacer ou copier" du menu
          </li>
          <li>
            <strong>Supprimer</strong> - Sélectionnez un fichier et cliquez sur
            l'icône de corbeille
          </li>
        </ul>
        <h3 className="mt-4">2. Partage de fichiers</h3>
        <ol>
          <li>
            Cliquez sur l'icône de partage à côté du fichier ou dossier que vous
            souhaitez partager
          </li>
          <li>
            Vous pouvez partager de différentes façons :
            <ul>
              <li>
                <strong>Avec des utilisateurs</strong> - Entrez le nom d'un
                autre utilisateur du serveur
              </li>
              <li>
                <strong>Par lien</strong> - Créez un lien public que vous pouvez
                envoyer à n'importe qui
              </li>
              <li>
                <strong>Protection par mot de passe</strong> - Ajoutez un mot de
                passe au lien pour plus de sécurité
              </li>
              <li>
                <strong>Date d'expiration</strong> - Définissez une date à
                laquelle le partage expirera automatiquement
              </li>
            </ul>
          </li>
        </ol>
        <h2 className="mt-8">Synchronisation avec vos appareils</h2>
        <h3>1. Applications de bureau</h3>
        <p>
          Pour synchroniser automatiquement vos fichiers avec votre ordinateur :
        </p>
        <ol>
          <li>
            Téléchargez le client Nextcloud pour votre système d'exploitation :
            <ul>
              <li>
                <a href="https://nextcloud.com/install/#install-clients" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  Windows, macOS ou Linux
                </a>
              </li>
            </ul>
          </li>
          <li>Installez et lancez l'application</li>
          <li>
            Entrez l'adresse de notre serveur Nextcloud
            (https://cloud.JamesServer.fr)
          </li>
          <li>Connectez-vous avec vos identifiants</li>
          <li>Choisissez les dossiers à synchroniser</li>
        </ol>
        <p>
          Une fois configuré, le client créera un dossier sur votre ordinateur
          qui sera automatiquement synchronisé avec votre compte Nextcloud. Tous
          les fichiers que vous placerez dans ce dossier seront automatiquement
          téléversés sur le serveur.
        </p>
        <h3 className="mt-4">2. Applications mobiles</h3>
        <p>Pour accéder à vos fichiers sur mobile :</p>
        <ol>
          <li>
            Téléchargez l'application Nextcloud pour{' '}
            <a href="https://play.google.com/store/apps/details?id=com.nextcloud.client" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
              Android
            </a>{' '}
            ou{' '}
            <a href="https://apps.apple.com/us/app/nextcloud/id1125420102" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
              iOS
            </a>
          </li>
          <li>Ouvrez l'application et entrez l'adresse de notre serveur</li>
          <li>Connectez-vous avec vos identifiants</li>
          <li>
            Vous pouvez maintenant :
            <ul>
              <li>Parcourir vos fichiers</li>
              <li>Télécharger des fichiers pour un accès hors ligne</li>
              <li>Téléverser des photos et vidéos automatiquement</li>
              <li>Partager des fichiers</li>
            </ul>
          </li>
        </ol>
        <h2 className="mt-8">Fonctionnalités avancées</h2>
        <h3>1. Édition collaborative</h3>
        <p>Nextcloud permet l'édition collaborative de documents :</p>
        <ul>
          <li>
            Cliquez sur un document texte, une feuille de calcul ou une
            présentation
          </li>
          <li>Le document s'ouvrira dans l'éditeur en ligne</li>
          <li>
            Partagez le document avec d'autres utilisateurs pour collaborer en
            temps réel
          </li>
        </ul>
        <h3 className="mt-4">2. Galerie photos</h3>
        <p>L'application Photos vous permet de :</p>
        <ul>
          <li>Visualiser toutes vos images dans une interface type galerie</li>
          <li>Organiser vos photos par date</li>
          <li>Créer des albums</li>
          <li>Partager des albums entiers avec d'autres personnes</li>
        </ul>
        <h3 className="mt-4">3. Calendrier et contacts</h3>
        <p>Vous pouvez synchroniser vos contacts et calendriers avec :</p>
        <ul>
          <li>Outlook</li>
          <li>Apple Calendar et Contacts</li>
          <li>Google Calendar et Contacts</li>
          <li>Thunderbird</li>
          <li>Et d'autres applications compatibles avec CalDAV/CardDAV</li>
        </ul>
        <h2 className="mt-8">Conseils de sécurité</h2>
        <ul>
          <li>
            <strong>Utilisez un mot de passe fort</strong> - Assurez-vous que
            votre mot de passe est unique et complexe
          </li>
          <li>
            <strong>Activez l'authentification à deux facteurs</strong> - Dans
            les paramètres de sécurité de votre compte
          </li>
          <li>
            <strong>Vérifiez régulièrement les partages actifs</strong> - Pour
            vous assurer que vous ne partagez pas accidentellement des données
            sensibles
          </li>
          <li>
            <strong>Déconnectez-vous</strong> - Particulièrement sur les
            ordinateurs partagés ou publics
          </li>
        </ul>
        <h2 className="mt-8">Besoin d'aide ?</h2>
        <p>
          Si vous rencontrez des problèmes avec Nextcloud ou si vous avez des
          questions sur l'utilisation du service, n'hésitez pas à nous contacter
          à support@JamesServer.fr.
        </p>
      </div>
    </TutorialLayout>;
};
export default NextcloudTutorial;