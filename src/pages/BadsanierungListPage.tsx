
import { useEffect, useState } from 'react';
import { MapPin, ArrowRight, Phone, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface City {
  name: string;
  slug: string;
  image: string;
  description: string;
  population?: string;
}

const BadsanierungListPage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCities, setVisibleCities] = useState(9);
  const [showingMore, setShowingMore] = useState(false);

  useEffect(() => {
    const loadCities = async () => {
      const cityList = [
        {
          name: "Berlin",
          slug: "berlin",
          image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Professionelle Badsanierung in der Hauptstadt mit geprüften Handwerkern.",
          population: "3.7 Mio. Einwohner"
        },
        {
          name: "Hamburg",
          slug: "hamburg",
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d14d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Hochwertige Badsanierung in der Hansestadt mit regionalen Experten.",
          population: "1.9 Mio. Einwohner"
        },
        {
          name: "München",
          slug: "muenchen",
          image: "https://images.unsplash.com/photo-1595655931695-059d14e2447d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Exklusive Badsanierung in München mit bayerischen Qualitätsstandards.",
          population: "1.5 Mio. Einwohner"
        },
        {
          name: "Köln",
          slug: "koeln",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Moderne Badsanierung in der Domstadt mit rheinischer Gemütlichkeit.",
          population: "1.1 Mio. Einwohner"
        },
        {
          name: "Frankfurt",
          slug: "frankfurt",
          image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Erstklassige Badsanierung im Finanzenzentrum Deutschlands.",
          population: "760.000 Einwohner"
        },
        {
          name: "Stuttgart",
          slug: "stuttgart",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Innovative Badsanierung in der Automobilstadt mit schwäbischer Präzision.",
          population: "630.000 Einwohner"
        },
        {
          name: "Düsseldorf",
          slug: "duesseldorf",
          image: "https://images.unsplash.com/photo-1551975074-52ec8ac997ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Elegante Badsanierung in der Mode- und Kunststadt am Rhein.",
          population: "650.000 Einwohner"
        },
        {
          name: "Dortmund",
          slug: "dortmund",
          image: "https://images.unsplash.com/photo-1471919743851-c4df8b6eefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Zuverlässige Badsanierung im Herzen des Ruhrgebiets.",
          population: "590.000 Einwohner"
        },
        {
          name: "Essen",
          slug: "essen",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Qualitätsvolle Badsanierung in der Kulturhauptstadt 2010.",
          population: "580.000 Einwohner"
        },
        {
          name: "Leipzig",
          slug: "leipzig",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Moderne Badsanierung in der sächsischen Metropole.",
          population: "600.000 Einwohner"
        },
        {
          name: "Dresden",
          slug: "dresden",
          image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Erstklassige Badsanierung in der Kulturstadt an der Elbe.",
          population: "560.000 Einwohner"
        },
        {
          name: "Hannover",
          slug: "hannover",
          image: "https://images.unsplash.com/photo-1551975074-52ec8ac997ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Professionelle Badsanierung in der niedersächsischen Landeshauptstadt.",
          population: "540.000 Einwohner"
        },
        {
          name: "Nürnberg",
          slug: "nuernberg",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Traditionelle Badsanierung in der fränkischen Metropole.",
          population: "520.000 Einwohner"
        },
        {
          name: "Bremen",
          slug: "bremen",
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d14d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Maritime Badsanierung in der Hansestadt Bremen.",
          population: "570.000 Einwohner"
        },
        {
          name: "Freiburg",
          slug: "freiburg",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Umweltfreundliche Badsanierung in der Schwarzwaldmetropole.",
          population: "230.000 Einwohner"
        },
        {
          name: "Mainz",
          slug: "mainz",
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Qualitätsvolle Badsanierung in der rheinland-pfälzischen Landeshauptstadt.",
          population: "220.000 Einwohner"
        },
        {
          name: "Lübeck",
          slug: "luebeck",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Hanseatische Badsanierung in der UNESCO-Welterbestadt.",
          population: "217.000 Einwohner"
        },
        {
          name: "Erfurt",
          slug: "erfurt",
          image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Traditionelle Badsanierung in der thüringischen Landeshauptstadt.",
          population: "214.000 Einwohner"
        },
        {
          name: "Rostock",
          slug: "rostock",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Maritime Badsanierung an der Ostseeküste.",
          population: "209.000 Einwohner"
        },
        {
          name: "Kassel",
          slug: "kassel",
          image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Moderne Badsanierung in der documenta-Stadt.",
          population: "202.000 Einwohner"
        },
        {
          name: "Hagen",
          slug: "hagen",
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d14d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Zuverlässige Badsanierung im südlichen Ruhrgebiet.",
          population: "188.000 Einwohner"
        },
        {
          name: "Hamm",
          slug: "hamm",
          image: "https://images.unsplash.com/photo-1595655931695-059d14e2447d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Professionelle Badsanierung in der westfälischen Stadt.",
          population: "179.000 Einwohner"
        },
        {
          name: "Saarbrücken",
          slug: "saarbruecken",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Grenznahe Badsanierung in der saarländischen Landeshauptstadt.",
          population: "180.000 Einwohner"
        },
        {
          name: "Mülheim an der Ruhr",
          slug: "muelheim",
          image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Hochwertige Badsanierung an der Ruhr.",
          population: "170.000 Einwohner"
        },
        {
          name: "Oldenburg",
          slug: "oldenburg",
          image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Moderne Badsanierung in der niedersächsischen Universitätsstadt.",
          population: "170.000 Einwohner"
        },
        {
          name: "Osnabrück",
          slug: "osnabrueck",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Friedensstädtische Badsanierung in der historischen Stadt.",
          population: "165.000 Einwohner"
        },
        {
          name: "Leverkusen",
          slug: "leverkusen",
          image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Innovative Badsanierung in der Chemie- und Pharmastadt.",
          population: "164.000 Einwohner"
        },
        {
          name: "Solingen",
          slug: "solingen",
          image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Präzise Badsanierung in der Klingenstadt.",
          population: "159.000 Einwohner"
        },
        {
          name: "Heidelberg",
          slug: "heidelberg",
          image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Romantische Badsanierung in der Universitätsstadt am Neckar.",
          population: "159.000 Einwohner"
        },
        {
          name: "Paderborn",
          slug: "paderborn",
          image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Historische Badsanierung in der Dom- und Universitätsstadt.",
          population: "152.000 Einwohner"
        },
        {
          name: "Darmstadt",
          slug: "darmstadt",
          image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Wissenschaftlich präzise Badsanierung in der Wissenschaftsstadt.",
          population: "159.000 Einwohner"
        },
        {
          name: "Regensburg",
          slug: "regensburg",
          image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Mittelalterliche Badsanierung in der UNESCO-Welterbestadt.",
          population: "153.000 Einwohner"
        },
        {
          name: "Würzburg",
          slug: "wuerzburg",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Fränkische Badsanierung in der Residenzstadt am Main.",
          population: "127.000 Einwohner"
        },
        {
          name: "Ingolstadt",
          slug: "ingolstadt",
          image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Automobilstädtische Badsanierung mit bayerischer Tradition.",
          population: "138.000 Einwohner"
        },
        {
          name: "Potsdam",
          slug: "potsdam",
          image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Königliche Badsanierung in der brandenburgischen Landeshauptstadt.",
          population: "185.000 Einwohner"
        },
        {
          name: "Recklinghausen",
          slug: "recklinghausen",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Ruhrgebietstypische Badsanierung mit moderner Ausstattung.",
          population: "112.000 Einwohner"
        },
        {
          name: "Göttingen",
          slug: "goettingen",
          image: "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Universitäre Badsanierung in der niedersächsischen Universitätsstadt.",
          population: "118.000 Einwohner"
        },
        {
          name: "Hildesheim",
          slug: "hildesheim",
          image: "https://images.unsplash.com/photo-1494522358652-f30e61a5fd77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Mittelalterliche Badsanierung in der UNESCO-Welterbestadt.",
          population: "104.000 Einwohner"
        },
        {
          name: "Wolfsburg",
          slug: "wolfsburg",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Automobilstädtische Badsanierung mit niedersächsischer Qualität.",
          population: "125.000 Einwohner"
        },
        {
          name: "Salzgitter",
          slug: "salzgitter",
          image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Industrielle Badsanierung in der Stahlstadt Niedersachsens.",
          population: "105.000 Einwohner"
        },
        {
          name: "Schwerin",
          slug: "schwerin",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Märchenhafte Badsanierung in der mecklenburgischen Landeshauptstadt.",
          population: "95.000 Einwohner"
        },
        {
          name: "Cottbus",
          slug: "cottbus",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Lausitzer Badsanierung in der brandenburgischen Universitätsstadt.",
          population: "99.000 Einwohner"
        },
        {
          name: "Koblenz",
          slug: "koblenz",
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Rheinland-pfälzische Badsanierung am Deutschen Eck.",
          population: "114.000 Einwohner"
        },
        {
          name: "Siegen",
          slug: "siegen",
          image: "https://images.unsplash.com/photo-1519452634681-4d9183532e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Südwestfälische Badsanierung in der Universitätsstadt.",
          population: "102.000 Einwohner"
        },
        {
          name: "Bergisch Gladbach",
          slug: "bergischgladbach",
          image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Bergische Badsanierung in der rheinischen Stadt.",
          population: "111.000 Einwohner"
        },
        {
          name: "Gera",
          slug: "gera",
          image: "https://images.unsplash.com/photo-1529696657574-4dbf86aa696d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Thüringische Badsanierung in der Otto-Dix-Stadt.",
          population: "93.000 Einwohner"
        },
        {
          name: "Bottrop",
          slug: "bottrop",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Ruhrgebietliche Badsanierung mit innovativen Lösungen.",
          population: "116.000 Einwohner"
        },
        {
          name: "Remscheid",
          slug: "remscheid",
          image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Bergische Badsanierung in der Werkzeugstadt.",
          population: "110.000 Einwohner"
        },
        {
          name: "Bremerhaven",
          slug: "bremerhaven",
          image: "https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Maritime Badsanierung in der Seestadt.",
          population: "114.000 Einwohner"
        },
        {
          name: "Fürth",
          slug: "fuerth",
          image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Fränkische Badsanierung in der Kleeblattstadt.",
          population: "129.000 Einwohner"
        },
        {
          name: "Reutlingen",
          slug: "reutlingen",
          image: "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Schwäbische Badsanierung vor der Schwäbischen Alb.",
          population: "117.000 Einwohner"
        },
        {
          name: "Kempten",
          slug: "kempten",
          image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Allgäuer Badsanierung in der ältesten Stadt Deutschlands.",
          population: "69.000 Einwohner"
        },
        {
          name: "Moers",
          slug: "moers",
          image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Niederrheinische Badsanierung in der Grafenstadt.",
          population: "104.000 Einwohner"
        },
        {
          name: "Erlangen",
          slug: "erlangen",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Universitäre Badsanierung in der Hugenottenstadt.",
          population: "113.000 Einwohner"
        },
        {
          name: "Jena",
          slug: "jena",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Thüringische Badsanierung in der Universitäts- und Optikstadt.",
          population: "108.000 Einwohner"
        },
        {
          name: "Trier",
          slug: "trier",
          image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Römische Badsanierung in Deutschlands ältester Stadt.",
          population: "110.000 Einwohner"
        },
        {
          name: "Ulm",
          slug: "ulm",
          image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Münsterstadt-Badsanierung an der Donau.",
          population: "126.000 Einwohner"
        },
        {
          name: "Pforzheim",
          slug: "pforzheim",
          image: "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Goldstadt-Badsanierung in Baden-Württemberg.",
          population: "125.000 Einwohner"
        },
        {
          name: "Offenbach",
          slug: "offenbach",
          image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Design-orientierte Badsanierung in der Lederstadt.",
          population: "131.000 Einwohner"
        },
        {
          name: "Bochum",
          slug: "bochum",
          image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Ruhrpott-Badsanierung in der Universitätsstadt.",
          population: "365.000 Einwohner"
        },
        {
          name: "Neuss",
          slug: "neuss",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Rheinische Badsanierung in der Quirinus-Stadt.",
          population: "153.000 Einwohner"
        },
        {
          name: "Mönchengladbach",
          slug: "moenchengladbach", 
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Niederrheinische Badsanierung in der Vitusstadt.",
          population: "261.000 Einwohner"
        },
        {
          name: "Wuppertal",
          slug: "wuppertal",
          image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Schwebebahn-Stadt Badsanierung im Bergischen Land.",
          population: "355.000 Einwohner"
        },
        {
          name: "Gelsenkirchen",
          slug: "gelsenkirchen",
          image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Ruhrgebiet-Badsanierung in der Schalke-Stadt.",
          population: "260.000 Einwohner"
        },
        {
          name: "Krefeld",
          slug: "krefeld",
          image: "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Samt- und Seiden-Stadt Badsanierung am Niederrhein.",
          population: "227.000 Einwohner"
        },
        {
          name: "Halle",
          slug: "halle",
          image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Händelstadt-Badsanierung in Sachsen-Anhalt.",
          population: "238.000 Einwohner"
        },
        {
          name: "Magdeburg",
          slug: "magdeburg",
          image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Domstadt-Badsanierung in der Landeshauptstadt Sachsen-Anhalts.",
          population: "237.000 Einwohner"
        },
        {
          name: "Chemnitz",
          slug: "chemnitz",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Sächsische Badsanierung in der Karl-Marx-Stadt.",
          population: "246.000 Einwohner"
        },
        {
          name: "Charlottenburg",
          slug: "charlottenburg",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Exklusive Badsanierung im noblen Berliner Bezirk.",
          population: "340.000 Einwohner"
        },
        {
          name: "Altona",
          slug: "altona",
          image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Maritime Badsanierung im hippen Hamburger Stadtteil.",
          population: "275.000 Einwohner"
        },
        {
          name: "Schwabing",
          slug: "schwabing",
          image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Künstlerische Badsanierung im Münchner Szeneviertel.",
          population: "115.000 Einwohner"
        },
        {
          name: "Prenzlauer Berg",
          slug: "prenzlauerberg",
          image: "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Hippe Badsanierung im beliebten Berliner Kiez.",
          population: "165.000 Einwohner"
        },
        {
          name: "Kreuzberg",
          slug: "kreuzberg",
          image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Alternative Badsanierung im multikulturellen Berlin-Kreuzberg.",
          population: "155.000 Einwohner"
        },
        {
          name: "St. Pauli",
          slug: "stpauli",
          image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Kultige Badsanierung im legendären Hamburger Stadtteil.",
          population: "21.000 Einwohner"
        }
      ];

      // Load hero images from city data files
      try {
        const citiesWithImages = await Promise.all(
          cityList.map(async (city) => {
            try {
              const response = await fetch(`/data/badsanierung/${city.slug}.json`);
              const cityData = await response.json();
              return {
                ...city,
                image: cityData.heroImage || city.image
              };
            } catch (error) {
              console.error(`Error loading data for ${city.slug}:`, error);
              return city;
            }
          })
        );
        setCities(citiesWithImages);
      } catch (error) {
        console.error('Error loading city images:', error);
        setCities(cityList);
      }
      
      setLoading(false);
    };

    loadCities();
  }, []);

  useEffect(() => {
    document.title = "Badsanierung in deiner Stadt - badhelden24";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Badsanierung in allen deutschen Großstädten. Finde geprüfte Handwerker in deiner Region.');
    }
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.badhelden24.de', '_blank');
  };

  const handleShowMore = () => {
    setVisibleCities(cities.length);
    setShowingMore(true);
  };

  const handleShowLess = () => {
    setVisibleCities(9);
    setShowingMore(false);
    // Scroll to top of cities section
    document.getElementById('cities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCityClick = (slug: string) => {
    window.location.href = `/badsanierung/${slug}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Städte...</p>
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
              Badsanierung in deiner Stadt
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finde geprüfte Handwerker für deine Badsanierung in ganz Deutschland. 
              Lokale Experten mit nationalen Qualitätsstandards.
            </p>
          </div>

          {/* Cities Grid */}
          <div id="cities-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.slice(0, visibleCities).map((city, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div 
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => handleCityClick(city.slug)}
                  >
                    <img 
                      src={city.image}
                      alt={`Badsanierung ${city.name}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {city.population}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{city.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{city.description}</p>
                    <button 
                      onClick={() => handleCityClick(city.slug)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {cities.length > 9 && (
              <div className="text-center mt-12">
                {!showingMore ? (
                  <Button 
                    onClick={handleShowMore}
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Mehr Städte anzeigen ({cities.length - visibleCities} weitere)
                  </Button>
                ) : (
                  <Button 
                    onClick={handleShowLess}
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-400 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    Weniger anzeigen
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Deine Stadt ist nicht dabei?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Kein Problem! Wir sind deutschlandweit tätig und finden auch in deiner Region den passenden Handwerker.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Jetzt anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/FavIcon%20500%20x%20500%20%281%29-VYpwjV6yIfD1z9XEUUqmlnOVoD2NDo.svg"
                alt="badhelden24 Logo"
                className="h-8 mb-4"
              />
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

export default BadsanierungListPage;
