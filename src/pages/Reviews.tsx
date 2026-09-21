import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { Star, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL, LICENSE } from "@/lib/site";

export default function Reviews() {
  return (
    <Layout
      seo={{
        title: `Reviews | ${BUSINESS_NAME}`,
        description:
          "See what Bay Area homeowners say about S&S Landscaping's landscaping, hardscaping, and outdoor living work. Be our next reviewed project — get a free quote today.",
        canonical: "https://snslandscaping.org/reviews",
        noindex: true,
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
      }}
    >
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Reviews</Eyebrow>
              <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
                Client Reviews
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We're building our reputation one project at a time. Check back soon for reviews from our clients across Silicon Valley &amp; the Bay Area — or become our first reviewed project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-16">
            <div className="bezel mx-auto max-w-2xl">
              <div className="bezel-inner flex flex-col items-center gap-6 p-8 text-center md:p-12">
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-8 fill-clay text-clay" />
                  ))}
                </div>
                <p className="text-muted-foreground md:text-lg">
                  Be our first reviewed project. We look forward to earning your five-star review.
                </p>
                <Link to="/contact#quote-form">
                  <Button size="lg" variant="cta" className="group/button rounded-full px-6 py-3.5 text-base font-semibold">
                    {CTA_LABEL}
                    <span className="btn-icon-circle btn-icon-circle-light ml-2">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground">
                  {LICENSE} · Licensed &amp; Insured
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
