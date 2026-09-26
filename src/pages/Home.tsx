import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { ArrowRight, PhoneCall, MapPin, Star, ShieldCheck, Sparkles } from "lucide-react";
import {
  BUSINESS_NAME,
  CTA_LABEL,
  PRIMARY_PHONE,
  LICENSE,
  BUSINESS_ADDRESS,
  SAME_AS,
} from "@/lib/site";
import { SERVICES, AREAS, GALLERY_ITEMS } from "@/lib/sns-data";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog-data";
import { format } from "date-fns";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BayAreaMap } from "@/components/BayAreaMap";

const HOME_FAQS = [
  {
    question: "What areas do you serve?",
    answer: `S&S Landscaping serves 16 communities across Silicon Valley and the San Francisco Bay Area, including Los Gatos, Palo Alto, San Jose, Mountain View, Cupertino, Saratoga, and more. We serve both residential and commercial properties throughout Santa Clara and San Mateo counties.`,
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes. S&S Landscaping is fully licensed (LIC 100-7487) and insured for every project we take on, from small front yard refreshes to full backyard transformations and commercial landscaping.`,
  },
  {
    question: "Do you offer free quotes?",
    answer: `Yes, we provide free quotes for all landscaping and hardscaping projects. Call us directly or fill out our online quote form and we will respond as soon as possible.`,
  },
  {
    question: "Do you work on commercial properties?",
    answer: `Yes. We handle both residential and commercial landscaping projects of every scale, from backyard gardens to commercial property landscapes, with the same commitment to quality and attention to detail.`,
  },
  {
    question: "What services do you offer?",
    answer: `We offer landscaping and planting, hardscaping (patios, walkways, retaining walls), site preparation and grading, irrigation and drainage systems, and outdoor amenities including water features and low-voltage landscape lighting.`,
  },
];

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
        sameAs: SAME_AS,
        address: {
          streetAddress: BUSINESS_ADDRESS.streetAddress,
          addressLocality: BUSINESS_ADDRESS.addressLocality,
          addressRegion: BUSINESS_ADDRESS.addressRegion,
          postalCode: BUSINESS_ADDRESS.postalCode,
          addressCountry: BUSINESS_ADDRESS.addressCountry,
        },
        areaServed: AREAS.map((a) => ({ name: a.name })),
        openingHours: [
          { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
          { dayOfWeek: ["Saturday"], opens: "08:00", closes: "16:00" },
        ],
      }}
      faqs={HOME_FAQS}
      immersiveHero
    >
      {/* ===== Cinematic Hero ===== */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img
          src="/images/gallery/backyard_concept.jpg"
          alt="Landscaped backyard with a stone water fountain, lush lawn, and garden plantings by S&S Landscaping"
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/45 to-espresso/20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 mesh-bg-dark opacity-40" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pt-24 pb-32 sm:px-6 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-6">
            <Reveal variant="fade">
              <Eyebrow light>Silicon Valley &amp; Bay Area</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-heading text-5xl font-medium leading-[1.05] tracking-tight text-white text-balance sm:text-6xl md:text-7xl">
                Premium Landscaping &amp; Outdoor Living
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-xl text-lg text-white/80 md:text-xl">
                Reliable landscaping, hardscaping, and outdoor property services for residential &amp; commercial properties throughout the Bay Area.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link to="/contact#quote-form" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="cta"
                    className="group/button btn-lg-pad-end w-full rounded-full py-3.5 text-base font-semibold cta-pulse sm:w-auto"
                  >
                    {CTA_LABEL}
                    <span className="btn-icon-circle btn-icon-circle-light ml-2">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Button>
                </Link>
                <a href={PRIMARY_PHONE.phoneHref} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-lg-pad w-full rounded-full border-white/30 bg-white/10 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-fluid hover:bg-white/20 hover:text-white sm:w-auto"
                  >
                    <PhoneCall data-icon="inline-start" />
                    {PRIMARY_PHONE.phone}
                  </Button>
                </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-clay" aria-hidden="true" />
                  {LICENSE}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-clay text-clay" aria-hidden="true" />
                    ))}
                  </div>
                  Licensed &amp; Insured
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-clay" aria-hidden="true" />
                  {AREAS.length} Bay Area Communities
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 lg:bottom-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
              <div className="scroll-hint h-1.5 w-1 rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Bar ===== */}
      <TrustBar />

      {/* ===== Services — Bento Grid ===== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Complete Outdoor Living, From the Ground Up"
              description="From lawns and gardens to patios, retaining walls, irrigation, and landscape lighting — we handle every aspect of your outdoor project."
            />
          </Reveal>

          {/* Equal-size services grid */}
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
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
                      <div className="flex flex-col gap-2 p-5 md:p-6">
                        <h3 className="font-heading text-xl font-medium text-foreground md:text-2xl">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.tagline}</p>
                        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                          Learn more
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

      {/* ===== Service Areas — Interactive Map ===== */}
      <section className="bg-sage-tint py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Local Expertise Across Silicon Valley"
              description="We know the soils, climates, and permitting requirements of every community we serve."
            />
          </Reveal>
          <Reveal delay={100} className="mt-16">
            <BayAreaMap areas={AREAS} />
          </Reveal>
        </div>
      </section>

      {/* ===== Why Choose Us — Editorial Split ===== */}
      <section className="mesh-bg py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-6 lg:justify-center">
              <Eyebrow>Why S&amp;S</Eyebrow>
              <h2 className="font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl lg:text-5xl">
                Dependable service. Clear communication. Quality that shows.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                At {BUSINESS_NAME}, we believe dependable service and clear communication should come standard. We're licensed and experienced, with years of hands-on knowledge you can rely on. We take pride in the quality and appearance of every project, focusing on the small details that make a big difference.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether your property is residential or commercial, we bring the same commitment to excellence to every job — no subcontractors, no call centers, no surprises.
              </p>
              <Link to="/about" className="mt-2">
                <Button variant="outline" className="group/button rounded-full">
                  Learn more about us
                  <span className="btn-icon-circle ml-1.5">
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </Button>
              </Link>
            </Reveal>
            <Reveal delay={150} className="relative">
              <div className="bezel">
                <div className="bezel-inner overflow-hidden">
                  <img
                    src="/images/gallery/stone_feature_2.jpg"
                    alt="Finished patio with stone seating wall and fire pit"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-4 hidden md:block">
                <div className="bezel float-subtle">
                  <div className="bezel-inner flex items-center gap-3 p-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-cta/10">
                      <Sparkles className="size-5 text-cta" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-medium text-foreground">Attention to Detail</p>
                      <p className="text-xs text-muted-foreground">Edge lines, grade slopes, joint spacing</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Featured Work — Full-bleed banner ===== */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Recent Projects"
              title="Outdoor Spaces We've Designed & Built"
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3">
            {GALLERY_ITEMS.slice(0, 6).map((project, i) => (
              <Reveal key={project.title} delay={i * 60}>
                <Link to="/gallery" className="group block">
                  <div className="bezel">
                    <div className="bezel-inner relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <h3 className="font-heading text-base font-medium text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs text-white/70 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10 text-center">
            <Link to="/gallery">
              <Button variant="outline" className="group/button rounded-full">
                View Full Gallery
                <span className="btn-icon-circle ml-1.5">
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== Latest Articles ===== */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Tips & Ideas"
              title="Latest Articles"
              description="Tips, guides, and ideas for your outdoor space."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {getAllPosts().slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bezel h-full">
                    <div className="bezel-inner flex h-full flex-col">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-5">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {BLOG_CATEGORIES.find((c) => c.slug === post.category)?.name ?? post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {format(new Date(post.publishedAt), "MMM d, yyyy")}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg font-medium leading-snug text-foreground">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                          Read article
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10 text-center">
            <Link to="/blog">
              <Button variant="outline" className="group/button rounded-full">
                View All Articles
                <span className="btn-icon-circle ml-1.5">
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mesh-bg py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Frequently Asked Questions"
              description="Common questions about our landscaping services in Silicon Valley & the Bay Area."
            />
          </Reveal>
          <Reveal delay={100}>
            <Accordion className="mt-16 w-full">
              {HOME_FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA — Espresso band ===== */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow light>Get Started</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Get a free quote from {BUSINESS_NAME} today. We respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button
                  size="lg"
                  variant="cta"
                  className="group/button btn-lg-pad-end rounded-full py-3.5 text-base font-semibold"
                >
                  {CTA_LABEL}
                  <span className="btn-icon-circle btn-icon-circle-light ml-2">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-lg-pad rounded-full border-white/20 bg-white/10 py-3.5 text-base font-semibold text-white transition-fluid hover:bg-white/20 hover:text-white"
                >
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
