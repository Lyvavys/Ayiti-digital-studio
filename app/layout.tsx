import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Police du texte courant
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Police des titres
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Adresse officielle du site (utilisée pour l'aperçu WhatsApp, Google, etc.)
const urlDuSite = "https://ayiti-digital-studio.vercel.app";

const description =
  "Sites web, outils IA et systèmes de gestion pour les petits commerces en Haïti : restaurants, hôtels, écoles et boutiques. Contact direct par WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(urlDuSite),
  title: {
    default: "Ayiti Digital Studio – Sites web pour petits commerces en Haïti",
    template: "%s | Ayiti Digital Studio",
  },
  description,
  applicationName: "Ayiti Digital Studio",
  keywords: [
    "création site web Haïti",
    "site restaurant Haïti",
    "site hôtel Haïti",
    "développeur web Haïti",
    "outils IA",
    "gestion ventes dépenses",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Ayiti Digital Studio",
    title: "Ayiti Digital Studio – Sites web pour petits commerces en Haïti",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayiti Digital Studio",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1F4D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
