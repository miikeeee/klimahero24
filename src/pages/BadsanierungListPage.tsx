import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Users, Euro, Star } from 'lucide-react';

const cityData = [
  {
    name: "Aachen",
    slug: "aachen", // korrekte Verlinkung zu aachen.json
    state: "Nordrhein-Westfalen",
    population: "249.000",
    startingPrice: "13.100€",
    description: "Kaiserstadt mit europäischem Flair und traditioneller Handwerkskunst",
    heroImage: "https://images.unsplash.com/photo-1571823352623-82b69471c096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Augsburg",
    slug: "augsburg", // korrekte Verlinkung zu augsburg.json
    state: "Bayern",
    population: "300.000",
    startingPrice: "12.600€",
    description: "Fuggerstadt mit schwäbischer Tradition und bewährter Qualität",
    heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Baden-Württemberg",
    slug: "baden-wuerttemberg", // korrekte Verlinkung zu baden-wuerttemberg.json
    state: "Bundesland",
    population: "11.1 Mio",
    startingPrice: "12.800€",
    description: "Das Ländle mit schwäbischer Qualität und Automobilland-Präzision",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bayern",
    slug: "bayern", // korrekte Verlinkung zu bayern.json
    state: "Bundesland",
    population: "13.1 Mio",
    startingPrice: "12.500€",
    description: "Freistaat mit bayerischer Gemütlichkeit und Oktoberfest-Qualität",
    heroImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Berlin",
    slug: "berlin", // korrekte Verlinkung zu berlin.json
    state: "Bundesland",
    population: "3.7 Mio",
    startingPrice: "13.800€",
    description: "Hauptstadt mit urbaner Vielfalt und Brandenburger Tor-Qualität",
    heroImage: "https://images.unsplash.com/photo-1587330979470-3016b6702d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bielefeld",
    slug: "bielefeld", // korrekte Verlinkung zu bielefeld.json
    state: "Nordrhein-Westfalen",
    population: "334.000",
    startingPrice: "12.400€",
    description: "Ostwestfälische Metropole mit bodenständiger Handwerksqualität",
    heroImage: "https://source.unsplash.com/800x600/?bielefeld,westphalia"
  },
  {
    name: "Bonn",
    slug: "bonn", // korrekte Verlinkung zu bonn.json
    state: "Nordrhein-Westfalen",
    population: "327.000",
    startingPrice: "13.500€",
    description: "Ehemalige Hauptstadt mit diplomatischer Eleganz und repräsentativer Qualität",
    heroImage: "https://source.unsplash.com/800x600/?bonn,government"
  },
  {
    name: "Brandenburg",
    slug: "brandenburg", // korrekte Verlinkung zu brandenburg.json
    state: "Bundesland",
    population: "2.5 Mio",
    startingPrice: "11.200€",
    description: "Mark Brandenburg mit märkischer Sparsamkeit und preußischer Qualität",
    heroImage: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bremen",
    slug: "bremen", // korrekte Verlinkung zu bremen.json
    state: "Bundesland",
    population: "569.000",
    startingPrice: "12.800€",
    description: "Hansestadt mit maritimer Eleganz und hanseatischer Verlässlichkeit",
    heroImage: "https://source.unsplash.com/800x600/?bremen,hanseatic"
  },
  {
    name: "Braunschweig",
    slug: "braunschweig", // korrekte Verlinkung zu braunschweig.json
    state: "Niedersachsen",
    population: "248.000",
    startingPrice: "12.300€",
    description: "Löwenstadt mit niedersächsischer Solidität und traditioneller Qualität",
    heroImage: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chemnitz",
    slug: "chemnitz", // korrekte Verlinkung zu chemnitz.json
    state: "Sachsen",
    population: "247.000",
    startingPrice: "11.800€",
    description: "Stadt der Moderne mit sächsischer Innovation und günstigen Preisen",
    heroImage: "https://images.unsplash.com/photo-1588282015020-3a48e6b42d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const regionData = [
  {
    name: "Donauregion",
    slug: "donau", // korrekte Verlinkung zu donau.json
    state: "Flussregion",
    population: "Von Ulm bis Passau",
    startingPrice: "12.200€",
    description: "Donauische Qualität von der Schwäbischen Alb bis zum Bayerischen Wald",
    heroImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elberegion",
    slug: "elbe", // korrekte Verlinkung zu elbe.json (neu erstellt)
    state: "Flussregion",
    population: "Von Dresden bis Hamburg",
    startingPrice: "11.800€",
    description: "Elbflorenz-Eleganz trifft auf hanseatische Weltoffenheit",
    heroImage: "https://images.unsplash.com/photo-1571823352623-82b69471c096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rheinregion",
    slug: "rhein", // korrekte Verlinkung zu rhein.json (neu erstellt)
    state: "Flussregion",
    population: "Von Basel bis Rotterdam",
    startingPrice: "12.400€",
    description: "Rheinromantik-Qualität mit internationalen Standards",
    heroImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const CityCard = ({ city }) => (
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
      </div>
    </div>
  </Link>
);

const BadsanierungListPage = () => {
  const allData = [...cityData, ...regionData];

  return (
    <>
      <Helmet>
        <title>Badsanierung in Deutschland | Alle Städte & Regionen | badhelden24</title>
        <meta name="description" content="Professionelle Badsanierung in ganz Deutschland ✓ Über 50 Städte & Regionen ✓ Günstige Festpreise ab 11.200€ ✓ Erfahrene Handwerker ✓ Kostenlose Beratung!" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Badsanierung in ganz Deutschland
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professionelle Badsanierung mit geprüften Handwerkern in über 50 Städten und Regionen
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span>4,8/5 Kundenbewertung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="w-6 h-6 text-green-400" />
                  <span>Ab 11.200€ Festpreis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Wählen Sie Ihre Stadt oder Region
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Finden Sie erfahrene Handwerker für Ihre Badsanierung in Ihrer Nähe. 
                Alle Preise sind Festpreise inklusive Material und Arbeitszeit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allData.map((city, index) => (
                <CityCard key={index} city={city} />
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Ihre Stadt ist nicht dabei? Kein Problem!
              </p>
              <a
                href="https://app.badhelden24.de"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Kostenlose Beratung anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BadsanierungListPage;
