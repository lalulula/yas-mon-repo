"use client";

import type React from "react";

import { useState, useEffect } from "react";

import { Menu } from "lucide-react";
import { Header } from "../ui/Header";
import { Button } from "@workspace/ui/components/button";
import { HeroSection } from "../sections/HeroSection";
import { AppSidebar } from "./AppSidebar";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="min-h-screen p-2 md:p-4">
      <Header>
        <div className="flex h-full relative">
          {/* Mobile Menu Button - only show when sidebar is closed */}
          {isMobile && !isMobileMenuOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 z-50 bg-black/20 text-white hover:bg-black/30"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}

          {/* Sidebar - hidden on mobile unless menu is open */}
          <div
            className={`${isMobile
              ? isMobileMenuOpen
                ? "absolute inset-y-0 left-0 z-40 transform translate-x-0 transition-transform duration-200 ease-in-out"
                : "absolute inset-y-0 left-0 z-40 transform -translate-x-full transition-transform duration-200 ease-in-out"
              : "relative"
              }`}
          >
            <AppSidebar
              onNavItemClick={() => isMobile && setIsMobileMenuOpen(false)}
              onCloseMenu={() => setIsMobileMenuOpen(false)}
              isMobile={isMobile}
            />
          </div>

          {/* Sidebar Overlay for mobile menu */}
          {isMobile && isMobileMenuOpen && (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              className="fixed inset-0 bg-black/70 z-30 pointer-events-auto touch-none"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className={`flex-1 overflow-y-auto overflow-x-hidden h-full scroll-smooth relative ${isMobile && isMobileMenuOpen ? 'z-20' : 'z-10'}`}>
            <div
              className={`p-4 md:p-8 space-y-8 md:space-y-12 ${isMobile ? "pt-16" : ""}`}
            >
              <HeroSection />
              {children}
            </div>
          </main>
        </div>
      </Header>
    </div>
  );
}
