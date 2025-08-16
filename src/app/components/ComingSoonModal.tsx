'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 [CLIENT] Début de la soumission du formulaire');
    console.log('📧 [CLIENT] Email à envoyer:', email);
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('🌐 [CLIENT] Appel de l\'API /api/notify...');
      
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('📡 [CLIENT] Réponse reçue:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        url: response.url
      });

      const data = await response.json();
      console.log('📊 [CLIENT] Données reçues:', data);

      if (response.ok) {
        console.log('✅ [CLIENT] Succès de l\'inscription');
        setSubmitStatus('success');
        setSubmitMessage(data.message);
        setEmail(''); // Reset le champ email
      } else {
        console.log('❌ [CLIENT] Erreur de l\'API:', data.error);
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Erreur lors de l\'inscription.');
      }
    } catch (error) {
      console.error('💥 [CLIENT] Erreur de connexion:', error);
      setSubmitStatus('error');
      setSubmitMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      console.log('🏁 [CLIENT] Fin de la soumission');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 relative">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenu de la modale */}
        <div className="text-center">
          {/* Icône Fridget */}
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/images/icons/fridge/fridge-waiting.png"
              alt="Fridget"
              width={80}
              height={80}
              className="mb-4"
            />
          </div>

          {/* Titre */}
          <h2 className="text-3xl font-bold text-white mb-4 font-pally">
            Bientôt disponible !
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 font-pally leading-relaxed">
            L&apos;application Fridget arrive très bientôt sur l&apos;App Store ! 
            Soyez le premier à être notifié de sa sortie.
          </p>

          {/* Formulaire de notification */}
          <div className="mb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fridget-orange transition-colors font-pally"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-fridget-orange text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors font-pally disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Inscription...' : 'Notifier'}
                </button>
              </div>
              
              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-600 text-white rounded-lg text-sm font-pally">
                  {submitMessage}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-600 text-white rounded-lg text-sm font-pally">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Message de disponibilité */}
          <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-sm text-gray-300 font-pally">
              <span className="text-fridget-orange font-semibold">Bonus exclusifs</span> : 
              Des avantages et promotions seront attribués aux utilisateurs inscrits à la liste de notification !
            </p>
          </div>

          {/* Bouton fermer en bas */}
          <button
            onClick={onClose}
            className="mt-6 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors font-pally"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
