import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL } from "@/lib/site";
import { SERVICES } from "@/lib/sns-data";

export default function Services() {
  return (
    <Layout
      seo={{
        title: `Landscaping Services | ${BUSINESS_NAME}`,
        description:
          "Landscaping & planting, hardscaping, site preparation, irrigation & drainage, and outdoor amenities across Silicon Valley & the Bay Area. Licensed & insured. Free quotes.",
        canonical: "https://snslandscaping.org/services",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
      }}
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-muted-foreground">
              Complete outdoor living, from the ground up.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
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
                    <service.icon className="mb-2 size-8 text-primary" aria-hidden="true" />
                    <CardTitle>{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.tagline}</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      View details
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-16 rounded-xl bg-muted p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Need a Custom Plan?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Get a free quote for your specific project.
            </p>
            <Link to="/contact#quote-form" className="mt-6 inline-block">
              <Button size="lg" variant="cta">{CTA_LABEL}</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
