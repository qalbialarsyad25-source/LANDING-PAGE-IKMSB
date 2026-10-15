import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKMSB Malang",
  description:
    "Eksplorasi tradisi sakral Mangngaro dari Mamasa, Sulawesi Barat bersama IKMSB. Merawat ingatan leluhur, filosofi Banua Sura', serta kustomisasi 2D karakter busana adat interaktif.",
  keywords: [
    "IKMSB",
    "Mamasa",
    "Sulawesi Barat",
    "Banua Sura",
    "Adat Mamasa",
    "Tradisi Nusantara",
    "Karakter Adat",
  ],
  authors: [{ name: "IKMSB Budaya" }],
  openGraph: {
    title: "IKMSB Malang",
    description:
      "Jelajahi keagungan tradisi Mangngaro, arsitektur Banua Sura', dan buat avatar karakter adat Mamasa secara interaktif.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cinzel:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#fcfdfa] text-[#0a2617] selection:bg-[#134e2f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
