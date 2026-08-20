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
import { CheckCircle2, PhoneCall, ArrowRight, MapPin } from "lucide-react";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import {
  getService,
  getArea,
  matrixTitle,
  matrixDescription,
  CORE_SERVICES,
  AREAS,
} from "@/lib/sns-data";

export default function MatrixDetail() {
  const { serviceSlug, areaSlug } = useParams<{ serviceSlug: string; areaSlug: string }>();
  const service = getService(serviceSlug ?? "");
  const area = getArea(areaSlug ?? "");

  if (!service || !area) {
    return (
      <Layout
        seo={{
          title: `Page Not Found | ${BUSINESS_NAME}`,
          description: "The page you requested could not be found.",
          canonical: "https://snslandscaping.org/",
        }}
        business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
      >
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Page Not Found
            </h1>
            <Link to="/" className="mt-6 inline-block">
              <Button size="lg">Back Home</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const siblingServices = CORE_SERVICES.filter((s) => s.slug !== service.slug);
  const otherAreas = AREAS.filter((a) => a.slug !== area.slug);

  return (
    <Layout
      seo={{
        title: `${matrixTitle(service, area)} | ${BUSINESS_NAME}`,
        description: matrixDescription(service, area),
        canonical: `https://snslandscaping.org/services/${service.slug}/${area.slug}`,
        schemaTypes: ["Service"],
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
        areaServed: [{ name: area.name }],
      }}
      service={{
        name: service.name,
        description: service.description,
        areaServed: [{ name: area.name }],
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 md:pt-24">
          <div className="flex flex-col gap-6">
            <service.icon className="size-10 text-primary-foreground" aria-hidden="true" />
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl">
              {matrixTitle(service, area)}
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/90">
              {service.tagline} in {area.name}, {area.county} County.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg">{CTA_LABEL}</Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + features */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                {service.name} in {area.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.description} We bring this expertise to {area.name} and the surrounding {area.county} County area.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {service.name} in {area.name} FAQ
            </h2>
          </div>
          <Accordion className="mt-12 w-full">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Cross-nav: sibling services in this area */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              More Services in {area.name}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {siblingServices.map((sibling) => (
              <Card key={sibling.slug} className="h-full">
                <CardHeader>
                  <sibling.icon className="mb-2 size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{sibling.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{sibling.tagline}</p>
                  <Link
                    to={`/services/${sibling.slug}/${area.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground"
                  >
                    View in {area.name}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-nav: this service in other areas */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {service.name} in Other Areas
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherAreas.map((other) => (
              <Card key={other.slug} className="h-full">
                <CardHeader>
                  <MapPin className="mb-2 size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{other.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{other.county} County</p>
                  <Link
                    to={`/services/${service.slug}/${other.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground"
                  >
                    View {service.name}
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
              {service.name} in {area.name}
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Get a free quote for your {area.name} project today.
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