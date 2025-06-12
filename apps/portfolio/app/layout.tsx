import { pretendard } from "@/lib/fonts";
import "@workspace/ui/globals.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} font-sans antialiased bg-portfolio-bg`}>
        {children}
      </body>
    </html>
  );
}
