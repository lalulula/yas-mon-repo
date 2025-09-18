import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type React from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: '김윤아 - portfolio',
  description:
    'Frontend Developer crafting digital experiences at the intersection of design, technology, and user experience.',
  keywords: [
    'Frontend Developer',
    'Next.js',
    'TypeScript',
    'React',
    'Web Development'
  ],
  authors: [{ name: '김윤아' }],
  creator: '김윤아',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yunahkim.dev',
    title: '김윤아 - Frontend Developer',
    description:
      'Frontend Developer crafting digital experiences at the intersection of design, technology, and user experience.',
    siteName: '김윤아 Portfolio'
  },
  robots: {
    index: true,
    follow: true
  },
  generator: 'v0.app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
