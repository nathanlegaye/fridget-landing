export default function Legal() {
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
        <h1 className="text-4xl font-bold mb-8 font-pally">Mentions légales</h1>
        
        <div className="space-y-8 text-gray-300 font-pally leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Éditeur du site</h2>
            <div className="space-y-2">
              <p><strong>Nom :</strong> Fridget</p>
              <p><strong>Adresse :</strong> 32 avenue Montaigne, 49100 Angers</p>
              <p><strong>Email :</strong> <a href="mailto:contact.fridget@gmail.com" className="text-fridget-orange hover:underline">contact.fridget@gmail.com</a></p>
              <p><strong>Directeur de publication :</strong> Nathan LEGAYE</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Hébergement</h2>
            <div className="space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-fridget-orange hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et internationale 
              sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
              reproduction sont réservés, y compris pour les documents téléchargeables 
              et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique 
              quel qu'il soit est formellement interdite sauf autorisation expresse 
              du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Responsabilité</h2>
            <p className="mb-4">
              Les informations contenues sur ce site sont aussi précises que possible 
              et le site est périodiquement remis à jour, mais peut toutefois contenir 
              des inexactitudes, des omissions ou des lacunes.
            </p>
            <p>
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
              merci de bien vouloir le signaler par email à l'adresse <a href="mailto:contact.fridget@gmail.com" className="text-fridget-orange hover:underline">contact.fridget@gmail.com</a>, 
              en décrivant le problème de la manière la plus précise possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Liens hypertextes</h2>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site web en 
              direction d'autres ressources présentes sur le réseau Internet ne sauraient 
              engager la responsabilité de Fridget.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies</h2>
            <p className="mb-4">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et 
              analyser le trafic. Les cookies sont de petits fichiers texte stockés 
              sur votre appareil.
            </p>
            <p>
              Vous pouvez contrôler et/ou supprimer des cookies comme vous le souhaitez. 
              Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur 
              et paramétrer la plupart des navigateurs pour les empêcher d'en enregistrer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Données personnelles</h2>
            <p>
              Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, 
              vous disposez d'un droit d'accès, de modification et de suppression des 
              données vous concernant. Pour exercer ce droit, adressez-vous à : 
              <a href="mailto:contact.fridget@gmail.com" className="text-fridget-orange hover:underline"> contact.fridget@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Droit applicable</h2>
            <p>
              Tout litige en relation avec l'utilisation du site Fridget est soumis 
              au droit français. En dehors des cas où la loi ne le permet pas, 
              il est fait attribution exclusive de juridiction aux tribunaux compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, 
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
