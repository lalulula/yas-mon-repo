'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  refLink?: string;
}

export function ProjectDetailsModal({
  isOpen,
  onClose,
  title,
  description,
  technologies,
  githubLink,
  refLink
}: ProjectDetailsModalProps) {
  if (typeof window === 'undefined') return null;
  const { t: translate } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted && createPortal(
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
              <h2 className="text-2xl font-bold text-portfolio-gray-default-hover mb-4">
                {title}
              </h2>
              <p className="text-base text-portfolio-gray-default mb-6 whitespace-pre-line">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className=" py-1.5 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {refLink && <a
              href={refLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-gray-default hover:text-portfolio-gray-hover text-xs underline italic transition-colors"
            >
              {translate('projects.demo')}
            </a>}
            <br />
            {githubLink && <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-gray-default hover:text-portfolio-gray-hover text-xs underline italic transition-colors"
            >
              {translate('projects.github')}
            </a>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
