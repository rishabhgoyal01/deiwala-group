import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const description =
  "Manufacturer of PET and HDPE bottles and jars in Kota, Rajasthan. Food-grade packaging in a range of volumes and neck sizes, supplied direct from the factory.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deiwala Plastic Products | PET & HDPE Bottles and Jars",
    template: "%s | Deiwala Plastic Products",
  },
  description,
  keywords: [
    "PET bottles",
    "HDPE bottles",
    "PET jars",
    "HDPE jars",
    "plastic packaging manufacturer",
    "Kota Rajasthan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Deiwala Plastic Products",
    title: "Deiwala Plastic Products | PET & HDPE Bottles and Jars",
    description,
    url: siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deiwala Plastic Products | PET & HDPE Bottles and Jars",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins min-h-screen flex flex-col`} style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}