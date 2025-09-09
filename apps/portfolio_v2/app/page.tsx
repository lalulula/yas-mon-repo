"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BlogPosts } from "@/components/blog-posts";
import { Navigation } from "@/components/navigation";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkExperience } from "@/components/work-experience";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app min-h-screen bg-background text-foreground relative">
      <Navigation activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO / 2025
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-balance">
                  김윤아
                  <br />
                  <span className="text-muted-foreground">Yunah Kim</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
                  Frontend Developer crafting digital experiences at the
                  intersection of
                  <span className="text-foreground"> design</span>,
                  <span className="text-foreground"> technology</span>, and
                  <span className="text-foreground"> user experience</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Available for work
                  </div>
                  <div>Philippines</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">Frontend Developer</div>
                  <div className="text-muted-foreground">@ Hububble</div>
                  <div className="text-xs text-muted-foreground">
                    2021 — Present
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HubL",
                    "React",
                    "TypeScript",
                    "HubSpot CMS",
                    "Node.js",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs border-border hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Work Section */}
        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light text-balance">
                Selected Work
              </h2>
              <div className="text-sm text-muted-foreground font-mono">
                2019 — 2025
              </div>
            </div>
            <WorkExperience />
          </div>
        </section>

        {/* Thoughts Section */}
        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light text-balance">
              Recent Thoughts
            </h2>
            <BlogPosts />
          </div>
        </section>

        {/* Connect Section */}
        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light text-balance">
                Let's Connect
              </h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:test@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">
                      test@example.com
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>
              <SocialLinks />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 YA. All rights reserved.
              </div>
              <div className="text-xs text-muted-foreground">
                Built with v0.dev by Yunah Kim
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                className="border-border hover:border-muted-foreground/50 bg-transparent"
              >
                <MessageCircle className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors duration-300" />
                <span className="sr-only">Contact</span>
              </Button>
            </div>
          </div>
        </footer>
      </main>

      {/* Bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </div>
  );
}
