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
import { ArrowRight, PhoneCall, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE, BUSINESS_ADDRESS, SAME_AS } from "@/lib/site";
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
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h1 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl">
              Area Not Found
            </h1>
            <Link to="/" className="mt-6 inline-block">
              <Button size="lg" className="rounded-full">Back Home</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const otherAreas = AREAS.filter((a) => a.slug !== area.slug);

  const areaSpecificFaqs = [
    {
      question: `What landscaping services do you offer in ${area.name}?`,
      answer: `We offer the full range of S&S Landscaping services in ${area.name}, including landscaping and planting, hardscaping (patios, walkways, retaining walls), site preparation and grading, irrigation and drainage, and outdoor amenities like water features and landscape lighting.`,
    },
    {
      question: `How long has S&S Landscaping been serving ${area.name}?`,
      answer: `We serve ${area.name} and all ${area.county} County communities as part of our 16-city service area across Silicon Valley and the Bay Area. We're locally owned, licensed (LIC 100-7487), and insured.`,
    },
    {
      question: `Do you offer free quotes in ${area.name}?`,
      answer: `Yes, we provide free quotes for all landscaping and hardscaping projects in ${area.name} and the surrounding ${area.metro} area. Call us directly or fill out our online quote form.`,
    },
  ];

  const serviceFaqs = SERVICES.flatMap((s) => s.faqs).slice(0, 5);
  const allFaqs = [...areaSpecificFaqs, ...serviceFaqs];

  return (
    <Layout
      seo={{
        title: `Landscaping in ${area.name}, CA | ${BUSINESS_NAME}`,
        description: `Professional landscaping, hardscaping, irrigation, and outdoor living services in ${area.name}, ${area.county} County. Serving ${area.metro} and the Bay Area. Get a free quote from ${BUSINESS_NAME}.`,
        canonical: `https://snslandscaping.org/areas/${area.slug}`,
        ogImage: "https://snslandscaping.org/images/gallery/backyard_concept.jpg",
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
        sameAs: SAME_AS,
        address: {
          streetAddress: BUSINESS_ADDRESS.streetAddress,
          addressLocality: BUSINESS_ADDRESS.addressLocality,
          addressRegion: BUSINESS_ADDRESS.addressRegion,
          postalCode: BUSINESS_ADDRESS.postalCode,
          addressCountry: BUSINESS_ADDRESS.addressCountry,
        },
        areaServed: [{ name: area.name }],
      }}
      faqs={allFaqs}
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/images/gallery/backyard_concept.jpg"
          alt="Landscaped backyard with a stone water fountain and lush garden by S&S Landscaping"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/45 to-espresso/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-6">
            <Reveal variant="fade">
              <div className="flex size-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                <MapPin className="size-7 text-white" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-heading text-4xl font-medium tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
                Landscaping in {area.name}, CA
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-xl text-lg text-white/80 md:text-xl">
                {area.name} is in {area.county} County, in the heart of {area.metro}. We bring premium landscaping and outdoor living to your community.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link to="/contact#quote-form" className="w-full sm:w-auto">
                  <Button size="lg" variant="cta" className="group/button btn-lg-pad-end w-full rounded-full py-3.5 text-base font-semibold sm:w-auto">
                    {CTA_LABEL}
                    <span className="btn-icon-circle btn-icon-circle-light ml-2">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Button>
                </Link>
                <a href={PRIMARY_PHONE.phoneHref} className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="btn-lg-pad w-full rounded-full border-white/30 bg-white/10 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-fluid hover:bg-white/20 hover:text-white sm:w-auto">
                    <PhoneCall data-icon="inline-start" />
                    {PRIMARY_PHONE.phone}
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>{area.name}</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                Landscaping Services in {area.name}
              </h2>
              <p className="mt-4 text-muted-foreground">
                From lawn installation and garden design to hardscaping, irrigation, and landscape lighting, we handle every aspect of your outdoor project with the same attention to detail.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 60}>
                <Link to={`/services/${service.slug}`} className="group block h-full">
                  <div className="bezel h-full">
                    <div className="bezel-inner relative flex h-full flex-col">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                        <div className="absolute left-4 top-4">
                          <div className="flex size-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                            <service.icon className="size-5 text-white" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 p-5">
                        <h3 className="font-heading text-xl font-medium text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.tagline}</p>
                        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                          {service.name} in {area.name}
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

      {/* FAQ */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                Landscaping FAQ for {area.name}
              </h2>
              <p className="mt-4 text-muted-foreground">
                Common questions about our landscaping services in {area.name}.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Accordion className="mt-16 w-full">
              {allFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Explore</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                Other Areas We Serve
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherAreas.map((other, i) => (
              <Reveal key={other.slug} delay={(i % 4) * 50}>
                <Link to={`/areas/${other.slug}`} className="group block h-full">
                  <div className="bezel h-full">
                    <div className="bezel-inner flex h-full flex-col gap-3 p-6">
                      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                        <MapPin className="size-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-xl font-medium text-foreground">{other.name}</h3>
                      <p className="text-sm text-muted-foreground">{other.county} County</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                        Landscaping in {other.name}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
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
              Landscaping in {area.name}
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Get a free quote for your {area.name} project today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button size="lg" variant="cta" className="group/button btn-lg-pad-end rounded-full py-3.5 text-base font-semibold">
                  {CTA_LABEL}
                  <span className="btn-icon-circle btn-icon-circle-light ml-2">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="btn-lg-pad rounded-full border-white/20 bg-white/10 py-3.5 text-base font-semibold text-white transition-fluid hover:bg-white/20 hover:text-white">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-white/50">We respond within 24 hours — no obligation.</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
