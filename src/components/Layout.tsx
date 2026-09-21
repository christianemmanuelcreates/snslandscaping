import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { SEOHead } from "@/components/SEOHead";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogType?: string;
    ogImage?: string;
    noindex?: boolean;
    noindexFollow?: boolean;
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
  immersiveHero?: boolean;
}

export function Layout({ children, seo, hasLocalBusiness, geo, business, service, faqs, persons, immersiveHero = false }: LayoutProps) {
  const { pathname } = useLocation();
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [pathname]);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogType={seo.ogType}
        ogImage={seo.ogImage}
        noindex={seo.noindex}
        noindexFollow={seo.noindexFollow}
        schemaTypes={seo.schemaTypes}
        article={seo.article}
        hasLocalBusiness={hasLocalBusiness}
        geo={geo}
        business={business}
        service={service}
        faqs={faqs}
        persons={persons}
      />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main className={cn("flex min-h-screen flex-col pb-16 lg:pb-0", immersiveHero ? "pt-0" : "pt-20 lg:pt-24")}>
        <div key={animKey} className="page-enter">
          {children}
        </div>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
