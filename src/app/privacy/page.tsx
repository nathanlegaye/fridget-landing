export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-pally">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/assets/images/logo-name.png"
                alt="Fridget Logo"
                width={120}
                height={40}
                className="mr-3"
              />
            </div>
            <a href="/" className="text-gray-300 hover:text-fridget-orange transition-colors font-pally">
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 font-pally">Politique de confidentialité</h1>
        
        <div className="space-y-8 text-gray-300 font-pally leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Collecte des informations</h2>
            <p className="mb-4">
              Fridget collecte les informations suivantes pour vous fournir nos services :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresse email (pour les notifications et la gestion de compte)</li>
              <li>Données d'utilisation de l'application</li>
              <li>Préférences culinaires et historique des recettes</li>
              <li>Données techniques (version de l'app, système d'exploitation)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Utilisation des informations</h2>
            <p className="mb-4">
              Vos informations sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Générer des recettes personnalisées</li>
              <li>Améliorer nos services et algorithmes</li>
              <li>Vous envoyer des notifications importantes</li>
              <li>Assurer la sécurité de votre compte</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies et analytics</h2>
            <p className="mb-4">
              Nous utilisons des cookies et des outils d'analyse pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mémoriser vos préférences</li>
              <li>Analyser l'utilisation de l'application</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Détecter et prévenir les fraudes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Partage des données</h2>
            <p>
              Fridget ne vend, ne loue ni ne partage vos informations personnelles avec des tiers, 
              sauf dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter des obligations légales</li>
              <li>Avec nos prestataires de services (hébergement, emails)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Sécurité des données</h2>
            <p>
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Chiffrement des données en transit et au repos</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Surveillance continue de la sécurité</li>
              <li>Sauvegardes régulières et sécurisées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Vos droits</h2>
            <p className="mb-4">
              Conformément au RGPD, vous avez le droit de :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier vos informations</li>
              <li>Supprimer votre compte et vos données</li>
              <li>Exporter vos données</li>
              <li>Retirer votre consentement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Conservation des données</h2>
            <p>
              Nous conservons vos données tant que votre compte est actif. 
              Après suppression du compte, vos données sont supprimées dans un délai de 30 jours, 
              sauf si une conservation plus longue est requise par la loi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              contactez-nous à : <a href="mailto:contact.fridget@gmail.com" className="text-fridget-orange hover:underline">contact.fridget@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Modifications</h2>
            <p>
              Cette politique peut être mise à jour. Nous vous informerons de tout changement important 
              par email ou via l'application.
            </p>
          </section>

          <div className="text-sm text-gray-500 pt-8 border-t border-gray-700">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
