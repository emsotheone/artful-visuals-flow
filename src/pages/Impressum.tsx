
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Impressum = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6 text-center text-foreground">
            IMPRESSUM
          </h1>
          
          <div className="flex justify-center mb-12">
            <Separator className="w-24 h-1 bg-[#FFCC00]" />
          </div>
          
          <div className={`prose ${theme === 'light' ? 'prose-gray' : 'prose-invert'} max-w-none`}>
            <section className="mb-10">
              <h2 className="text-2xl font-display tracking-wide mb-4 text-foreground">ANGABEN GEMÄSS § 5 TMG</h2>
              <p className="text-lg">
                Robert Pods<br />
                Kreativstraße 42<br />
                60313 Frankfurt am Main<br />
                Deutschland
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display tracking-wide mb-4 text-foreground">KONTAKT</h2>
              <div className="flex items-center mb-2">
                <Phone size={20} className="mr-2" />
                <a href="tel:+4969123456789" className="text-lg hover:text-[#FFCC00] transition-colors duration-300">
                  +49 (0) 69 123 456 789
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@robertspods.de" className="text-lg hover:text-[#FFCC00] transition-colors duration-300">
                  info@robertspods.de
                </a>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display tracking-wide mb-4 text-foreground">VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV</h2>
              <p className="text-lg">
                Robert Pods<br />
                Kreativstraße 42<br />
                60313 Frankfurt am Main<br />
                Deutschland
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display tracking-wide mb-4 text-foreground">HAFTUNGSAUSSCHLUSS</h2>
              <p className="text-lg">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display tracking-wide mb-4 text-foreground">URHEBERRECHT</h2>
              <p className="text-lg">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite 
                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display tracking-wide mb-4 text-foreground">STREITSCHLICHTUNG</h2>
              <p className="text-lg mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg inline-block px-4 py-2 bg-white/10 rounded-md hover:bg-[#FFCC00]/20 transition-colors duration-300"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <p className="text-lg mt-4">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-lg mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-[#FFCC00] text-black rounded-lg hover:bg-[#FFCC00]/90 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zurück zur Startseite
            </Link>
            
            <Button
              onClick={() => window.location.href = 'mailto:info@robertspods.de'}
              variant="outline"
              className="px-6 py-3 border border-[#FFCC00]/30 hover:border-[#FFCC00] transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
