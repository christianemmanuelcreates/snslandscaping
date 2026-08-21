import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  BUSINESS_NAME,
  PRIMARY_PHONE,
  EMAIL,
  CONTACTS,
  SERVICE_AREAS,
} from "@/lib/site";

export default function Contact() {
  return (
    <Layout
      seo={{
        title: `Contact ${BUSINESS_NAME} | Get a Free Quote`,
        description:
          "Contact S&S Landscaping for a free quote on landscaping, hardscaping, irrigation, and outdoor living in the SF Metro Area.",
        canonical: "https://snslandscaping.org/contact",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
      }}
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-muted-foreground">
              Reach out today for a free quote on your landscaping project.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Project photo */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/gallery/General_site_photo_3.jpg"
                alt="Outdoor fountain feature installed by S&S Landscaping"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </div>

            {/* Contact form */}
            <Card>
              <CardHeader>
                <CardTitle>Request Your Free Quote</CardTitle>
                <CardDescription>
                  Tell us about your project and we will respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 555-0000" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service">Service needed</Label>
                    <Input id="service" placeholder="Landscaping, hardscaping, irrigation..." />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Project details</Label>
                    <Textarea id="message" placeholder="Tell us about your project" rows={4} />
                  </div>
                  <Button type="submit" className="mt-2">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {CONTACTS.map((contact) => (
                <Card key={contact.name}>
                  <CardContent className="flex items-start gap-3 pt-6">
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">{contact.name}</span>
                      <a href={contact.phoneHref} className="text-sm text-muted-foreground hover:text-foreground">
                        {contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardContent className="flex items-start gap-3 pt-6">
                  <Mail className="size-5 text-primary" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-foreground">Email</span>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-foreground">
                      {EMAIL}
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-3 pt-6">
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-foreground">Service Area</span>
                    <span className="text-sm text-muted-foreground">
                      {SERVICE_AREAS.join(", ")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}