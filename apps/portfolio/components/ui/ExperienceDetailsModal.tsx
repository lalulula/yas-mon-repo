"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";

interface ExperienceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  company: string;
  position: string;
  period: string;
  description?: string;
  details?: Array<{
    title: string;
    description?: string;
  }>;
}

export function ExperienceDetailsModal({
  isOpen,
  onClose,
  company,
  position,
  period,
  description,
  details
}: ExperienceDetailsModalProps) {
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  const handlePrevious = () => {
    if (details && details.length > 0) {
      setCurrentDetailIndex((prev) => (prev === 0 ? details.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (details && details.length > 0) {
      setCurrentDetailIndex((prev) => (prev === details.length - 1 ? 0 : prev + 1));
    }
  };

  if (typeof window === 'undefined') return null;

  // Use createPortal to render the modal in the body
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl bg-modal border border-white/10 rounded-xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-portfolio-gray-default hover:text-portfolio-gray-default-hover transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-portfolio-gray-default-hover mb-2">
                {company}
              </h2>
              <p className="text-lg text-portfolio-gray-default mb-1">
                {position}
              </p>
              <p className="text-sm text-portfolio-gray-transparent">
                {period}
              </p>
            </div>

            {details && details.length > 0 && details[currentDetailIndex] ? (
              <div className="relative">
                <motion.div
                  key={currentDetailIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-portfolio-gray-default-hover mb-2">
                    {details[currentDetailIndex].title}
                  </h3>

                  {details[currentDetailIndex].description && (
                    <p className="text-portfolio-gray-default">
                      {details[currentDetailIndex].description}
                    </p>
                  )}
                </motion.div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="p-2 text-portfolio-gray-default hover:text-portfolio-gray-default-hover transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="text-portfolio-gray-default">
                    {currentDetailIndex + 1} / {details.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2 text-portfolio-gray-default hover:text-portfolio-gray-default-hover transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="text-portfolio-gray-default">
                  {description}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
} 