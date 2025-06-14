
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, Calendar, User, Clock } from "lucide-react";
import ContentRenderer from '@/components/ContentRenderer';
import RatgeberSidebar from '@/components/RatgeberSidebar';

interface RatgeberData {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  publishDate?: string;
  readTime?: string;
  author?: string;
  content: Array<{
    type: 'h1' | 'h2' | 'text' | 'image' | 'table' | 'cta';
    text?: string;
    src?: string;
    alt?: string;
    url?: string;
    buttonText?: string;
    tableData?: Array<Array<string>>;
    tableHeaders?: Array<string>;
  }>;
  sidebar: {
    newsletter?: {
      headline: string;
      text: string;
      button: string;
    };
    infobox?: {
      text: string;
      button: string;
    };
  };
  structuredData?: any;
}

const RatgeberPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<RatgeberData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Loading ratgeber data for slug:', slug);
        const response = await fetch(`/data/ratgeber/${slug}.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to load data for ${slug}`);
        }
        
        const jsonData = await response.json();
        console.log('Loaded ratgeber data:', jsonData);
        setData(jsonData);
      } catch (err) {
        console.error('Error loading ratgeber data:', err);
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
      document.title = data.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = data.metaDescription;
        document.head.appendChild(meta);
      }

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

  const handleCTAClick = () => {
    window.open('https://app.neko24.de', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 sm:h-12 w-8 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Lade Inhalte...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Seite nicht gefunden</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Die angeforderte Seite konnte nicht gefunden werden.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-blue-600">
            <a href="/">badhelden24</a>
          </div>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            onClick={handleCTAClick}
          >
            <Phone className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Jetzt anfragen</span>
            <span className="sm:hidden">Anfragen</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-green-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Column */}
              <div className="order-2 lg:order-1">
                {data.heroImage && (
                  <img 
                    src={data.heroImage.src}
                    alt={data.heroImage.alt}
                    className="w-full rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Text Column */}
              <div className="order-1 lg:order-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {data.content.find(item => item.type === 'h1')?.text || data.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">
                  {data.publishDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{data.publishDate}</span>
                    </div>
                  )}
                  {data.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{data.readTime}</span>
                    </div>
                  )}
                  {data.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-600" />
                      <span>{data.author}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  {data.metaDescription}
                </p>
                
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={handleCTAClick}
                >
                  Kostenlose Beratung sichern
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="pb-12 sm:pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-4 sm:p-6 lg:p-8">
                {/* Skip the h1 since it's already in hero */}
                <ContentRenderer content={data.content.filter(item => item.type !== 'h1')} />
              </div>
            </div>

            {/* Sticky Sidebar - positioned lower to align with content start */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-60 space-y-6">
                <RatgeberSidebar config={data.sidebar} />
                
                {/* Additional info box */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Kostenlose Fördermittelberatung und Angebote von Fachfirmen sichern</h3>
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={handleCTAClick}
                  >
                    Kostenlos anfragen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">badhelden24</div>
              <p className="text-gray-400 text-sm sm:text-base">Dein Partner für professionelle Badsanierung in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/badsanierung" className="hover:text-white transition-colors">Badsanierung</a></li>
                <li><a href="/badumbau" className="hover:text-white transition-colors">Badumbau</a></li>
                <li><a href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                <span className="block">📞 0800 123 456 789</span>
                <span className="block">✉️ info@badhelden24.de</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 badhelden24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RatgeberPage;
