
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-wide mb-6 text-foreground">
            KONTAKT
          </h1>
          <p className="text-lg mb-12 text-adaptive">
            Hast du Interesse an einer Zusammenarbeit oder Fragen zu meinen Dienstleistungen? 
            Fülle einfach das Formular aus und ich melde mich zeitnah bei dir zurück.
          </p>
          
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
