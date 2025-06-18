"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ko" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    mounted && <motion.button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 text-sm font-medium text-white bg-black/80 rounded-full hover:bg-black/90 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {i18n.language === "en" ? "한국어" : "English"}
    </motion.button>
  );
} 