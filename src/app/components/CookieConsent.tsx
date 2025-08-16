'use client';

import { useState, useEffect, useCallback } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const initializeUmami = useCallback(() => {
    // Initialiser Umami si le consentement est donné
    if (isClient && analyticsConsent) {
      // Le composant UmamiAnalytics gère déjà l'initialisation
      // On peut juste logger pour confirmer
      console.log('Analytics consent granted - Umami will be loaded');
    }
  }, [analyticsConsent, isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Écouter l'événement pour rouvrir la modale
    const handleReopenConsent = () => {
      setShowConsent(true);
    };

    window.addEventListener('reopen-cookie-consent', handleReopenConsent);

    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem('fridget-cookie-consent');
    
    if (!consent) {
      // Pas de consentement, afficher la modale
      setShowConsent(true);
    } else {
      try {
        const { analytics, marketing } = JSON.parse(consent);
        // Restaurer les préférences sauvegardées
        setAnalyticsConsent(analytics);
        setMarketingConsent(marketing);
        // Ne pas afficher la modale si le consentement existe
        setShowConsent(false);
        // Initialiser Umami si le consentement analytics est donné
        if (analytics) {
          initializeUmami();
        }
      } catch {
        // En cas d'erreur, remontrer le consentement
        setShowConsent(true);
      }
    }

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('reopen-cookie-consent', handleReopenConsent);
    };
  }, [initializeUmami, isClient]);

  const acceptAll = () => {
    const consent = { analytics: true, marketing: true, necessary: true };
    localStorage.setItem('fridget-cookie-consent', JSON.stringify(consent));
    setAnalyticsConsent(true);
    setMarketingConsent(true);
    setShowConsent(false);
    initializeUmami();
  };

  const acceptSelected = () => {
    const consent = { analytics: analyticsConsent, marketing: marketingConsent, necessary: true };
    localStorage.setItem('fridget-cookie-consent', JSON.stringify(consent));
    setShowConsent(false);
    // Initialiser Umami immédiatement si le consentement analytics est donné
    if (analyticsConsent) {
      initializeUmami();
    }
  };

  const rejectAll = () => {
    const consent = { analytics: false, marketing: false, necessary: true };
    localStorage.setItem('fridget-cookie-consent', JSON.stringify(consent));
    setAnalyticsConsent(false);
    setMarketingConsent(false);
    setShowConsent(false);
  };

  // Fonction pour réinitialiser le consentement (utile pour les tests)
  const resetConsent = () => {
    localStorage.removeItem('fridget-cookie-consent');
    sessionStorage.removeItem('fridget-visited');
    setShowConsent(true);
  };

  const updateConsent = () => {
    const consent = { analytics: analyticsConsent, marketing: marketingConsent, necessary: true };
    localStorage.setItem('fridget-cookie-consent', JSON.stringify(consent));
    
    if (analyticsConsent) {
      initializeUmami();
    }
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-6 z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-3 font-pally">
              🍪 Gestion des cookies et du respect de la vie privée
            </h3>
            <p className="text-gray-300 text-sm font-pally leading-relaxed mb-4">
              Nous utilisons des cookies pour améliorer votre expérience et analyser l&apos;utilisation du site. 
              Les cookies nécessaires sont toujours actifs. Vous pouvez choisir d&apos;accepter ou refuser 
              les cookies d&apos;analyse et de marketing.
            </p>
            
            {/* Options de consentement */}
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-white font-pally">
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => {
                    setAnalyticsConsent(e.target.checked);
                  }}
                  className="w-4 h-4 text-fridget-orange bg-gray-700 border-gray-600 rounded focus:ring-fridget-orange focus:ring-2"
                />
                <div>
                  <span className="text-sm font-medium">Analytics (Umami)</span>
                  <p className="text-xs text-gray-400">Nous aide à comprendre l'utilisation du site</p>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 text-white font-pally">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => {
                    setMarketingConsent(e.target.checked);
                  }}
                  className="w-4 h-4 text-fridget-orange bg-gray-700 border-gray-600 rounded focus:ring-fridget-orange focus:ring-2"
                />
                <div>
                  <span className="text-sm font-medium">Marketing</span>
                  <p className="text-xs text-gray-400">Personnalisation des contenus et publicités</p>
                </div>
              </label>
            </div>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={rejectAll}
              className="px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-sm font-pally"
            >
              Refuser tout
            </button>
            <button
              onClick={acceptSelected}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-pally"
            >
              Accepter sélection
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 bg-fridget-orange text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-pally"
            >
              Accepter tout
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-gray-500 font-pally border-t border-gray-700 pt-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium text-gray-400 mb-1">Cookies nécessaires :</p>
              <p>Toujours actifs pour le fonctionnement du site</p>
            </div>
            <div>
              <p className="font-medium text-gray-400 mb-1">Cookies d&apos;analyse :</p>
              <p>Umami nous aide à comprendre l&apos;utilisation du site</p>
            </div>
            <div>
              <p className="font-medium text-gray-400 mb-1">Cookies marketing :</p>
              <p>Personnalisation des contenus et publicités</p>
            </div>
          </div>
          <p className="mt-3">
            <a href="/privacy" className="text-fridget-orange hover:underline">
              En savoir plus sur notre politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
