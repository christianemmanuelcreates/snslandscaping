import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowRight, PhoneCall, MapPin } from "lucide-react";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import { getArea, SERVICES, AREAS } from "@/lib/sns-data";

export default function AreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = getArea(slug ?? "");

  if (!area) {
    return (
      <Layout
        seo={{
          title: `Area Not Found | ${BUSINESS_NAME}`,
          description: "The service area you requested could not be found.",
          canonical: "https://snslandscaping.org/areas",
        }}
        business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
      >
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Area Not Found
            </h1>
            <Link to="/" className="mt-6 inline-block">
              <Button size="lg">Back Home</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const otherAreas = AREAS.filter((a) => a.slug !== area.slug);

  const allFaqs = SERVICES.flatMap((s) => s.faqs).slice(0, 8);

  return (
    <Layout
      seo={{
        title: `Landscaping in ${area.name}, CA | ${BUSINESS_NAME}`,
        description: `Professional landscaping, hardscaping, irrigation, and outdoor living services in ${area.name}, ${area.county} County. Serving ${area.metro} and the Bay Area. Get a free quote from ${BUSINESS_NAME}.`,
        canonical: `https://snslandscaping.org/areas/${area.slug}`,
        schemaTypes: ["LocalBusiness"],
      }}
      hasLocalBusiness
      geo={{
        region: `US-CA`,
        placename: area.name,
        latitude: area.lat,
        longitude: area.lng,
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
        address: {
          streetAddress: "",
          addressLocality: area.name,
          addressRegion: "CA",
          postalCode: "",
          addressCountry: "US",
        },
        areaServed: [{ name: area.name }],
      }}
      faqs={allFaqs}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/images/gallery/backyard_concept.jpg"
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
              Landscaping in {area.name}, CA
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/90">
              {area.name} is in {area.county} County, in the heart of {area.metro}. We bring premium landscaping and outdoor living to your community.
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

      {/* Services in this area */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Services in {area.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              The full range of landscaping and outdoor living services we deliver in {area.name}.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="h-full overflow-hidden">
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
                  <service.icon className="mb-2 size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.tagline}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    View service
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Landscaping FAQ for {area.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              Common questions about our landscaping services in {area.name}.
            </p>
          </div>
          <Accordion className="mt-12 w-full">
            {allFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Other Areas We Serve
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherAreas.map((other) => (
              <Card key={other.slug} className="h-full">
                <CardHeader>
                  <MapPin className="mb-2 size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{other.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{other.county} County</p>
                  <Link
                    to={`/areas/${other.slug}`}
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
              Landscaping in {area.name}
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Get a free quote for your {area.name} project today.
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
