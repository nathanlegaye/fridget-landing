'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Message envoyé avec succès ! Nous vous répondrons rapidement.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fridget-orange transition-colors font-pally"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fridget-orange transition-colors font-pally"
            required
          />
        </div>
      </div>
      
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fridget-orange transition-colors font-pally"
          required
        />
      </div>
      
      <div>
        <textarea
          name="message"
          placeholder="Votre message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fridget-orange transition-colors font-pally resize-none"
          required
        ></textarea>
      </div>

      {/* Messages de statut */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-600 text-white rounded-lg font-pally">
          {submitMessage}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-600 text-white rounded-lg font-pally">
          {submitMessage}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-4 bg-fridget-orange text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-lg font-pally disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
}
