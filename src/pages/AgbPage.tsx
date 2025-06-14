
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AgbPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            badhelden24
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
              <p className="text-gray-700 mb-4">
                Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen Mike Mildenberger (nachfolgend "Anbieter") und dem Kunden über die Erbringung von Dienstleistungen im Bereich der Badsanierung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 2 Vertragsschluss</h2>
              <p className="text-gray-700 mb-4">
                Der Vertrag kommt durch die Annahme des Angebots des Anbieters durch den Kunden zustande. Die Annahme kann schriftlich, mündlich oder durch schlüssiges Verhalten erfolgen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 3 Leistungsumfang</h2>
              <p className="text-gray-700 mb-4">
                Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung. Änderungen und Ergänzungen bedürfen der Schriftform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
              <p className="text-gray-700 mb-4">
                Die Preise verstehen sich als Festpreise inklusive der gesetzlichen Mehrwertsteuer. Zahlungen sind nach Rechnungsstellung innerhalb von 14 Tagen ohne Abzug fällig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 5 Ausführungsfristen</h2>
              <p className="text-gray-700 mb-4">
                Die vereinbarten Fristen sind verbindlich. Verzögerungen durch höhere Gewalt oder andere unvorhersehbare Umstände berechtigen zur angemessenen Verlängerung der Ausführungsfristen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 6 Gewährleistung</h2>
              <p className="text-gray-700 mb-4">
                Der Anbieter gewährt eine Garantie von 3 Jahren auf alle durchgeführten Arbeiten. Ausgenommen sind Schäden durch unsachgemäße Behandlung oder natürlichen Verschleiß.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 7 Haftung</h2>
              <p className="text-gray-700 mb-4">
                Die Haftung des Anbieters ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit nicht Leben, Körper oder Gesundheit betroffen sind oder eine Garantie übernommen wurde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 8 Datenschutz</h2>
              <p className="text-gray-700 mb-4">
                Der Anbieter verpflichtet sich, alle erhaltenen Daten vertraulich zu behandeln und nur für die Vertragserfüllung zu verwenden. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 9 Schlussbestimmungen</h2>
              <p className="text-gray-700 mb-4">
                Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies nicht die Wirksamkeit der übrigen Bestimmungen. Gerichtsstand ist Bad Honnef.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgbPage;
