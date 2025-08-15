import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-pally">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/assets/images/logo-name.png"
                alt="Fridget Logo"
                width={120}
                height={40}
                className="mr-3"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-fridget-orange transition-colors font-pally">Fonctionnalités</a>
              <a href="#about" className="text-gray-300 hover:text-fridget-orange transition-colors font-pally">À propos</a>
              <a href="#contact" className="text-gray-300 hover:text-fridget-orange transition-colors font-pally">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icône fridge-cooker au centre */}
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/images/icons/fridge/fridge-cooker.png"
              alt="Fridget Cooker"
              width={200}
              height={200}
              className="mb-4"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-pally">
            Gérez vos aliments
            <span className="text-fridget-orange block">intelligemment</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-pally">
            Fridget génère des recettes créatives à partir de vos fonds de placard et fonds de frigo. Transformez vos restes en délicieux repas et réduisez le gaspillage alimentaire !
          </p>
          
          {/* Bouton App Store officiel */}
          <div className="flex justify-center">
            <a href="#" className="inline-block">
              <Image
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Télécharger sur l'App Store"
                width={200}
                height={60}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-pally">
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-pally">
              Découvrez comment Fridget révolutionne la cuisine avec vos restes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-700 rounded-lg">
              <div className="flex justify-center mx-auto mb-4">
                <Image
                  src="/assets/images/icons/fridge/fridge-search.png"
                  alt="Recherche"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-pally">Génération de recettes</h3>
              <p className="text-gray-300 font-pally">Fridget analyse vos ingrédients et génère des recettes créatives et délicieuses.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-700 rounded-lg">
              <div className="flex justify-center mx-auto mb-4">
                <Image
                  src="/assets/images/icons/fridge/fridge-ingredient.png"
                  alt="Ingrédients"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-pally">Inventaire intelligent</h3>
              <p className="text-gray-300 font-pally">Scannez vos placards et frigo pour créer un inventaire précis de vos ingrédients disponibles.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-700 rounded-lg">
              <div className="flex justify-center mx-auto mb-4">
                <Image
                  src="/assets/images/icons/fridge/fridge-cooker.png"
                  alt="Recettes"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-pally">Anti-gaspillage</h3>
              <p className="text-gray-300 font-pally">Transformez vos restes et ingrédients oubliés en repas savoureux et originaux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-pally">
                Pourquoi choisir Fridget ?
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-pally">
                Fridget est né d'une simple observation : nous avons tous des fonds de placard et de frigo qui finissent à la poubelle. Notre application génère des recettes créatives à partir de vos restes pour transformer le gaspillage en délicieux repas !
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                                     <div className="w-5 h-5 bg-fridget-orange rounded-full mr-3"></div>
                   <span className="text-gray-200 font-pally">Réduction du gaspillage alimentaire</span>
                 </li>
                 <li className="flex items-center">
                   <div className="w-5 h-5 bg-fridget-orange rounded-full mr-3"></div>
                   <span className="text-gray-200 font-pally">Économies sur vos courses</span>
                 </li>
                 <li className="flex items-center">
                   <div className="w-5 h-5 bg-fridget-orange rounded-full mr-3"></div>
                   <span className="text-gray-200 font-pally">Interface intuitive et moderne</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/screenshots/screen_fav.png"
                alt="Screenshot de l'app Fridget"
                width={400}
                height={600}
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fridget-orange">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-pally">
            Prêt à transformer votre cuisine ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 font-pally">
            Rejoignez des milliers d'utilisateurs qui ont déjà adopté Fridget
          </p>
          <div className="flex justify-center">
            <a href="#" className="inline-block">
              <Image
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Télécharger sur l'App Store"
                width={200}
                height={60}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-pally">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-pally">
            Une question ? Une suggestion ? N'hésitez pas à nous écrire !
          </p>
          
                    <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/logo-name.png"
                  alt="Fridget Logo"
                  width={100}
                  height={32}
                  className="mr-2"
                />
              </div>
              <p className="text-gray-400 font-pally">
                Votre assistant culinaire intelligent pour une cuisine plus responsable.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Produit</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors font-pally">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-pally">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-pally">Tutoriels</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors font-pally">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-pally">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-pally">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Légal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors font-pally">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-pally">Conditions d'utilisation</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-pally">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-pally">&copy; 2024 Fridget. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
