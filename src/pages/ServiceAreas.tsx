import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight, PhoneCall, MapPin } from "lucide-react";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import { AREAS } from "@/lib/sns-data";

export default function ServiceAreas() {
  return (
    <Layout
      seo={{
        title: `Service Areas in Silicon Valley | ${BUSINESS_NAME}`,
        description:
          "S&S Landscaping serves 16 communities across Silicon Valley and the Bay Area, including Los Gatos, Palo Alto, San Jose, and Mountain View. Get a free quote today.",
        canonical: "https://snslandscaping.org/areas",
        schemaTypes: ["LocalBusiness"],
      }}
      hasLocalBusiness
      geo={{
        region: "US-CA",
        placename: "Silicon Valley",
        latitude: 37.3861,
        longitude: -122.0839,
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
        address: {
          streetAddress: "",
          addressLocality: "Silicon Valley",
          addressRegion: "CA",
          postalCode: "",
          addressCountry: "US",
        },
        areaServed: AREAS.map((a) => ({ name: a.name })),
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/images/Hero_Photo.jpg"
          alt="Landscaped backyard with a stone water fountain and lush garden by S&S Landscaping"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto min-w-0 max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 md:pt-24">
          <div className="flex min-w-0 flex-col gap-6">
            <MapPin className="size-10 text-primary-foreground" aria-hidden="true" />
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl">
              Serving Silicon Valley &amp; the Bay Area
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/90">
              We bring premium landscaping and outdoor living to {AREAS.length} communities across Silicon Valley and the surrounding Bay Area.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link to="/contact#quote-form" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">{CTA_LABEL}</Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/40 bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30 hover:text-primary-foreground">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Communities We Serve
            </h2>
            <p className="mt-4 text-muted-foreground">
              Select your city to see the landscaping services we provide in your area.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {AREAS.map((area) => (
              <Card key={area.slug} className="h-full">
                <CardHeader>
                  <MapPin className="mb-2 size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{area.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.county} County</p>
                  <Link
                    to={`/areas/${area.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    View services
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-primary-foreground md:text-4xl">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Get a free quote from {BUSINESS_NAME} today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button size="lg" className="bg-white text-primary hover:bg-stone-100 hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-stone-100 dark:hover:text-primary">
                  {CTA_LABEL}
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="border-white/70 bg-white text-primary hover:bg-stone-100 hover:text-primary dark:border-white/70 dark:bg-white dark:text-primary dark:hover:bg-stone-100 dark:hover:text-primary">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
