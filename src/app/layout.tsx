import type { Metadata } from "next";
import { Alex_Brush, Cormorant_Garamond, Assistant } from "next/font/google";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const assistant = Assistant({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "hebrew"],
  variable: "--font-assistant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Inbal Photography | צילומי הריון ומשפחה",
    template: "%s | Inbal Photography",
  },
  description: "Professional maternity and family photography in Israel. צילומי הריון ומשפחה מקצועיים בישראל.",
  keywords: ["photography", "maternity", "family", "Israel", "צילום", "הריון", "משפחה", "ענבל"],
  authors: [{ name: "Inbal Photography" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    alternateLocale: "en_US",
    siteName: "Inbal Photography",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inbal Photography",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${alexBrush.variable} ${cormorantGaramond.variable} ${assistant.variable} font-sans antialiased bg-background text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
