import React from 'react';
import TutorialLayout from '../../components/TutorialLayout';
import { Lock } from 'lucide-react';
const BitwardenTutorial = () => {
  return <TutorialLayout title="Comment utiliser Bitwarden" description="Guide pour gérer vos mots de passe en toute sécurité" icon={<Lock size={24} />} color="bg-red-500">
      <div className="prose max-w-none">
        <h2>Qu'est-ce que Bitwarden ?</h2>
        <p>
          Bitwarden est un gestionnaire de mots de passe open source qui vous
          permet de stocker, générer et gérer vos mots de passe en toute
          sécurité. Avec notre service hébergé, vous bénéficiez d'une instance
          Bitwarden privée et sécurisée.
        </p>
        <h2 className="mt-8">
          Pourquoi utiliser un gestionnaire de mots de passe ?
        </h2>
        <ul>
          <li>
            <strong>Sécurité</strong> - Utilisez des mots de passe uniques et
            complexes pour chaque site
          </li>
          <li>
            <strong>Simplicité</strong> - Ne mémorisez qu'un seul mot de passe
            maître
          </li>
          <li>
            <strong>Efficacité</strong> - Remplissage automatique des
            formulaires de connexion
          </li>
          <li>
            <strong>Protection</strong> - Vos données sont chiffrées de bout en
            bout
          </li>
        </ul>
        <h2 className="mt-8">Premiers pas avec Bitwarden</h2>
        <h3>1. Créer un compte</h3>
        <ol>
          <li>
            Accédez à notre instance Bitwarden à l'adresse URL fournie
            (généralement{' '}
            <span className="font-mono text-sm bg-gray-100 p-1 rounded">
              https://vault.serveurplus.fr
            </span>
            )
          </li>
          <li>Cliquez sur "Créer un compte"</li>
          <li>
            Remplissez le formulaire avec :
            <ul>
              <li>Votre adresse e-mail</li>
              <li>Un nom d'utilisateur</li>
              <li>Un mot de passe maître fort</li>
            </ul>
          </li>
          <li>
            <div className="bg-yellow-100 p-4 rounded-lg my-4">
              <p className="font-bold text-yellow-800">⚠️ Important</p>
              <p className="text-yellow-800">
                Votre mot de passe maître est la clé de votre coffre-fort.
                Mémorisez-le soigneusement car il n'existe aucun moyen de le
                récupérer s'il est perdu !
              </p>
            </div>
          </li>
        </ol>
        <h3 className="mt-4">2. Installer les extensions et applications</h3>
        <p>
          Pour tirer le meilleur parti de Bitwarden, installez-le sur tous vos
          appareils :
        </p>
        <ul>
          <li>
            <strong>Extensions de navigateur</strong> :
            <ul>
              <li>
                <a href="https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  Chrome
                </a>
              </li>
              <li>
                <a href="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  Firefox
                </a>
              </li>
              <li>
                <a href="https://microsoftedge.microsoft.com/addons/detail/bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  Edge
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/bitwarden/id1352778147" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  Safari
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Applications mobiles</strong> :
            <ul>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.x8bit.bitwarden" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  Android
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  iOS
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Applications de bureau</strong> :
            <ul>
              <li>
                <a href="https://bitwarden.com/download/" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                  Windows, macOS, Linux
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="mt-4">3. Configuration des applications</h3>
        <p>
          Lors de la première utilisation d'une application ou extension
          Bitwarden, vous devrez configurer l'URL de notre serveur :
        </p>
        <ol>
          <li>Ouvrez l'application ou l'extension</li>
          <li>
            Avant de vous connecter, recherchez l'option "Serveur auto-hébergé"
            ou "Paramètres du serveur"
          </li>
          <li>
            Entrez l'URL de notre serveur :{' '}
            <span className="font-mono text-sm bg-gray-100 p-1 rounded">
              https://vault.serveurplus.fr
            </span>
          </li>
          <li>Connectez-vous ensuite avec vos identifiants</li>
        </ol>
        <h2 className="mt-8">Utilisation quotidienne</h2>
        <h3>1. Ajouter des mots de passe</h3>
        <p>Vous pouvez ajouter des mots de passe de plusieurs façons :</p>
        <ol>
          <li>
            <strong>Manuellement</strong> :
            <ul>
              <li>Cliquez sur le bouton "+" dans l'interface</li>
              <li>Sélectionnez "Identifiant" (ou "Login")</li>
              <li>
                Remplissez les informations : nom, identifiant, mot de passe,
                URL, etc.
              </li>
              <li>Cliquez sur "Enregistrer"</li>
            </ul>
          </li>
          <li>
            <strong>Automatiquement lors de la connexion</strong> :
            <ul>
              <li>
                Lorsque vous vous connectez à un site, l'extension Bitwarden
                détecte la saisie du mot de passe
              </li>
              <li>
                Une fenêtre apparaît pour vous proposer d'enregistrer ces
                informations
              </li>
              <li>
                Cliquez sur "Oui" pour les sauvegarder dans votre coffre-fort
              </li>
            </ul>
          </li>
          <li>
            <strong>Importation</strong> :
            <ul>
              <li>
                Si vous utilisiez déjà un autre gestionnaire de mots de passe,
                vous pouvez importer vos données
              </li>
              <li>
                Dans les paramètres, cherchez l'option "Importer des données"
              </li>
              <li>
                Suivez les instructions pour importer depuis votre ancien
                service
              </li>
            </ul>
          </li>
        </ol>
        <h3 className="mt-4">2. Utiliser vos mots de passe</h3>
        <p>Pour vous connecter à un site web :</p>
        <ol>
          <li>Accédez à la page de connexion du site</li>
          <li>Cliquez sur l'extension Bitwarden dans votre navigateur</li>
          <li>Sélectionnez l'identifiant correspondant au site</li>
          <li>
            Bitwarden remplira automatiquement les champs d'identifiant et de
            mot de passe
          </li>
          <li>
            Alternative : utilisez le raccourci clavier (Ctrl+Shift+L sur
            Windows/Linux, Cmd+Shift+L sur Mac)
          </li>
        </ol>
        <h3 className="mt-4">3. Générer des mots de passe forts</h3>
        <p>Bitwarden inclut un générateur de mots de passe puissant :</p>
        <ol>
          <li>
            Lors de la création d'un compte sur un site, cliquez sur l'extension
            Bitwarden
          </li>
          <li>Sélectionnez "Générateur de mot de passe"</li>
          <li>
            Personnalisez les options selon vos besoins :
            <ul>
              <li>Longueur du mot de passe</li>
              <li>
                Types de caractères (majuscules, minuscules, chiffres, symboles)
              </li>
              <li>Mot de passe ou phrase de passe</li>
            </ul>
          </li>
          <li>Cliquez sur "Copier" pour utiliser le mot de passe généré</li>
          <li>
            Lorsque vous enregistrez votre connexion, ce mot de passe sera
            automatiquement sauvegardé
          </li>
        </ol>
        <h2 className="mt-8">Fonctionnalités avancées</h2>
        <h3>1. Organisation en dossiers</h3>
        <p>Pour mieux organiser vos mots de passe :</p>
        <ol>
          <li>
            Dans l'interface web ou l'application, accédez à "Dossiers" dans le
            menu
          </li>
          <li>Cliquez sur "Nouveau dossier" et donnez-lui un nom</li>
          <li>
            Pour déplacer un identifiant dans un dossier :
            <ul>
              <li>Modifiez l'identifiant</li>
              <li>Sélectionnez le dossier dans le menu déroulant</li>
              <li>Enregistrez les modifications</li>
            </ul>
          </li>
        </ol>
        <h3 className="mt-4">2. Partage sécurisé</h3>
        <p>
          Si vous avez besoin de partager un mot de passe avec quelqu'un de
          façon sécurisée :
        </p>
        <ol>
          <li>Utilisez la fonction "Envoyer" de Bitwarden</li>
          <li>Créez un nouvel envoi avec le mot de passe</li>
          <li>
            Définissez une date d'expiration et éventuellement un mot de passe
            pour l'accès
          </li>
          <li>Partagez le lien généré avec la personne concernée</li>
        </ol>
        <h3 className="mt-4">3. Authentification à deux facteurs (2FA)</h3>
        <p>
          Bitwarden peut également servir d'application d'authentification à
          deux facteurs :
        </p>
        <ol>
          <li>
            Lors de la configuration d'une 2FA sur un site, scannez le code QR
            avec Bitwarden
          </li>
          <li>Enregistrez le code TOTP dans l'entrée correspondante</li>
          <li>Bitwarden générera automatiquement les codes temporaires</li>
        </ol>
        <h2 className="mt-8">Sécurité et bonnes pratiques</h2>
        <ul>
          <li>
            <strong>Mot de passe maître fort</strong> - Utilisez une phrase de
            passe longue et mémorable
          </li>
          <li>
            <strong>Activez l'authentification à deux facteurs</strong> - Pour
            protéger votre coffre-fort Bitwarden
          </li>
          <li>
            <strong>Verrouillez votre coffre-fort</strong> - Configurez le
            verrouillage automatique après une période d'inactivité
          </li>
          <li>
            <strong>Effectuez des sauvegardes</strong> - Exportez régulièrement
            vos données (de façon sécurisée)
          </li>
          <li>
            <strong>Mettez à jour</strong> - Gardez toutes vos applications et
            extensions Bitwarden à jour
          </li>
        </ul>
        <h2 className="mt-8">Besoin d'aide ?</h2>
        <p>
          Si vous rencontrez des problèmes avec Bitwarden ou si vous avez des
          questions sur l'utilisation du service, n'hésitez pas à nous contacter
          à support@serveurplus.fr.
        </p>
      </div>
    </TutorialLayout>;
};
export default BitwardenTutorial;