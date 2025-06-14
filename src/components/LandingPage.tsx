
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Phone, MapPin, Calendar, Shield } from "lucide-react";
import { useEffect, useState } from "react";

interface LandingPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  heroImage?: string;
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
  location?: string;
}

interface LandingPageProps {
  data: LandingPageData;
}

const LandingPage = ({ data }: LandingPageProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            badhelden24
          </div>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open(data.cta.url, '_blank')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Jetzt anfragen
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">{data.location || 'Deutschlandweit'}</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {data.h1}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {data.heroText}
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Geprüfte Handwerker aus deiner Region",
                  "Bis zu 20% staatliche Förderung",
                  "Kostenlose Vor-Ort-Beratung",
                  "3 Jahre Garantie auf alle Arbeiten"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => window.open(data.cta.url, '_blank')}
                >
                  {data.cta.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transition-all duration-300">
                  Kostenlos anrufen
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 • Über 2.500 zufriedene Kunden</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src={data.heroImage || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt={`Badsanierung ${data.location || ''}`}
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {data.sections.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.text}
                </p>
                <div className="flex space-x-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(data.cta.url, '_blank')}
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl transform rotate-3 opacity-30"></div>
                  <img 
                    src={section.image || "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={section.heading}
                    className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Trust Indicators */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="space-y-4">
              <Calendar className="w-12 h-12 mx-auto text-blue-200" />
              <h3 className="text-2xl font-bold">Über 10 Jahre</h3>
              <p className="text-blue-100">Erfahrung in der Badsanierung</p>
            </div>
            <div className="space-y-4">
              <Shield className="w-12 h-12 mx-auto text-blue-200" />
              <h3 className="text-2xl font-bold">100% Garantie</h3>
              <p className="text-blue-100">3 Jahre Gewährleistung auf alle Arbeiten</p>
            </div>
            <div className="space-y-4">
              <CheckCircle className="w-12 h-12 mx-auto text-blue-200" />
              <h3 className="text-2xl font-bold">2.500+ Kunden</h3>
              <p className="text-blue-100">Zufriedene Kunden deutschlandweit</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Alles was du über deine Badsanierung wissen musst
            </p>
          </div>

          <div className="space-y-4">
            {data.faq.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <ArrowRight 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-white animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für dein neues Traumbad?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Lass dich kostenlos beraten und erfahre, wie viel Förderung du erhalten kannst.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.open(data.cta.url, '_blank')}
          >
            {data.cta.text}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

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
                <li><a href="/badumbau" className="hover:text-white transition-colors">Badumbau</a></li>
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

export default LandingPage;
