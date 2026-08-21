import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { BUSINESS_NAME, CTA_LABEL } from "@/lib/site";

export default function Reviews() {
  return (
    <Layout
      seo={{
        title: `Reviews | ${BUSINESS_NAME}`,
        description:
          "Reviews for S&S Landscaping are coming soon. Get a free quote for landscaping and outdoor living in Silicon Valley & the Bay Area.",
        canonical: "https://snslandscaping.org/reviews",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
      }}
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Reviews Coming Soon
            </h1>
            <p className="mt-4 text-muted-foreground">
              We are a new company and are just getting started. Check back soon for reviews from our clients across Silicon Valley & the Bay Area.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-2xl">
            <Card className="text-center">
              <CardContent className="flex flex-col items-center gap-4 py-12">
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-6 text-muted-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  No reviews yet. We look forward to earning yours.
                </p>
                <Link to="/contact#quote-form">
                  <Button size="lg">{CTA_LABEL}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}