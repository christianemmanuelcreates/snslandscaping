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
    ogImage?: string;
    noindex?: boolean;
    schemaTypes?: string[];
    article?: {
      headline: string;
      datePublished: string;
      dateModified: string;
      authorName: string;
      authorUrl?: string;
      image: string;
      section?: string;
    };
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
  faqs?: { question: string; answer: string }[];
  persons?: {
    name: string;
    jobTitle?: string;
    url?: string;
    telephone?: string;
  }[];
}

export function Layout({ children, seo, hasLocalBusiness, geo, business, service, faqs, persons }: LayoutProps) {
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogType={seo.ogType}
        ogImage={seo.ogImage}
        noindex={seo.noindex}
        schemaTypes={seo.schemaTypes}
        article={seo.article}
        hasLocalBusiness={hasLocalBusiness}
        geo={geo}
        business={business}
        service={service}
        faqs={faqs}
        persons={persons}
      />
      <Navbar />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
}