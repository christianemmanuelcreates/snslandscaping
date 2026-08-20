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
import { ArrowRight, CheckCircle2, PhoneCall, MapPin } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  CTA_LABEL,
  PRIMARY_PHONE,
  LICENSE,
} from "@/lib/site";
import { SERVICES, AREAS, CORE_SERVICES } from "@/lib/sns-data";

export default function Home() {
  return (
    <Layout
      seo={{
        title: `${BUSINESS_NAME} | Landscaping & Outdoor Living in the SF Metro`,
        description:
          "Premium landscaping, hardscaping, irrigation, and outdoor living across the San Francisco Metro Area. Get a free quote today.",
        canonical: "https://snslandscaping.org/",
        ogType: "website",
        schemaTypes: ["WebSite"],
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
        areaServed: AREAS.map((a) => ({ name: a.name })),
      }}
    >
      {/* Hero: split-screen */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pt-20 pb-16 sm:px-6 lg:px-8 md:pt-24 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Badge
              variant="secondary"
              className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25"
            >
              {BUSINESS_TAGLINE}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl">
              Outdoor Living, Built to Last
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/90">
              From lawns and gardens to patios and irrigation, we design and build landscapes that thrive in the Bay Area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg">{CTA_LABEL}</Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-primary-foreground/10 p-8">
              <h2 className="text-2xl font-semibold text-primary-foreground">
                Licensed & Insured
              </h2>
              <p className="mt-3 text-primary-foreground/80">
                {LICENSE}. Serving {AREAS.length} communities across the SF Metro Area.
              </p>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-8">
              <h2 className="text-2xl font-semibold text-primary-foreground">
                Two Local Experts
              </h2>
              <p className="mt-3 text-primary-foreground/80">
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
                className="transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
              >
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
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground"
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
              Local expertise across the SF Metro Area.
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
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground"
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

      {/* Core services highlight */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Core Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              The three services we deliver in every area we serve.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CORE_SERVICES.map((service) => (
              <Card key={service.slug} className="h-full">
                <CardHeader>
                  <service.icon
                    className="mb-2 size-8 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  {CTA_LABEL}
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
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