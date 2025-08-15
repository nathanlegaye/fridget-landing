'use client';

import { useEffect, useState } from 'react';

interface UmamiAnalyticsProps {
  dataWebsiteId: string;
  src: string;
}

export default function UmamiAnalytics({ dataWebsiteId, src }: UmamiAnalyticsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Vérifier le consentement aux cookies
    const consent = localStorage.getItem('fridget-cookie-consent');
    if (!consent) return;

    const { analytics } = JSON.parse(consent);
    if (!analytics) return;

    // Charger Umami seulement si le consentement est donné
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', dataWebsiteId);
    script.src = src;
    document.head.appendChild(script);
  }, [dataWebsiteId, src, isClient]);

  return null; // Ce composant ne rend rien visuellement
}
