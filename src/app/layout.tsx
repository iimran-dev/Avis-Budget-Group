import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avis Budget Group | Driving the Future of Mobility",
  description:
    "Avis Budget Group is a leading global provider of mobility solutions, operating three of the most recognized brands in the travel industry: Avis, Budget and Zipcar.",
  keywords: [
    "Avis Budget Group",
    "Avis Car Rental",
    "Budget Car Rental",
    "Zipcar",
    "Global Mobility Solutions",
    "Connected Fleet",
    "EV Mobility",
    "Investor Relations NASDAQ CAR",
  ],
  openGraph: {
    title: "Avis Budget Group | Driving the Future of Mobility",
    description:
      "Delivering innovative mobility solutions that are safe, sustainable and accessible for all.",
    siteName: "Avis Budget Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis Budget Group | Driving the Future of Mobility",
    description:
      "Delivering innovative mobility solutions that are safe, sustainable and accessible for all.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased bg-white text-slate-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
