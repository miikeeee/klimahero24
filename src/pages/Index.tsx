
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    "Geprüfte Handwerker aus deiner Region",
    "Bis zu 20% staatliche Förderung",
    "Kostenlose Beratung & Planung",
    "3 Jahre Garantie auf alle Arbeiten"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            badhelden24
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
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
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Kostenlose Beratung
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transition-all duration-300">
                  Beispiele ansehen
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
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modernes Badezimmer nach Sanierung"
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              So einfach geht's zu deinem neuen Bad
            </h2>
            <p className="text-xl text-gray-600">
              In nur 3 Schritten von der Idee zum fertigen Traumbad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Anfrage stellen",
                description: "Beschreibe deine Wünsche und erhalte eine kostenlose Erstberatung",
                icon: "📝"
              },
              {
                step: "2", 
                title: "Planung & Angebot",
                description: "Unsere Experten planen dein Bad und prüfen Fördermöglichkeiten",
                icon: "📐"
              },
              {
                step: "3",
                title: "Umsetzung",
                description: "Professionelle Umsetzung durch geprüfte Handwerker aus deiner Region",
                icon: "🔨"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für dein neues Traumbad?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Lass dich kostenlos beraten und erfahre, wie viel Förderung du erhalten kannst.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Jetzt kostenlose Beratung anfragen
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

export default Index;
