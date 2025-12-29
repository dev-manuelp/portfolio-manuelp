import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manuelp.com"),
  title: {
    default: "Manuel Peña · Full-Stack + IA & Big Data",
    template: "%s · Manuel Peña",
  },
  description:
    "Desarrollador Full-Stack especializado en IA y Big Data. Proyectos end-to-end con enfoque en producto, automatización y despliegue real.",
  openGraph: {
    title: "Manuel Peña · Full-Stack + IA & Big Data",
    description:
      "Proyectos end-to-end: datos → modelo → app → despliegue. Full-Stack + IA & Big Data.",
    url: "https://manuelp.com",
    siteName: "Manuel Peña",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manuel Peña · Full-Stack + IA & Big Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel Peña · Full-Stack + IA & Big Data",
    description:
      "Full-Stack + IA & Big Data. Desarrollo de soluciones inteligentes con impacto real.",
    images: ["/og-image.png"],
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
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
