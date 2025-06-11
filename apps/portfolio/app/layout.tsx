import { pretendard } from "@/lib/fonts";
import "@workspace/ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
