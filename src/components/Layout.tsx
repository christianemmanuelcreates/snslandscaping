import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

interface LayoutProps {
  children: ReactNode;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogType?: string;
    schemaTypes?: string[];
  };
  hasLocalBusiness?: boolean;
  geo?: { region: string; placename: string; latitude: number; longitude: number };
  business?: {
    name: string;
    url?: string;
    sameAs?: string[];
    phone?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    openingHours?: { dayOfWeek: string[]; opens: string; closes: string }[];
    areaServed?: { name: string }[];
  };
  service?: {
    name: string;
    description?: string;
    areaServed?: { name: string }[];
  };
}

export function Layout({ children, seo, hasLocalBusiness, geo, business, service }: LayoutProps) {
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogType={seo.ogType}
        schemaTypes={seo.schemaTypes}
        hasLocalBusiness={hasLocalBusiness}
        geo={geo}
        business={business}
        service={service}
      />
      <Navbar />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
}