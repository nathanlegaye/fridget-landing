'use client';

import Image from "next/image";
import ContactForm from "./components/ContactForm";
import ComingSoonModal from "./components/ComingSoonModal";
import CookieConsent from "./components/CookieConsent";
import UmamiAnalytics from "./components/UmamiAnalytics";
import { useState } from "react";
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAppStoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

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
            <button onClick={handleAppStoreClick} className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Télécharger sur l'App Store"
                width={200}
                height={60}
              />
            </button>
          </div>
          
          {/* Bouton de souris Mac animé pour indiquer le scroll */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex flex-col items-center text-gray-400 hover:text-fridget-orange transition-colors duration-300"
            >
                             <div className="w-8 h-12 bg-gray-700 rounded-full border-2 border-gray-600 group-hover:border-fridget-orange transition-colors duration-300 relative overflow-hidden">
                 {/* Animation de la boule de scroll */}
                 <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 group-hover:bg-fridget-orange rounded-full animate-bounce group-hover:animate-ping"></div>
               </div>
              <span className="text-xs mt-2 font-pally opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Scroller
              </span>
            </button>
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
              Fridget est né d&apos;une simple observation : nous avons tous des fonds de placard et de frigo qui finissent à la poubelle. Notre application génère des recettes créatives à partir de vos restes pour transformer le gaspillage en délicieux repas !
            </p>
                            <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-fridget-orange rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-pally">Réduction du gaspillage alimentaire</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-fridget-orange rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-pally">Économies sur vos courses</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-fridget-orange rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-pally">Interface intuitive et moderne</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
          <Image
                src={`/assets/images/screenshots/screen_fav.png?v=${Date.now()}`}
                alt="Screenshot de l&apos;app Fridget"
                width={400}
                height={600}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-pally">
            Choisissez votre plan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16 font-pally">
            Commencez gratuitement et passez au niveau supérieur quand vous voulez
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Gratuit */}
            <div className="bg-gray-700 rounded-2xl p-8 border border-gray-600 relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-pally">Gratuit</h3>
                <p className="text-gray-400 font-pally">Parfait pour essayer</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-white mb-2 font-pally">0€</div>
                <div className="text-gray-400 font-pally">par mois</div>
              </div>
              
              <ul className="space-y-4 mb-8 text-left">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-pally">Génération de 3 recettes par mois</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-pally">Inventaire des ingrédients</span>
                </li>
                <li className="flex items-center text-gray-500">
                  <div className="w-5 h-5 bg-gray-500 rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="font-pally">Support par email</span>
                </li>
                <li className="flex items-center text-gray-500">
                  <div className="w-5 h-5 bg-gray-500 rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="font-pally">Ajout aux favoris</span>
                </li>
                <li className="flex items-center text-gray-500">
                  <div className="w-5 h-5 bg-gray-500 rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="font-pally">Historique des recettes</span>
                </li>
              </ul>
              

            </div>
            
            {/* Plan Premium */}
            <div className="bg-gradient-to-br from-fridget-orange to-orange-600 rounded-2xl p-8 border border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-fridget-orange text-white px-4 py-2 rounded-full text-sm font-semibold font-pally">
                  Recommandé
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-pally">Premium</h3>
                <p className="text-orange-100 font-pally">Accès illimité</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-white mb-2 font-pally">2,99€</div>
                <div className="text-orange-100 font-pally">par mois</div>
              </div>
              
              <ul className="space-y-4 mb-8 text-left">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-fridget-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-pally">Recettes illimitées</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-fridget-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-pally">Toutes les fonctionnalités</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-fridget-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-pally">Ajout aux favoris</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-fridget-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-pally">Historique complet</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-fridget-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-pally">Support prioritaire</span>
                </li>
              </ul>
              

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
            Rejoignez des milliers d&apos;utilisateurs qui ont déjà adopté Fridget
          </p>
          <div className="flex justify-center">
            <button onClick={handleAppStoreClick} className="inline-block hover:opacity-80 transition-opacity">
          <Image
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Télécharger sur l'App Store"
                width={200}
                height={60}
              />
            </button>
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
                Une question ? Une suggestion ? N&apos;hésitez pas à nous écrire !
              </p>
          
                    <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-pally">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-pally">
            Tout ce que vous devez savoir sur Fridget
          </p>
          
          <div className="space-y-4 text-left">
            {/* FAQ Item 1 */}
            <details className="bg-gray-800 rounded-lg border border-gray-700 group overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-700 transition-colors font-pally text-white font-semibold flex items-center justify-between">
                <span>Comment fonctionne Fridget ?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed animate-fadeIn">
                Fridget analyse vos ingrédients disponibles et génère des recettes créatives. 
                Scannez vos placards et frigo, et l'app vous propose des repas délicieux 
                à partir de vos restes.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="bg-gray-800 rounded-lg border border-gray-700 group overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-700 transition-colors font-pally text-white font-semibold flex items-center justify-between">
                <span>Combien de recettes puis-je générer gratuitement ?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed animate-fadeIn">
                Le plan gratuit vous permet de générer 3 recettes par mois. 
                Pour un accès illimité, passez au plan Premium à 3,99€/mois.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="bg-gray-800 rounded-lg border border-gray-700 group overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-700 transition-colors font-pally text-white font-semibold flex items-center justify-between">
                <span>Puis-je sauvegarder mes recettes préférées ?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-in-out" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed animate-fadeIn">
                L'ajout aux favoris est disponible uniquement avec le plan Premium. 
                Vous pourrez ainsi créer votre collection personnelle de recettes.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="bg-gray-800 rounded-lg border border-gray-700 group overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-700 transition-colors font-pally text-white font-semibold flex items-center justify-between">
                <span>Comment l'app réduit-elle le gaspillage alimentaire ?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-in-out" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed animate-fadeIn">
                En vous proposant des recettes basées sur vos ingrédients disponibles, 
                Fridget vous aide à utiliser vos restes et éviter qu'ils finissent à la poubelle. 
                L'app optimise l'utilisation de vos stocks existants.
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="bg-gray-800 rounded-lg border border-gray-700 group overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-700 transition-colors font-pally text-white font-semibold flex items-center justify-between">
                <span>Quand l'application sera-t-elle disponible ?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-in-out" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed animate-fadeIn">
                L'application Fridget arrive très bientôt ! Inscrivez-vous à notre liste de notification 
                pour être parmi les premiers informés de sa sortie et bénéficier d'avantages exclusifs.
              </div>
            </details>
          </div>
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
                <li><a href="#features" className="hover:text-white transition-colors font-pally">Fonctionnalités</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors font-pally">Tarifs</a></li>
                <li><a href="#about" className="hover:text-white transition-colors font-pally">À propos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors font-pally">Contact</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors font-pally">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Légal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors font-pally">Confidentialité</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors font-pally">Conditions d&apos;utilisation</a></li>
                <li><a href="/legal" className="hover:text-white transition-colors font-pally">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-pally">&copy; 2024 Fridget. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Modale "Bientôt disponible" */}
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Consentement aux cookies */}
      <CookieConsent />
      
      {/* Umami Analytics - Chargé seulement avec consentement */}
      <UmamiAnalytics 
        dataWebsiteId="4a952b4c-1085-45c4-b9bb-571568ea623e" 
        src="https://cloud.umami.is/script.js" 
      />
    </div>
  );
}
