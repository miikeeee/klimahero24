
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Users, Euro, Star } from 'lucide-react';

interface CityData {
  name: string;
  slug: string;
  state: string;
  population: string;
  startingPrice: string;
  description: string;
  heroImage: string;
}

const cityData: CityData[] = [
  {
    name: "Aachen",
    slug: "aachen",
    state: "Nordrhein-Westfalen",
    population: "249.000",
    startingPrice: "13.100€",
    description: "Kaiserstadt mit europäischem Flair und traditioneller Handwerkskunst",
    heroImage: "https://images.unsplash.com/photo-1571823352623-82b69471c096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Augsburg",
    slug: "augsburg",
    state: "Bayern",
    population: "300.000",
    startingPrice: "12.600€",
    description: "Fuggerstadt mit schwäbischer Tradition und bewährter Qualität",
    heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Baden-Württemberg",
    slug: "baden-wuerttemberg",
    state: "Bundesland",
    population: "11.1 Mio",
    startingPrice: "12.800€",
    description: "Das Ländle mit schwäbischer Qualität und Automobilland-Präzision",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bayern",
    slug: "bayern",
    state: "Bundesland",
    population: "13.1 Mio",
    startingPrice: "12.500€",
    description: "Freistaat mit bayerischer Gemütlichkeit und Oktoberfest-Qualität",
    heroImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Berlin",
    slug: "berlin",
    state: "Bundesland",
    population: "3.7 Mio",
    startingPrice: "13.800€",
    description: "Hauptstadt mit urbaner Vielfalt und Brandenburger Tor-Qualität",
    heroImage: "https://images.unsplash.com/photo-1587330979470-3016b6702d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bielefeld",
    slug: "bielefeld",
    state: "Nordrhein-Westfalen",
    population: "334.000",
    startingPrice: "12.400€",
    description: "Ostwestfälische Metropole mit bodenständiger Handwerksqualität",
    heroImage: "https://source.unsplash.com/800x600/?bielefeld,westphalia"
  },
  {
    name: "Bonn",
    slug: "bonn",
    state: "Nordrhein-Westfalen",
    population: "327.000",
    startingPrice: "13.500€",
    description: "Ehemalige Hauptstadt mit diplomatischer Eleganz und repräsentativer Qualität",
    heroImage: "https://source.unsplash.com/800x600/?bonn,government"
  },
  {
    name: "Brandenburg",
    slug: "brandenburg",
    state: "Bundesland",
    population: "2.5 Mio",
    startingPrice: "11.200€",
    description: "Mark Brandenburg mit märkischer Sparsamkeit und preußischer Qualität",
    heroImage: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bremen",
    slug: "bremen",
    state: "Bundesland",
    population: "569.000",
    startingPrice: "12.800€",
    description: "Hansestadt mit maritimer Eleganz und hanseatischer Verlässlichkeit",
    heroImage: "https://source.unsplash.com/800x600/?bremen,hanseatic"
  },
  {
    name: "Chemnitz",
    slug: "chemnitz",
    state: "Sachsen",
    population: "247.000",
    startingPrice: "11.800€",
    description: "Stadt der Moderne mit sächsischer Innovation und günstigen Preisen",
    heroImage: "https://images.unsplash.com/photo-1588282015020-3a48e6b42d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const regionData: CityData[] = [
  {
    name: "Donauregion",
    slug: "donau",
    state: "Flussregion",
    population: "Von Ulm bis Passau",
    startingPrice: "12.200€",
    description: "Donauische Qualität von der Schwäbischen Alb bis zum Bayerischen Wald",
    heroImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elberegion",
    slug: "elbe",
    state: "Flussregion",
    population: "Von Dresden bis Hamburg",
    startingPrice: "11.800€",
    description: "Elbflorenz-Eleganz trifft auf hanseatische Weltoffenheit",
    heroImage: "https://images.unsplash.com/photo-1571823352623-82b69471c096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rheinregion",
    slug: "rhein",
    state: "Flussregion",
    population: "Von Basel bis Rotterdam",
    startingPrice: "12.400€",
    description: "Rheinromantik-Qualität mit internationalen Standards",
    heroImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const CityCard: React.FC<{ city: CityData }> = ({ city }) => (
  <Link to={`/badsanierung/${city.slug}`} className="group">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={city.heroImage} 
          alt={`Badsanierung ${city.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          ab {city.startingPrice}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          Badsanierung {city.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{city.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{city.state}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{city.population}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <span className="text-gray-600 text-sm ml-1">(4.9)</span>
          </div>
          <div className="flex items-center gap-1 text-green-600 font-medium">
            <Euro className="w-4 h-4" />
            <span>Günstig</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const BadsanierungListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Badsanierung Deutschland | Alle Städte & Regionen | badhelden24</title>
        <meta name="description" content="Badsanierung in Deutschland ✓ Alle Städte & Regionen ✓ Kosten ab 11.200€ ✓ Günstige Festpreise ✓ Erfahrene Handwerker ✓ Kostenlose Beratung!" />
        <meta name="keywords" content="badsanierung, deutschland, städte, regionen, kosten, günstig, handwerker, festpreis" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Badsanierung in Deutschland
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Finden Sie den perfekten Handwerker in Ihrer Stadt oder Region. 
                Günstige Festpreise, erfahrene Meisterbetriebe und 5 Jahre Garantie.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">13</div>
                  <div className="text-sm opacity-80">Städte & Regionen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">ab 11.200€</div>
                  <div className="text-sm opacity-80">Startpreise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">5 Jahre</div>
                  <div className="text-sm opacity-80">Garantie</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cities Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Badsanierung nach Städten & Bundesländern
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wählen Sie Ihre Stadt oder Ihr Bundesland für eine maßgeschneiderte Badsanierung. 
              Unsere regionalen Handwerkspartner kennen die lokalen Besonderheiten und Preise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cityData.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Badsanierung nach Flussregionen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie die besonderen Vorteile einer Badsanierung entlang der großen deutschen Flüsse. 
              Regionale Expertise trifft auf günstige Preise und bewährte Qualität.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionData.map((region) => (
              <CityCard key={region.slug} city={region} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ihr Traumbad wartet auf Sie
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kostenlose Beratung und unverbindliches Angebot in weniger als 24 Stunden.
            </p>
            <a 
              href="https://app.badhelden24.de" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Jetzt kostenloses Angebot anfragen
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BadsanierungListPage;
