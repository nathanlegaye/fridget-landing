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
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);

  const handleAppStoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const monthlyPrice = 2.99;
  const annualPrice = 29.99;
  const currentPrice = isAnnualBilling ? annualPrice : monthlyPrice;
  const currentPeriod = isAnnualBilling ? 'par an' : 'par mois';
  const savings = (monthlyPrice * 12) - annualPrice;

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
              <a href="#features" className="text-gray-300 hover:text-fridget-orange transition-colors font-pally cursor-pointer">Fonctionnalités</a>
              <a href="#about" className="text-gray-300 hover:text-fridget-orange transition-colors font-pally cursor-pointer">À propos</a>
              <a href="#contact" className="text-gray-300 hover:text-fridget-orange transition-colors font-pally cursor-pointer">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icône fridge-cooker au centre */}
          <div className="flex justify-center mb-2">
            <Image
              src="/assets/images/icons/fridge/fridge-cooker.png"
              alt="Fridget Cooker"
              width={200}
              height={200}
              className="mb-2"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-pally">
            Gérez vos aliments
            <span className="text-fridget-orange block">intelligemment</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto font-pally">
            Fridget génère des recettes créatives à partir de vos fonds de placard et fonds de frigo. Transformez vos restes en délicieux repas et réduisez le gaspillage alimentaire !
          </p>
          
          {/* Bouton App Store officiel */}
          <div className="flex justify-center">
            <button onClick={handleAppStoreClick} className="inline-block hover:opacity-80 transition-opacity cursor-pointer">
              <Image
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Télécharger sur l'App Store"
                width={200}
                height={60}
              />
            </button>
          </div>
          
          {/* Bouton de souris Mac animé pour indiquer le scroll */}
          <div className="group flex flex-col items-center mt-8 space-y-4">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center text-gray-400 hover:text-fridget-orange transition-colors duration-300 cursor-pointer"
            >
                             <div className="w-8 h-12 bg-gray-700 rounded-full border-2 border-gray-600 group-hover:border-fridget-orange transition-colors duration-300 relative overflow-hidden">
                 {/* Animation de la boule de scroll */}
                 <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 group-hover:bg-fridget-orange rounded-full animate-bounce"></div>
               </div>
            </button>

            {/* Flèche qui oscille de haut en bas */}
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center text-fridget-orange hover:text-orange-400 transition-colors duration-300 pb-0 cursor-pointer"
            >
              <div className="animate-bounce">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </button>

            {/* Texte "Scroller" partagé qui s'affiche au survol de n'importe quel élément */}
            <span className="text-xs font-pally opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Scroller
            </span>
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
                  src="/assets/images/icons/fridge/fridge-open.png"
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
                  src="/assets/images/icons/fridge/fridge-ingredient.png"
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
                src="/assets/images/screenshots/screen_fav.png"
                alt="Screenshot de l'app Fridget"
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
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Plan Gratuit */}
            <div className="bg-gray-700 rounded-2xl p-6 border border-gray-600 relative">
              <div className="text-center mb-4">
                <div className="flex justify-center mb-3">
                  <Image
                    src="/assets/images/icons/fridge/fridge-commis.png"
                    alt="Fridget Commis"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-pally">Commis de cuisine</h3>
                <p className="text-gray-400 font-pally">Parfait pour essayer</p>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-white font-pally flex items-center justify-center">
                  0€<span className="text-lg font-bold ml-1">/mois</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 text-left">
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
            <div className="bg-gradient-to-br from-fridget-orange to-orange-600 rounded-2xl p-6 border border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-fridget-orange text-white px-4 py-2 rounded-xl text-sm font-semibold font-pally">
                  Recommandé
                </span>
              </div>
              
              <div className="text-center mb-4">
                <div className="flex justify-center mb-3">
                  <Image
                    src="/assets/images/icons/fridge/fridge-cooker.png"
                    alt="Fridget Chef"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-pally">Chef étoilé</h3>
                <p className="text-orange-100 font-pally">Accès illimité</p>
              </div>
              
              {/* Toggle de facturation */}
              <div className="flex items-center justify-center mb-4 space-x-4">
                <span className={`text-sm font-pally ${!isAnnualBilling ? 'text-white' : 'text-orange-200'}`}>
                  Mensuel
                </span>
                <button
                  onClick={() => setIsAnnualBilling(!isAnnualBilling)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 cursor-pointer ${
                    isAnnualBilling ? 'bg-white' : 'bg-orange-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-fridget-orange transition-transform ${
                      isAnnualBilling ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-pally ${isAnnualBilling ? 'text-white' : 'text-orange-200'}`}>
                  Annuel
                </span>
              </div>
              
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  {isAnnualBilling && (
                    <div className="text-lg text-orange-200 font-pally line-through">
                      35,88€
                    </div>
                  )}
                  <div className="text-4xl font-bold text-white font-pally flex items-center">
                    {currentPrice.toFixed(2)}€<span className="text-lg font-bold ml-1">/{isAnnualBilling ? 'an' : 'mois'}</span>
                  </div>
                  {isAnnualBilling && (
                    <div className="bg-green-500 text-white text-xs px-2 py-1 font-bold rounded-lg font-pally">
                      -{savings.toFixed(2)}€
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 text-left">
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
            Rejoignez des centaines d&apos;utilisateurs qui ont déjà adopté Fridget
          </p>
          <div className="flex justify-center">
            <button onClick={handleAppStoreClick} className="inline-block hover:opacity-80 transition-opacity cursor-pointer">
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
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-in-out" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed transition-all duration-300 ease-in-out">
                Fridget analyse vos ingrédients disponibles et génère des recettes créatives. 
                Scannez vos placards et frigo, et l'app vous propose des repas délicieux 
                à partir de vos restes.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="bg-gray-800 rounded-lg border border-gray-700 group overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-700 transition-colors font-pally text-white font-semibold flex items-center justify-between">
                <span>Combien de recettes puis-je générer gratuitement ?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-in-out" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed transition-all duration-300 ease-in-out">
                Le plan gratuit vous permet de générer 3 recettes par mois. 
                Pour un accès illimité, passez au plan Premium à 2,99€/mois.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="bg-gray-800 rounded-lg border border-gray-700 group overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-700 transition-colors font-pally text-white font-semibold flex items-center justify-between">
                <span>Puis-je sauvegarder mes recettes préférées ?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 ease-in-out" />
              </summary>
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed transition-all duration-300 ease-in-out">
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
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed transition-all duration-300 ease-in-out">
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
              <div className="px-6 py-4 text-gray-300 font-pally leading-relaxed transition-all duration-300 ease-in-out">
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
              <p className="text-gray-400 font-pally mb-4">
                Votre assistant culinaire intelligent pour une cuisine plus responsable.
              </p>
              <div className="flex justify-start">
                <Image
                  src="/assets/images/icons/fridge/fridge-fav.png"
                  alt="Fridget Favoris"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Produit</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors font-pally cursor-pointer">Fonctionnalités</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors font-pally cursor-pointer">Tarifs</a></li>
                <li><a href="#about" className="hover:text-white transition-colors font-pally cursor-pointer">À propos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors font-pally cursor-pointer">Contact</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors font-pally cursor-pointer">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-pally">Légal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors font-pally cursor-pointer">Confidentialité</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors font-pally cursor-pointer">Conditions d'utilisation</a></li>
                <li><a href="/legal" className="hover:text-white transition-colors font-pally cursor-pointer">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-pally">&copy; 2025 Fridget. Tous droits réservés.</p>
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

      {/* Styles CSS pour les animations FAQ */}
      <style jsx>{`
        details[open] > div {
          animation: slideDown 0.3s ease-out;
        }
        
        details:not([open]) > div {
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* Bouton fixe pour rouvrir la modale des cookies */}
      <button
        onClick={() => {
          // Supprimer le consentement existant pour forcer la réouverture
          localStorage.removeItem('fridget-cookie-consent');
          // Déclencher un événement personnalisé pour rouvrir la modale
          window.dispatchEvent(new CustomEvent('reopen-cookie-consent'));
        }}
        className="fixed bottom-6 left-6 w-12 h-12 bg-fridget-orange hover:bg-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group text-2xl cursor-pointer transform-gpu"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 9999,
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
        title="Gérer les cookies"
      >
        🍪
        <span className="absolute -top-2 -right-2 bg-white text-black text-sm rounded-full flex px-1 items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Cookies
        </span>
      </button>
    </div>
  );
}
