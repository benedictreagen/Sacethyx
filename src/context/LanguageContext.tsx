import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  toggleLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sacethyx_lang');
      if (saved === 'en' || saved === 'id') return saved;
    } catch {
      // fallback
    }
    return 'id'; // default Bahasa Indonesia
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('sacethyx_lang', newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
