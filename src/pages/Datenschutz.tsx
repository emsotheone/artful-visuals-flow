
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Datenschutz = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-wide mb-8 text-foreground">
            Datenschutzerklärung
          </h1>
          
          <div className={`prose ${theme === 'light' ? 'prose-gray' : 'prose-invert'} max-w-none`}>
            <h2>1. Allgemeine Informationen</h2>
            <p>
              Diese Datenschutzerklärung informiert über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten 
              (nachfolgend kurz „Daten") im Rahmen unseres Onlineangebotes und der mit ihm verbundenen Webseiten, 
              Funktionen und Inhalte. Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. 
              „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der 
              Datenschutzgrundverordnung (DSGVO).
            </p>
            
            <h3>Verantwortlicher</h3>
            <p>
              Robert Pods<br />
              Kreativstraße 42<br />
              60313 Frankfurt am Main<br />
              Deutschland
            </p>
            <p>
              E-Mail: info@robertspods.de<br />
              Telefon: +49 (0) 69 123 456 789
            </p>
            
            <h2>2. Arten der verarbeiteten Daten</h2>
            <p>
              Wir verarbeiten folgende personenbezogene Daten unserer Nutzer:
            </p>
            <ul>
              <li>Kontaktdaten (z.B. Name, E-Mail-Adresse, Telefonnummer)</li>
              <li>Inhaltsdaten (z.B. Texteingaben im Kontaktformular)</li>
              <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
              <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
            </ul>
            
            <h2>3. Zweck und Rechtsgrundlage der Datenverarbeitung</h2>
            
            <h3>Kontaktaufnahme und Angebotsabwicklung</h3>
            <p>
              Die Verarbeitung Ihrer Daten im Rahmen des Kontaktformulars erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO 
              zur Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung eines Vertrags. Die Angaben, die Sie uns im Kontaktformular 
              bereitstellen (Name, E-Mail-Adresse, gewünschter Service, Nachricht und optional Telefonnummer), werden ausschließlich 
              zum Zweck der Bearbeitung Ihrer Anfrage verwendet.
            </p>
            
            <h3>Social Media-Einbindung</h3>
            <p>
              Die Einbindung unserer Social Media-Profile (Instagram) erfolgt auf Grundlage unseres berechtigten Interesses 
              nach Art. 6 Abs. 1 lit. f DSGVO. Hierbei haben wir ein berechtigtes Interesse daran, unser Angebot zu präsentieren 
              und unsere Reichweite zu erhöhen.
            </p>
            
            <h2>4. Empfänger der Daten</h2>
            <p>
              Ihre personenbezogenen Daten werden an Dritte nur weitergegeben oder offengelegt, wenn dies zum Zweck der Vertragsabwicklung 
              oder Abrechnung erforderlich ist oder Sie eingewilligt haben. Die Übermittlung erfolgt nur, soweit dies zu den genannten 
              Zwecken erforderlich ist. Dazu zählen:
            </p>
            <ul>
              <li>Unser Hosting-Anbieter, der die Website und deren Inhalte sowie eingehende Anfragen verarbeitet</li>
              <li>Dienstleister zur Bearbeitung von Anfragen und Aufträgen</li>
            </ul>
            
            <h2>5. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für die Zwecke, für die sie verarbeitet werden, erforderlich ist. 
              Die über das Kontaktformular übermittelten Daten werden gelöscht, sobald Ihre Anfrage vollständig bearbeitet wurde und der jeweilige 
              Sachverhalt abschließend geklärt ist, es sei denn, wir sind gesetzlich zu einer längeren Speicherung verpflichtet oder 
              berechtigt.
            </p>
            
            <h2>6. Rechte der betroffenen Personen</h2>
            <p>
              Als betroffene Person haben Sie folgende Rechte:
            </p>
            <ul>
              <li>Auskunftsrecht (Art. 15 DSGVO): Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und Auskunft über diese Daten sowie weitere Informationen zu erhalten.</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO): Sie haben das Recht, die Vervollständigung oder Berichtigung unrichtiger Sie betreffender personenbezogener Daten zu verlangen.</li>
              <li>Recht auf Löschung (Art. 17 DSGVO): Sie haben das Recht, die Löschung Sie betreffender personenbezogener Daten zu verlangen.</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO): Sie haben das Recht, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.</li>
            </ul>
            <p>
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an die oben genannte Kontaktadresse.
            </p>
            
            <h2>7. Datensicherheit</h2>
            <p>
              Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten 
              und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit 
              und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, 
              um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle 
              des physischen Zugangs zu den Daten, sowie des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit 
              und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten 
              und Reaktion auf Gefährdung der Daten gewährleisten.
            </p>
            
            <h2>8. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. 
              Sie richten keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
              und sicherer zu machen.
            </p>
            <p>
              Wir verwenden hauptsächlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Darüber hinaus 
              setzen wir optional Cookies zur Analyse des Nutzerverhaltens ein, jedoch nur mit Ihrer ausdrücklichen Einwilligung.
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, 
              die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen 
              des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            
            <h2>9. Einbindung von Instagram</h2>
            <p>
              Auf unserer Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch 
              Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA, integriert. Wenn Sie in Ihrem Instagram-Account eingeloggt sind, 
              können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. 
              Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
            </p>
            <p>
              Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren 
              Nutzung durch Instagram erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: 
              <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer" className="ml-1">
                https://instagram.com/about/legal/privacy/
              </a>
            </p>
            
            <h2>10. Kontakt für Datenschutzanfragen</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
              Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen oder Widerspruch 
              gegen eine bestimmte Datenverwendung wenden Sie sich bitte direkt an:
            </p>
            <p>
              Robert Pods<br />
              E-Mail: info@robertspods.de
            </p>
            
            <h2>11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2023.
            </p>
            <p>
              Wir behalten uns vor, die Datenschutzerklärung zu ändern, um sie an geänderte Rechtslagen, oder bei Änderungen des Dienstes 
              sowie der Datenverarbeitung anzupassen. Wir empfehlen daher, sich regelmäßig über deren Inhalt zu informieren.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-[#FFCC00] text-black rounded-lg hover:bg-[#FFCC00]/90 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
