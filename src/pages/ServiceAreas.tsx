import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowRight, PhoneCall, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE, BUSINESS_ADDRESS, SAME_AS } from "@/lib/site";
import { AREAS } from "@/lib/sns-data";

export default function ServiceAreas() {
  return (
    <Layout
      seo={{
        title: `Service Areas in Silicon Valley | ${BUSINESS_NAME}`,
        description:
          "S&S Landscaping serves 16 communities across Silicon Valley and the Bay Area, including Los Gatos, Palo Alto, San Jose, Mountain View, Cupertino, and Saratoga. Get a free quote today.",
        canonical: "https://snslandscaping.org/areas",
        schemaTypes: ["LocalBusiness"],
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
      }}
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/images/gallery/backyard_concept.jpg"
          alt="Landscaped backyard with a stone water fountain and lush garden by S&S Landscaping"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/80 via-espresso/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-6">
            <Reveal variant="fade">
              <div className="flex size-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                <MapPin className="size-7 text-white" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-heading text-4xl font-medium tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
                Serving Silicon Valley &amp; the Bay Area
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-xl text-lg text-white/80 md:text-xl">
                We bring premium landscaping and outdoor living to {AREAS.length} communities across Silicon Valley and the surrounding Bay Area.
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

      {/* Areas grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Communities</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                Communities We Serve
              </h2>
              <p className="mt-4 text-muted-foreground">
                Select your city to see the landscaping services we provide in your area.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 4) * 60}>
                <Link to={`/areas/${area.slug}`} className="group block h-full">
                  <div className="bezel h-full">
                    <div className="bezel-inner flex h-full flex-col gap-3 p-6">
                      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                        <MapPin className="size-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-xl font-medium text-foreground">{area.name}</h3>
                      <p className="text-sm text-muted-foreground">{area.county} County</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                        Landscaping in {area.name}
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
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Get a free quote from {BUSINESS_NAME} today.
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
