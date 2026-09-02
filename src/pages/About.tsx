import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Award, PhoneCall, Eye, Users, Clock } from "lucide-react";
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Founder's intro */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              About {BUSINESS_NAME}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {BUSINESS_TAGLINE}.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10 mx-auto max-w-3xl">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm Samuel Delgado, and I started S&S Landscaping with one goal: to bring
                honest, dependable, and beautiful outdoor living to homeowners and businesses
                across Silicon Valley and the Bay Area. My partner Santos Gomez and I have
                spent years working with our hands in this exact soil — we know what thrives
                here, what drains properly, and what holds up over time.
              </p>
              <p>
                We're a locally owned company, fully licensed ({LICENSE}) and insured, and we
                take pride in every project whether it's a small front yard refresh or a full
                backyard transformation. When you call us, you talk to us directly — no
                subcontractors, no call centers, no surprises.
              </p>
            </div>
          </Reveal>

          {/* Values grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <Card className="h-full transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
                  <CardHeader>
                    <value.icon className="mb-2 size-8 text-primary" aria-hidden="true" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Project showcase */}
          <Reveal className="mt-16 overflow-hidden rounded-xl">
            <img
              src="/images/gallery/tori_bench.jpg"
              alt="Pergola with swing seating, gravel paths, and planted garden beds"
              loading="lazy"
              className="aspect-[21/9] w-full object-cover"
            />
          </Reveal>

          <Separator className="mt-16" />

          {/* Founder's story */}
          <Reveal className="mt-12">
            <h2 className="text-center text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Our Story
            </h2>
            <div className="mt-8 mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I grew up watching landscapes come together — the grading, the stonework, the
                planting — and I learned early that the difference between an average yard and
                an exceptional one comes down to the details most people never notice. The
                slope of a patio that sheds water the right way. The compacted base under a
                walkway that keeps it level for decades. The irrigation zone that waters each
                plant type correctly.
              </p>
              <p>
                Santos and I founded S&S Landscaping because we wanted to do things the right
                way — no shortcuts, no cutting corners, just quality workmanship from the ground
                up. We serve 16 communities across Silicon Valley and the Bay Area, from Los
                Gatos to Palo Alto to San Jose, and we treat every property like it's our own.
              </p>
              <p>
                Whether you need a new patio, a retaining wall, irrigation repair, a full
                landscape design, or just a reliable team to transform your outdoor space, we're
                here to help. Call us directly and we'll get you a free quote.
              </p>
            </div>
          </Reveal>

          <Separator className="mt-16" />

          {/* Team */}
          <Reveal className="mt-12">
            <h2 className="text-center text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Meet the Team
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CONTACTS.map((contact, i) => (
              <Reveal key={contact.name} delay={i * 80}>
                <Card className="h-full transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
                  <CardHeader>
                    <CardTitle>{contact.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {i === 0
                        ? "Co-founder and lead landscaper. Samuel handles project design, client consultations, and oversees every job site to ensure quality from start to finish."
                        : "Co-founder and landscaper. Santos brings years of hands-on experience in hardscaping, irrigation, and site preparation to every project."}
                    </p>
                    <a href={contact.phoneHref} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">
                      <PhoneCall className="size-4" aria-hidden="true" />
                      {contact.phone}
                    </a>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Separator className="mt-16" />

          {/* CTA */}
          <Reveal className="mt-12">
            <div className="rounded-xl bg-muted p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
                Ready to Work With Us?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Get a free quote for your next landscaping project. Call us directly or fill out
                our quote form and we'll respond as soon as possible.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link to="/contact#quote-form" className="inline-block">
                  <Button size="lg" variant="cta">{CTA_LABEL}</Button>
                </Link>
                <a href={PRIMARY_PHONE.phoneHref} className="inline-block">
                  <Button size="lg" variant="outline">
                    <PhoneCall data-icon="inline-start" />
                    {PRIMARY_PHONE.phone}
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
