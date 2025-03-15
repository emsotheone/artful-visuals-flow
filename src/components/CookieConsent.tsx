
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookiePreference {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreference>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user already made a choice
    const hasConsent = localStorage.getItem('cookieConsent');
    
    if (!hasConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    setPreferences(allPreferences);
    saveCookiePreferences(allPreferences);
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    setPreferences(necessaryPreferences);
    saveCookiePreferences(necessaryPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);
    setIsVisible(false);
  };

  const saveCookiePreferences = (prefs: CookiePreference) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    
    // Here you would actually set/unset cookies based on preferences
    console.log('Cookie preferences saved:', prefs);
  };

  const togglePreference = (key: keyof CookiePreference) => {
    if (key === 'necessary') return; // Necessary cookies can't be toggled
    
    setPreferences({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto neo-blur rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-white text-xl font-medium mb-3">Datenschutz-Einstellungen</h3>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>
          </div>
          
          <p className="text-white/80 mb-6">
            Diese Website verwendet Cookies, um dein Nutzungserlebnis zu verbessern. Einige Cookies sind technisch notwendig, andere helfen uns, die Seite zu verbessern und dir relevante Inhalte anzuzeigen.
          </p>
          
          {showDetails && (
            <div className="mb-6 space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Notwendige Cookies</h4>
                  <p className="text-white/60 text-sm">Diese Cookies sind für die Funktionalität der Website erforderlich.</p>
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={preferences.necessary} 
                    disabled
                    className="sr-only"
                    id="necessary-cookies"
                  />
                  <label
                    htmlFor="necessary-cookies"
                    className="block w-10 h-6 rounded-full bg-white/20 cursor-not-allowed"
                  >
                    <span 
                      className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform`}
                    ></span>
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Analytische Cookies</h4>
                  <p className="text-white/60 text-sm">Diese Cookies ermöglichen es uns, die Nutzung der Website zu analysieren.</p>
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={() => togglePreference('analytics')}
                    className="sr-only"
                    id="analytics-cookies"
                  />
                  <label
                    htmlFor="analytics-cookies"
                    className="block w-10 h-6 rounded-full bg-white/20 cursor-pointer"
                  >
                    <span 
                      className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        preferences.analytics ? 'transform translate-x-4' : ''
                      }`}
                    ></span>
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Marketing Cookies</h4>
                  <p className="text-white/60 text-sm">Diese Cookies ermöglichen es uns, personalisierte Inhalte anzuzeigen.</p>
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={() => togglePreference('marketing')}
                    className="sr-only"
                    id="marketing-cookies"
                  />
                  <label
                    htmlFor="marketing-cookies"
                    className="block w-10 h-6 rounded-full bg-white/20 cursor-pointer"
                  >
                    <span 
                      className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        preferences.marketing ? 'transform translate-x-4' : ''
                      }`}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="text-white/70 hover:text-white transition-colors"
            >
              {showDetails ? 'Weniger anzeigen' : 'Einstellungen anpassen'}
            </button>
            <button 
              onClick={handleAcceptNecessary}
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              Nur notwendige
            </button>
            {showDetails ? (
              <button 
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              >
                Einstellungen speichern
              </button>
            ) : (
              <button 
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              >
                Alle akzeptieren
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
