import { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RatgeberArticle {
  slug: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

const RatgeberListPage = () => {
  const [articles, setArticles] = useState<RatgeberArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading ratgeber articles
    const loadArticles = () => {
      const ratgeberArticles = [
        {
          slug: "badezimmer-trends-2024",
          title: "Badezimmer Trends 2024",
          description: "Entdecke die neuesten Trends für moderne Badezimmer und lass dich inspirieren für deine nächste Badsanierung.",
          image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          readTime: "5 Min. Lesezeit"
        },
        {
          slug: "badumbau-kosten",
          title: "Badsanierung Kosten 2024",
          description: "Was kostet eine Badsanierung wirklich? Alle Infos zu Preisen, Förderungen und Sparmöglichkeiten.",
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          readTime: "8 Min. Lesezeit"
        },
        {
          slug: "badsanierung-dauer",
          title: "Dauer einer Badsanierung",
          description: "Wie lange dauert eine Badsanierung? Tipps für eine reibungslose Planung und Zeitersparnis.",
          image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          readTime: "6 Min. Lesezeit"
        },
        {
          slug: "wasserleitung-sanieren",
          title: "Wasserleitungen sanieren",
          description: "Alles über die Sanierung von Wasserleitungen: Kosten, Ablauf und wichtige Hinweise.",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          readTime: "7 Min. Lesezeit"
        }
      ];
      setArticles(ratgeberArticles);
      setLoading(false);
    };

    loadArticles();
  }, []);

  useEffect(() => {
    document.title = "Ratgeber - badhelden24";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entdecke unseren umfassenden Ratgeber für Badsanierung. Tipps, Trends und wichtige Informationen für dein Traumbad.');
    }
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.badhelden24.de', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Ratgeber...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/FavIcon%20500%20x%20500-0BoxfiLkXw4D2e41W20ELwwpufi7NW.svg"
              alt="badhelden24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            onClick={handleCTAClick}
          >
            <Phone className="w-4 h-4 mr-2" />
            Beratung anfragen
          </Button>
        </div>
      </header>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ratgeber für deine Badsanierung
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahre alles Wichtige rund um Badsanierung, Kosten, Trends und Tipps. 
              Unser Expertenratgeber hilft dir bei der Planung deines Traumbads.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                  <a 
                    href={`/ratgeber/${article.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Brauchst du persönliche Beratung?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Lass dich kostenlos von unseren Experten beraten und erhalte ein individuelles Angebot.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Jetzt Beratung anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">badhelden24</div>
              <p className="text-gray-400">Dein Partner für professionelle Badsanierung in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/badsanierung" className="hover:text-white transition-colors">Badsanierung</a></li>
                <li><a href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-400">
                <span className="block">📞 0800 123 456 789</span>
                <span className="block">✉️ info@badhelden24.de</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 badhelden24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RatgeberListPage;
