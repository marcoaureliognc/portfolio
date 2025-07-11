import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Portfolio created made with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system">
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
