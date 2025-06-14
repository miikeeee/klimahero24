
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Phone, ShieldCheck as BenefitIcon, Users, Wrench, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import CityCards from "@/components/CityCards";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [cityCards, setCityCards] = useState([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loadCityCards = async () => {
      try {
        const response = await fetch('/data/cities.json');
        const data = await response.json();
        setCityCards(data.cityCards);
      } catch (error) {
        console.error('Error loading city cards:', error);
      }
    };
    loadCityCards();
  }, []);

  const heroBenefits = [
    "Geprüfte Handwerker aus deiner Region",
    "Bis zu 20% staatliche Förderung",
    "Kostenlose Beratung & Planung",
    "3 Jahre Garantie auf alle Arbeiten"
  ];

  const pageBenefits = [
    { icon: BenefitIcon, title: "Transparente Festpreise", description: "Keine versteckten Kosten, volle Kostenkontrolle von Anfang an." },
    { icon: Users, title: "Persönliche Fachberatung", description: "Experten planen mit Ihnen Ihr Traumbad, individuell und bedarfsgerecht." },
    { icon: Wrench, title: "Alles aus einer Hand", description: "Von der Planung bis zur finalen Übergabe – ein Ansprechpartner für alles." },
    { icon: ThumbsUp, title: "Hochwertige Materialien", description: "Wir verwenden nur geprüfte Qualitätsprodukte namhafter Hersteller." }
  ];

  const faqs = [
    {
      question: "Wie lange dauert eine typische Badsanierung?",
      answer: "Je nach Umfang dauert eine komplette Badsanierung in der Regel 2-4 Wochen."
    },
    {
      question: "Was kostet eine Badsanierung im Durchschnitt?",
      answer: "Die Kosten variieren stark, beginnen aber oft bei ca. 13.000€ für ein Standardbad. Wir erstellen Ihnen ein individuelles Angebot."
    },
    {
      question: "Bieten Sie auch barrierefreie Badumbauten an?",
      answer: "Ja, wir sind spezialisiert auf altersgerechte und barrierefreie Badlösungen, inklusive KfW-Förderberatung."
    },
    {
      question: "Kann ich während der Sanierung zu Hause wohnen bleiben?",
      answer: "Das ist oft möglich, hängt aber vom Umfang der Arbeiten ab. Wir minimieren Staub und Lärm und sprechen die Details mit Ihnen ab."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCTAClick = () => {
    window.open('https://app.neko24.de', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        { // ... keep existing code (header content)
        }
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Dein <span className="text-blue-600">Traumbad</span> 
                  <br />wird Realität
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professionelle Badsanierung von A bis Z – mit geprüften Handwerkern, 
                  staatlicher Förderung und 3 Jahren Garantie.
                </p>
              </div>

              <div className="space-y-3">
                {heroBenefits.map((benefit, index) => (
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
                  onClick={handleCTAClick}
                >
                  Kostenlose Beratung
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  onClick={handleCTAClick}
                >
                  Mehr erfahren {/* Changed text here */}
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                { // ... keep existing code (star rating)
                }
              </div>
            </div>

            <div className="relative">
              { // ... keep existing code (hero image)
              }
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        { // ... keep existing code (process section content)
        }
      </section>

      {/* City Cards Section */}
      {cityCards.length > 0 && <CityCards cities={cityCards} />}

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ihre Vorteile mit Badhelden24
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mt-2">
              Wir machen Ihre Badsanierung einfach und sorgenfrei.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {pageBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-4 animate-scale-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Antworten auf Ihre wichtigsten Fragen zur Badsanierung.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{item.question}</span>
                  <ArrowRight 
                    className={`w-4 sm:w-5 h-4 sm:h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white animate-fade-in">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600"> {/* Changed background to orange */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Bereit für dein neues Traumbad?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Lass dich kostenlos beraten und erfahre, wie viel Förderung du erhalten kannst.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-sm mx-auto"
            onClick={handleCTAClick}
          >
            Angebot anfragen {/* Changed text and style */}
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        { // ... keep existing code (footer content)
        }
      </footer>
    </div>
  );
};

export default Index;
