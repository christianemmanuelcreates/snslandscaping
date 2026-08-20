import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Award, PhoneCall } from "lucide-react";
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
    desc: "Deep knowledge of Bay Area soils, climates, and outdoor living.",
  },
];

export default function About() {
  return (
    <Layout
      seo={{
        title: `About ${BUSINESS_NAME} | Local Landscaping Experts`,
        description:
          "Meet S&S Landscaping, a licensed and insured landscaping company serving the SF Metro Area with premium outdoor living.",
        canonical: "https://snslandscaping.org/about",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
      }}
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              About {BUSINESS_NAME}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {BUSINESS_TAGLINE}.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <value.icon className="mb-2 size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="mt-16" />

          {/* Team */}
          <div className="mt-12">
            <h2 className="text-center text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Meet the Team
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {CONTACTS.map((contact) => (
                <Card key={contact.name} className="h-full">
                  <CardHeader>
                    <CardTitle>{contact.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A hands-on landscaping professional dedicated to quality outdoor living across the SF Metro Area.
                    </p>
                    <a href={contact.phoneHref} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground">
                      <PhoneCall className="size-4" aria-hidden="true" />
                      {contact.phone}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="mt-16" />

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-muted p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Ready to Work With Us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Get a free quote for your next landscaping project.
            </p>
            <Link to="/contact" className="mt-6 inline-block">
              <Button size="lg">{CTA_LABEL}</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}