import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME } from "@/lib/site";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  schemaTypes?: string[];
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
}

export function SEOHead({
  title,
  description,
  canonical,
  ogType = "website",
  schemaTypes = [],
  hasLocalBusiness = false,
  geo,
  business,
  service,
  faqs,
}: SEOHeadProps) {
  const orgName = business?.name || BUSINESS_NAME;
  const orgUrl = business?.url || canonical;
  const ogImage = "https://snslandscaping.org/images/gallery/backyard_concept.jpg";

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${orgUrl}#organization`,
      name: orgName,
      url: orgUrl,
      logo: `${orgUrl}images/gallery/backyard_concept.jpg`,
      ...(business?.sameAs?.length ? { sameAs: business.sameAs } : {}),
      ...(business?.phone
        ? {
            contactPoint: {
              "@type": "ContactPoint",
              telephone: business.phone,
              contactType: "customer service",
              areaServed: business.areaServed ?? [{ name: "Silicon Valley & the San Francisco Bay Area" }],
            },
          }
        : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${orgUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: orgUrl },
        { "@type": "ListItem", position: 2, name: title, item: canonical },
      ],
    },
  ];

  if (schemaTypes.includes("WebSite")) {
    graph.push({
      "@type": "WebSite",
      "@id": `${orgUrl}#website`,
      url: orgUrl,
      name: orgName,
      publisher: { "@id": `${orgUrl}#organization` },
    });
  }

  if (hasLocalBusiness && business?.address) {
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${orgUrl}#localbusiness`,
      name: orgName,
      url: orgUrl,
      telephone: business.phone,
      image: ogImage,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        ...(business.address.streetAddress
          ? { streetAddress: business.address.streetAddress }
          : {}),
        ...(business.address.addressLocality
          ? { addressLocality: business.address.addressLocality }
          : {}),
        ...(business.address.addressRegion
          ? { addressRegion: business.address.addressRegion }
          : {}),
        ...(business.address.postalCode
          ? { postalCode: business.address.postalCode }
          : {}),
        ...(business.address.addressCountry
          ? { addressCountry: business.address.addressCountry }
          : {}),
      },
      ...(geo
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: geo.latitude,
              longitude: geo.longitude,
            },
          }
        : {}),
      ...(business.openingHours?.length
        ? {
            openingHoursSpecification: business.openingHours.map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.dayOfWeek,
              opens: h.opens,
              closes: h.closes,
            })),
          }
        : {}),
      ...(business.areaServed?.length ? { areaServed: business.areaServed } : {}),
    });
  }

  if (schemaTypes.includes("Service") && service) {
    graph.push({
      "@type": "Service",
      "@id": `${orgUrl}#service`,
      name: service.name,
      ...(service.description ? { description: service.description } : {}),
      provider: { "@id": `${orgUrl}#organization` },
      ...(service.areaServed?.length
        ? { areaServed: service.areaServed }
        : business?.areaServed?.length
          ? { areaServed: business.areaServed }
          : {}),
    });
  }

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={orgName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <html lang="en" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {hasLocalBusiness && geo && (
        <>
          <meta name="geo.region" content={geo.region} />
          <meta name="geo.placename" content={geo.placename} />
          <meta name="geo.position" content={`${geo.latitude};${geo.longitude}`} />
          <meta name="ICBM" content={`${geo.latitude}, ${geo.longitude}`} />
        </>
      )}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        })}
      </script>
    </Helmet>
  );
}
