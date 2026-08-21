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
import { CircleCheck as CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import { getService, AREAS, CORE_SERVICES } from "@/lib/sns-data";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug ?? "");

  if (!service) {
    return (
      <Layout
        seo={{
          title: `Service Not Found | ${BUSINESS_NAME}`,
          description: "The service you requested could not be found.",
          canonical: "https://snslandscaping.org/services",
        }}
        business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
      >
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Service Not Found
            </h1>
            <Link to="/services" className="mt-6 inline-block">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const siblings = CORE_SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <Layout
      seo={{
        title: `${service.name} | ${BUSINESS_NAME}`,
        description: `${service.description} Get a free quote from ${BUSINESS_NAME} in the SF Metro Area.`,
        canonical: `https://snslandscaping.org/services/${service.slug}`,
        schemaTypes: ["Service"],
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
        areaServed: AREAS.map((a) => ({ name: a.name })),
      }}
      service={{
        name: service.name,
        description: service.description,
        areaServed: AREAS.map((a) => ({ name: a.name })),
      }}
      faqs={service.faqs}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="eager"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 md:pt-24">
          <div className="flex flex-col gap-6">
            <service.icon className="size-10 text-primary-foreground" aria-hidden="true" />
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl">
              {service.name}
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/90">
              {service.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact#quote-form">
                <Button size="lg">{CTA_LABEL}</Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="border-primary-foreground/40 bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/25">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                About {service.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
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
              Frequently Asked Questions
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

      {/* Related services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Related Services
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {siblings.map((sibling) => (
              <Card key={sibling.slug} className="h-full overflow-hidden">
                <div className="p-3">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={sibling.image}
                      alt={sibling.imageAlt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                    />
                  </div>
                </div>
                <CardHeader>
                  <sibling.icon className="mb-2 size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{sibling.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{sibling.tagline}</p>
                  <Link
                    to={`/services/${sibling.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground"
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

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-primary-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Get a free quote for {service.name.toLowerCase()} today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  {CTA_LABEL}
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="border-primary/30 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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
