import { useRef, useState, useEffect } from "react";
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
import { ArrowRight, PhoneCall, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
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

function HScroll({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = wrapRef.current?.querySelector(".h-scroll") as HTMLElement | null;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollLeft > 10);
    el.addEventListener("scroll", onScroll);
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dir: number) => {
    const el = wrapRef.current?.querySelector(".h-scroll") as HTMLElement | null;
    if (el) el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div ref={wrapRef} className={`h-scroll-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <div className="relative">
        {children}
        <button
          onClick={() => scrollBy(-1)}
          className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-2 shadow-md transition-all hover:bg-muted md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-2 shadow-md transition-all hover:bg-muted md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

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
    >
      {/* Hero: split-screen */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/images/gallery/backyard_concept.jpg"
          alt="Landscaped backyard with a stone water fountain, lush lawn, and garden plantings by S&S Landscaping"
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid min-w-0 max-w-7xl gap-8 px-4 pt-20 pb-16 sm:px-6 lg:px-8 md:pt-24 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-6">
            <Badge
              variant="secondary"
              className="h-auto min-h-5 max-w-full whitespace-normal break-words bg-primary-foreground/15 py-1 text-left text-primary-foreground hover:bg-primary-foreground/25"
            >
              {BUSINESS_TAGLINE}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl">
              Professional Landscaping & Outdoor Services in the Bay Area
            </h1>
            <p className="max-w-xl text-base text-primary-foreground/90 sm:text-lg">
              Reliable landscaping maintenance, & outdoor property services for residential & commercial properties throughout the Bay Area.
            </p>
            <p className="sr-only">
              S&S Landscaping is a licensed and insured landscaping company serving 16 communities across Silicon Valley and the San Francisco Bay Area, including Los Gatos, Palo Alto, San Jose, Mountain View, Cupertino, and Saratoga. We offer landscaping and planting, hardscaping, site preparation, irrigation and drainage, and outdoor amenities for residential and commercial properties.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link to="/contact#quote-form" className="w-full sm:w-auto">
                <Button size="lg" variant="cta" className="w-full sm:w-auto cta-pulse">{CTA_LABEL}</Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30 hover:text-primary-foreground sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:justify-center">
            <div className="rounded-2xl border border-white/20 bg-white/15 p-8 shadow-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-primary-foreground">
                Licensed & Insured
              </h2>
              <p className="mt-3 text-primary-foreground/95">
                {LICENSE}. Serving {AREAS.length} communities across Silicon Valley & the Bay Area.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/15 p-8 shadow-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-primary-foreground">
                Two Local Experts
              </h2>
              <p className="mt-3 text-primary-foreground/95">
                Samuel Delgado and Santos Gomez bring years of hands-on landscaping experience to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services — horizontal scroll */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Complete outdoor living, from the ground up. Scroll to explore.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <HScroll>
              <div className="h-scroll">
                {SERVICES.map((service) => (
                  <div key={service.slug} className="h-scroll-item">
                    <Card className="h-full overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
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
                        <service.icon
                          className="mb-2 size-8 text-primary"
                          aria-hidden="true"
                        />
                        <CardTitle>{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-medium text-foreground">{service.tagline}</p>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                        <Link
                          to={`/services/${service.slug}`}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                        >
                          Learn more
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </HScroll>
          </Reveal>
        </div>
      </section>

      {/* Featured areas — horizontal scroll */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Where We Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Local expertise across Silicon Valley & the Bay Area. Scroll to explore.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <HScroll>
              <div className="h-scroll">
                {AREAS.map((area) => (
                  <div key={area.slug} className="h-scroll-item">
                    <Card className="h-full transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
                      <CardHeader>
                        <MapPin className="mb-2 size-8 text-primary" aria-hidden="true" />
                        <CardTitle>{area.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{area.county} County</p>
                        <p className="mt-2 text-sm text-muted-foreground">{area.metro} area</p>
                        <Link
                          to={`/areas/${area.slug}`}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                        >
                          View services
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </HScroll>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At {BUSINESS_NAME}, we believe dependable service and clear communication should
              come standard. We're licensed and experienced, with years of hands-on knowledge
              you can rely on. We take pride in the quality and appearance of every project,
              focusing on the small details that make a big difference. And whether your
              property is residential or commercial, we bring the same commitment to
              excellence to every job.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
              Learn more about us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-4 text-muted-foreground">
              A selection of outdoor spaces we've designed and built.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY_ITEMS.slice(0, 3).map((project, i) => (
              <Reveal key={project.title} delay={i * 80} className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8 text-center">
            <Link to="/gallery" className="inline-block">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Latest articles */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tips, guides, and ideas for your outdoor space.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getAllPosts().slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Card className="flex h-full flex-col overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
                  <div className="p-3">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {BLOG_CATEGORIES.find((c) => c.slug === post.category)?.name ?? post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(post.publishedAt), "MMM d, yyyy")}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Read article
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8 text-center">
            <Link to="/blog" className="inline-block">
              <Button variant="outline">View All Articles</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Common questions about our landscaping services in Silicon Valley &amp; the Bay Area.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Accordion className="mt-12 w-full">
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

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-4xl dark:text-slate-950">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="mt-4 text-white/90 dark:text-slate-950/85">
              Get a free quote from {BUSINESS_NAME} today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button size="lg" variant="cta">
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
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
