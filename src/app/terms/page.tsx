export default function Terms() {
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
        <h1 className="text-4xl font-bold mb-8 font-pally">Conditions d'utilisation</h1>
        
        <div className="space-y-8 text-gray-300 font-pally leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptation des conditions</h2>
            <p>
              En utilisant l'application Fridget, vous acceptez d'être lié par ces conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description du service</h2>
            <p className="mb-4">
              Fridget est une application mobile qui :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Génère des recettes à partir d'ingrédients disponibles</li>
              <li>Gère l'inventaire de vos placards et frigo</li>
              <li>Propose des suggestions culinaires personnalisées</li>
              <li>Aide à réduire le gaspillage alimentaire</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Plans d'abonnement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Plan Gratuit</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>3 recettes générées par mois</li>
                  <li>Fonctionnalités de base</li>
                  <li>Accès limité aux fonctionnalités premium</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Plan Premium (3,99€/mois)</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Recettes illimitées</li>
                  <li>Accès à toutes les fonctionnalités</li>
                  <li>Sauvegarde des favoris</li>
                  <li>Historique complet</li>
                  <li>Support prioritaire</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Utilisation acceptable</h2>
            <p className="mb-4">
              Vous vous engagez à utiliser Fridget de manière responsable et légale :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ne pas utiliser l'app à des fins illégales</li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas tenter de contourner les limitations techniques</li>
              <li>Ne pas partager votre compte avec d'autres personnes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Propriété intellectuelle</h2>
            <p>
              Fridget et son contenu (algorithmes, interface, design) sont protégés par les droits 
              de propriété intellectuelle. Vous conservez les droits sur vos recettes personnelles 
              et vos données.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation de responsabilité</h2>
            <p className="mb-4">
              Fridget fournit des suggestions de recettes, mais nous ne pouvons garantir :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'exactitude des informations nutritionnelles</li>
              <li>La sécurité des recettes pour les allergies alimentaires</li>
              <li>La disponibilité continue du service</li>
              <li>L'absence d'erreurs techniques</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Résiliation</h2>
            <p>
              Vous pouvez résilier votre compte à tout moment. Pour les abonnements Premium, 
              la résiliation prendra effet à la fin de la période de facturation en cours. 
              Nous nous réservons le droit de suspendre ou résilier votre compte en cas de 
              violation de ces conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Modifications des conditions</h2>
            <p>
              Nous pouvons modifier ces conditions d'utilisation. Les changements importants 
              vous seront notifiés par email ou via l'application. Votre utilisation continue 
              de l'app constitue votre acceptation des nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Droit applicable</h2>
            <p>
              Ces conditions sont régies par le droit français. Tout litige sera soumis 
              à la compétence des tribunaux français.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
            <p>
              Pour toute question concernant ces conditions d'utilisation, 
              contactez-nous à : <a href="mailto:contact.fridget@gmail.com" className="text-fridget-orange hover:underline">contact.fridget@gmail.com</a>
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
