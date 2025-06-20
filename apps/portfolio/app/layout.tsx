import { pretendard } from "@/src/fonts";
import "@workspace/ui/globals.css";
import "./globals.css";
import { I18nProvider } from "@/components/providers/I18nProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} font-sans antialiased bg-portfolio-bg`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
