
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LandingPage from '@/components/LandingPage';

interface LandingPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  heroImage?: string;
  location?: string;
  sections: Array<{
    heading: string;
    text: string;
    image?: string;
  }>;
  imageSections?: Array<{
    src: string;
    alt: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    text: string;
    url: string;
  };
  structuredData?: any;
}

const BadsanierungPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Loading data for slug:', slug);
        const response = await fetch(`/data/badsanierung/${slug}.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to load data for ${slug}`);
        }
        
        const jsonData = await response.json();
        console.log('Loaded data:', jsonData);
        setData(jsonData);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadData();
    }
  }, [slug]);

  useEffect(() => {
    if (data) {
      // Update document title and meta description
      document.title = data.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = data.metaDescription;
        document.head.appendChild(meta);
      }

      // Add structured data
      if (data.structuredData) {
        const existingScript = document.querySelector('#structured-data');
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'structured-data';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data.structuredData);
        document.head.appendChild(script);
      }
    }
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Inhalte...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seite nicht gefunden</h1>
          <p className="text-gray-600 mb-6">
            Die angeforderte Seite konnte nicht gefunden werden.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    );
  }

  return <LandingPage data={data} />;
};

export default BadsanierungPage;
