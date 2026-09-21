import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, CircleCheck, PhoneCall, ClipboardCheck, PencilRuler, Hammer, Repeat } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import { SERVICES } from "@/lib/sns-data";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const SERVICES_PAGE_FAQS = [
  {
    question: "What landscaping services do you offer in the Bay Area?",
    answer: `S&S Landscaping offers landscaping and planting, hardscaping (patios, walkways, retaining walls), site preparation and grading, irrigation and drainage systems, and outdoor amenities including water features and low-voltage landscape lighting across Silicon Valley and the Bay Area.`,
  },
  {
    question: "Do you serve both residential and commercial properties?",
    answer: `Yes. We handle projects of every scale, from backyard garden refreshes to full commercial property landscapes, with the same commitment to quality and attention to detail.`,
  },
  {
    question: "How do I get a quote for a landscaping project?",
    answer: `You can call us directly or fill out our online quote form on the Contact page. We provide free quotes for all landscaping and hardscaping projects throughout our 16-city service area.`,
  },
];

const PROCESS_STEPS = [
  { icon: ClipboardCheck, title: "Consult", desc: "We visit your property, listen to your goals, and assess the site." },
  { icon: PencilRuler, title: "Design", desc: "We create a plan tailored to your space, budget, and Bay Area climate." },
  { icon: Hammer, title: "Build", desc: "Our team executes with proper base prep, drainage, and quality materials." },
  { icon: Repeat, title: "Maintain", desc: "Seasonal care plans keep your landscape thriving year-round." },
];

export default function Services() {
  return (
    <Layout
      seo={{
        title: `Landscaping Services | ${BUSINESS_NAME}`,
        description:
          "Landscaping & planting, hardscaping, site preparation, irrigation & drainage, and outdoor amenities across Silicon Valley & the Bay Area. Licensed & insured. Free quotes.",
        canonical: "https://snslandscaping.org/services",
        ogImage: "https://snslandscaping.org/images/gallery/front_yard_2.jpg",
      }}
      faqs={SERVICES_PAGE_FAQS}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
      }}
    >
      {/* Page header */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Our Services"
              description="Complete outdoor living, from the ground up. Every service backed by proper base preparation, drainage, and quality materials."
            />
          </Reveal>
        </div>
      </section>

      {/* Services — Bento grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
            {SERVICES.map((service, i) => {
              const span = i === 0 ? "md:col-span-3 md:row-span-2" : i === 1 ? "md:col-span-3" : i === 2 ? "md:col-span-2" : i === 3 ? "md:col-span-2" : "md:col-span-2";
              return (
                <Reveal key={service.slug} delay={i * 80} className={span}>
                  <Link to={`/services/${service.slug}`} className="group block h-full">
                    <div className="bezel h-full">
                      <div className="bezel-inner relative flex h-full flex-col">
                        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:flex-1">
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
                        <div className="flex flex-col gap-3 p-5 md:p-6">
                          <h3 className="font-heading text-xl font-medium text-foreground md:text-2xl">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.tagline}</p>
                          <ul className="flex flex-col gap-1.5">
                            {service.features.slice(0, 3).map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <CircleCheck className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                            View details
                            <ArrowRight className="size-4" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow light>How It Works</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
                Our Process
              </h2>
              <p className="mt-4 text-lg text-white/70">
                From first visit to final walkthrough, we keep it simple and transparent.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                <div className="flex size-14 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/15">
                  <step.icon className="size-6 text-clay" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-medium text-white/40">0{i + 1}</span>
                    <h3 className="font-heading text-lg font-medium text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden h-px w-full bg-white/10 lg:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bezel">
              <div className="bezel-inner flex flex-col items-center gap-6 p-8 text-center md:p-16">
                <Eyebrow>Free Quote</Eyebrow>
                <h2 className="font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                  Need a Custom Plan?
                </h2>
                <p className="max-w-xl text-muted-foreground md:text-lg">
                  Get a free quote for your specific project. We respond within 24 hours.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link to="/contact#quote-form">
                    <Button size="lg" variant="cta" className="group/button btn-lg-pad-end rounded-full py-3.5 text-base font-semibold">
                      {CTA_LABEL}
                      <span className="btn-icon-circle btn-icon-circle-light ml-2">
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    </Button>
                  </Link>
                  <a href={PRIMARY_PHONE.phoneHref}>
                    <Button size="lg" variant="outline" className="btn-lg-pad rounded-full py-3.5 text-base font-semibold">
                      <PhoneCall data-icon="inline-start" />
                      {PRIMARY_PHONE.phone}
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">We respond within 24 hours — no obligation.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
          </Reveal>
          <Reveal delay={100}>
            <Accordion className="mt-16 w-full">
              {SERVICES_PAGE_FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
