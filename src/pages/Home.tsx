import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight, PhoneCall, MapPin } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  CTA_LABEL,
  PRIMARY_PHONE,
  LICENSE,
} from "@/lib/site";
import { SERVICES, AREAS, GALLERY_ITEMS } from "@/lib/sns-data";

export default function Home() {
  return (
    <Layout
      seo={{
        title: `${BUSINESS_NAME} | Landscaping & Outdoor Living in Silicon Valley`,
        description:
          "Premium landscaping, hardscaping, irrigation, and outdoor living across Silicon Valley and the Bay Area. Licensed & insured. Get a free quote today.",
        canonical: "https://snslandscaping.org/",
        ogType: "website",
        schemaTypes: ["WebSite", "LocalBusiness"],
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
      {/* Hero: split-screen */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/images/gallery/backyard_concept.jpg"
          alt="Landscaped backyard with a stone water fountain, lush lawn, and garden plantings by S&S Landscaping"
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid min-w-0 max-w-7xl gap-8 px-4 pt-20 pb-16 sm:px-6 lg:px-8 md:pt-24 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-6">
            <Badge
              variant="secondary"
              className="h-auto min-h-5 max-w-full whitespace-normal break-words bg-primary-foreground/15 py-1 text-left text-primary-foreground hover:bg-primary-foreground/25"
            >
              {BUSINESS_TAGLINE}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl">
              Outdoor Living, Built to Last
            </h1>
            <p className="max-w-xl text-base text-primary-foreground/90 sm:text-lg">
              From lawns and gardens to patios and irrigation, we design and build landscapes that thrive in the Bay Area.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link to="/contact#quote-form" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">{CTA_LABEL}</Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30 hover:text-primary-foreground sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:justify-center">
            <div className="rounded-2xl border border-white/20 bg-white/15 p-8 shadow-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-primary-foreground">
                Licensed & Insured
              </h2>
              <p className="mt-3 text-primary-foreground/95">
                {LICENSE}. Serving {AREAS.length} communities across Silicon Valley & the Bay Area.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/15 p-8 shadow-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-primary-foreground">
                Two Local Experts
              </h2>
              <p className="mt-3 text-primary-foreground/95">
                Samuel Delgado and Santos Gomez bring years of hands-on landscaping experience to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Complete outdoor living, from the ground up.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card
                key={service.slug}
                className="overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-3">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                    />
                  </div>
                </div>
                <CardHeader>
                  <service.icon
                    className="mb-2 size-8 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.tagline}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Learn more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured areas */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Where We Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Local expertise across Silicon Valley & the Bay Area.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Featured work */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-4 text-muted-foreground">
              A selection of outdoor spaces we've designed and built.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY_ITEMS.slice(0, 3).map((project) => (
              <div key={project.title} className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/gallery" className="inline-block">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-4xl dark:text-slate-950">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="mt-4 text-white/90 dark:text-slate-950/85">
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