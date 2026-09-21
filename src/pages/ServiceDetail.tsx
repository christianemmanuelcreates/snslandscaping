import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CircleCheck, PhoneCall, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import { getService, SERVICES, AREAS } from "@/lib/sns-data";

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
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h1 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl">
              Service Not Found
            </h1>
            <Link to="/services" className="mt-6 inline-block">
              <Button size="lg" className="rounded-full">View All Services</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const siblings = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 2);

  return (
    <Layout
      seo={{
        title: `${service.name} in Silicon Valley | ${BUSINESS_NAME}`,
        description: `${service.description} Get a free quote from ${BUSINESS_NAME} in Silicon Valley & the Bay Area.`,
        canonical: `https://snslandscaping.org/services/${service.slug}`,
        ogImage: `https://snslandscaping.org${service.image}`,
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
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="eager"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/80 via-espresso/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-6">
            <Reveal variant="fade">
              <div className="flex size-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                <service.icon className="size-7 text-white" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-heading text-4xl font-medium tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
                {service.name}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-xl text-lg text-white/80 md:text-xl">
                {service.tagline}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link to="/contact#quote-form" className="w-full sm:w-auto">
                  <Button size="lg" variant="cta" className="group/button w-full rounded-full px-6 py-3.5 text-base font-semibold sm:w-auto">
                    {CTA_LABEL}
                    <span className="btn-icon-circle btn-icon-circle-light ml-2">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Button>
                </Link>
                <a href={PRIMARY_PHONE.phoneHref} className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full rounded-full border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-fluid hover:bg-white/20 hover:text-white sm:w-auto">
                    <PhoneCall data-icon="inline-start" />
                    {PRIMARY_PHONE.phone}
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                About {service.name}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="bezel h-full">
                <div className="bezel-inner flex flex-col gap-4 p-6 md:p-8">
                  <h3 className="font-heading text-xl font-medium text-foreground">What's Included</h3>
                  <ul className="flex flex-col gap-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                          <CircleCheck className="size-4 text-primary" aria-hidden="true" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Accordion className="mt-16 w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Explore More</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                Related Services
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            {siblings.map((sibling, i) => (
              <Reveal key={sibling.slug} delay={i * 80}>
                <Link to={`/services/${sibling.slug}`} className="group block h-full">
                  <div className="bezel h-full">
                    <div className="bezel-inner relative flex h-full flex-col">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={sibling.image}
                          alt={sibling.imageAlt}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                        <div className="absolute left-4 top-4">
                          <div className="flex size-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                            <sibling.icon className="size-5 text-white" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 p-5">
                        <h3 className="font-heading text-xl font-medium text-foreground">{sibling.name}</h3>
                        <p className="text-sm text-muted-foreground">{sibling.tagline}</p>
                        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                          View service
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow light>Get Started</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Get a free quote for {service.name.toLowerCase()} today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button size="lg" variant="cta" className="group/button rounded-full px-6 py-3.5 text-base font-semibold">
                  {CTA_LABEL}
                  <span className="btn-icon-circle btn-icon-circle-light ml-2">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white transition-fluid hover:bg-white/20 hover:text-white">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
