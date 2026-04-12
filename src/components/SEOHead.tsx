import { useEffect } from 'react';
import { BUSINESS, LOCAL_BUSINESS_JSONLD } from '../data/business';

interface ServiceSchema {
  name: string;
  description: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  faqs?: { question: string; answer: string }[];
  service?: ServiceSchema;
}

export default function SEOHead({ title, description, canonical, faqs, service }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const fullUrl = `${BUSINESS.domain}${canonical}`;

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', fullUrl, 'property');
    setMeta('og:image', `${BUSINESS.domain}/og-image.jpg`, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:image', `${BUSINESS.domain}/og-image.jpg`, 'name');

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = fullUrl;

    const existingScripts = document.querySelectorAll('script[data-seo]');
    existingScripts.forEach((s) => s.remove());

    const businessScript = document.createElement('script');
    businessScript.type = 'application/ld+json';
    businessScript.setAttribute('data-seo', 'true');
    businessScript.textContent = JSON.stringify(LOCAL_BUSINESS_JSONLD);
    document.head.appendChild(businessScript);

    if (service) {
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: `${BUSINESS.domain}${service.url}`,
        provider: {
          '@type': BUSINESS.schemaType,
          name: BUSINESS.name,
          telephone: BUSINESS.phoneE164,
          url: BUSINESS.domain,
        },
        areaServed: {
          '@type': 'City',
          name: BUSINESS.address.city,
        },
      };
      const serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.setAttribute('data-seo', 'true');
      serviceScript.textContent = JSON.stringify(serviceSchema);
      document.head.appendChild(serviceScript);
    }

    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      };
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-seo', 'true');
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo]');
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, faqs, service]);

  return null;
}
