import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ShieldCheck, Award, Eye, Users, PhoneCall, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  CTA_LABEL,
  PRIMARY_PHONE,
  LICENSE,
  CONTACTS,
} from "@/lib/site";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: `Fully licensed (${LICENSE}) and insured for every project we take on.`,
  },
  {
    icon: Award,
    title: "Local Expertise",
    desc: "Deep knowledge of Silicon Valley soils, climates, and outdoor living.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    desc: "We focus on the small details — edge lines, grade slopes, joint spacing — that make a big difference in the final result.",
  },
  {
    icon: Users,
    title: "Residential & Commercial",
    desc: "From backyard gardens to commercial property landscapes, we handle projects of every scale.",
  },
];

export default function About() {
  return (
    <Layout
      seo={{
        title: `About ${BUSINESS_NAME} | Licensed Landscaping by Samuel Delgado`,
        description:
          "Meet Samuel Delgado and Santos Gomez of S&S Landscaping — licensed (LIC 100-7487), insured, and serving Silicon Valley & the Bay Area with premium outdoor living. Get a free quote today.",
        canonical: "https://snslandscaping.org/about",
        ogImage: "https://snslandscaping.org/images/gallery/tori_bench.jpg",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
      }}
      persons={[
        { name: "Samuel Delgado", jobTitle: "Co-Founder & Lead Landscaper", telephone: CONTACTS[0].phone, url: "https://snslandscaping.org/about" },
        { name: "Santos Gomez", jobTitle: "Co-Founder & Landscaper", telephone: CONTACTS[1].phone, url: "https://snslandscaping.org/about" },
      ]}
    >
      {/* Editorial split intro */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-6 lg:justify-center">
              <Eyebrow>Our Story</Eyebrow>
              <h1 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
                About {BUSINESS_NAME}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {BUSINESS_TAGLINE}.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                I'm Samuel Delgado, and I started S&S Landscaping with one goal: to bring honest, dependable, and beautiful outdoor living to homeowners and businesses across Silicon Valley and the Bay Area. My partner Santos Gomez and I have spent years working with our hands in this exact soil — we know what thrives here, what drains properly, and what holds up over time.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We're a locally owned company, fully licensed ({LICENSE}) and insured, and we take pride in every project whether it's a small front yard refresh or a full backyard transformation. When you call us, you talk to us directly — no subcontractors, no call centers, no surprises.
              </p>
            </Reveal>
            <Reveal delay={150} className="relative">
              <div className="bezel">
                <div className="bezel-inner overflow-hidden">
                  <img
                    src="/images/gallery/tori_bench.jpg"
                    alt="Pergola with swing seating, gravel paths, and planted garden beds"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values grid with depth */}
      <section className="bg-sage-tint py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What Drives Us"
              title="Values That Shape Every Project"
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="bezel h-full">
                  <div className="bezel-inner flex h-full flex-col gap-4 p-6 md:p-8">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                      <value.icon className="size-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-medium text-foreground md:text-2xl">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's story — full-bleed image band */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <img
          src="/images/gallery/illuminated_steps.jpg"
          alt="Illuminated entry steps with paver walkway and retaining walls"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/80" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow light>Our Journey</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white text-balance md:text-4xl">
              From the Ground Up
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                I grew up watching landscapes come together — the grading, the stonework, the planting — and I learned early that the difference between an average yard and an exceptional one comes down to the details most people never notice. The slope of a patio that sheds water the right way. The compacted base under a walkway that keeps it level for decades. The irrigation zone that waters each plant type correctly.
              </p>
              <p>
                Santos and I founded S&S Landscaping because we wanted to do things the right way — no shortcuts, no cutting corners, just quality workmanship from the ground up. We serve 16 communities across Silicon Valley and the Bay Area, from Los Gatos to Palo Alto to San Jose, and we treat every property like it's our own.
              </p>
              <p>
                Whether you need a new patio, a retaining wall, irrigation repair, a full landscape design, or just a reliable team to transform your outdoor space, we're here to help. Call us directly and we'll get you a free quote.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The People"
              title="Meet the Team"
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CONTACTS.map((contact, i) => (
              <Reveal key={contact.name} delay={i * 100}>
                <div className="bezel h-full">
                  <div className="bezel-inner flex h-full flex-col gap-4 p-6 md:p-8">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                      <span className="font-heading text-2xl font-medium text-primary">
                        {contact.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-medium text-foreground md:text-2xl">
                        {contact.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {i === 0
                          ? "Co-founder and lead landscaper. Samuel handles project design, client consultations, and oversees every job site to ensure quality from start to finish."
                          : "Co-founder and landscaper. Santos brings years of hands-on experience in hardscaping, irrigation, and site preparation to every project."}
                      </p>
                    </div>
                    <a
                      href={contact.phoneHref}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-fluid hover:gap-3"
                    >
                      <PhoneCall className="size-4" aria-hidden="true" />
                      {contact.phone}
                    </a>
                  </div>
                </div>
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
              Ready to Work With Us?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Get a free quote for your next landscaping project. Call us directly or fill out our quote form.
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
