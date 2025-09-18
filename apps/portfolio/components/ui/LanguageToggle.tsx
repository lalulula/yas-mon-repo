'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function LanguageToggle() {
  const { i18n, t: translate } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    mounted && (
      <div className="w-full">
        <h3 className="text-white/80 text-lg font-medium mb-3">
          {translate('sidebar.language')}
        </h3>
        <motion.button
          onClick={toggleLanguage}
          className="w-full px-3 py-2 text-sm font-medium text-sidebar-deactivated bg-white/10 rounded-lg hover:text-white hover:bg-white/20 transition-colors text-left"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {i18n.language === 'en' ? '한국어' : 'English'}
        </motion.button>
      </div>
    )
  );
}
