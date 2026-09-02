import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  BUSINESS_NAME,
  PRIMARY_PHONE,
  EMAIL,
  CONTACTS,
  SERVICE_AREAS,
} from "@/lib/site";
import { SERVICES } from "@/lib/sns-data";
import { supabase } from "@/lib/supabase";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const toggleService = (slug: string) => {
    setSelectedServices((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || selectedServices.length === 0) {
      return;
    }

    setSubmitState("submitting");

    try {
      const { error } = await supabase.from("quote_requests").insert({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        services: selectedServices,
        message: message.trim() || null,
      });

      if (error) throw error;

      setSubmitState("success");
      setName("");
      setEmail("");
      setPhone("");
      setSelectedServices([]);
      setMessage("");
    } catch {
      console.error("Quote submission failed");
      setSubmitState("error");
    }
  };

  return (
    <Layout
      seo={{
        title: `Contact ${BUSINESS_NAME} | Get a Free Quote`,
        description:
          "Call 209-979-6677 or request a free quote online. S&S Landscaping serves Los Gatos, Palo Alto, San Jose, and 13 more Silicon Valley & Bay Area communities.",
        canonical: "https://snslandscaping.org/contact",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
      }}
    >
      <section id="quote-form" className="py-16 md:py-24 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-muted-foreground">
              Reach out today for a free quote on your landscaping project.
            </p>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-12 max-w-2xl">
            {/* Quote form */}
            <Card>
              <CardHeader>
                <CardTitle>Request Your Free Quote</CardTitle>
                <CardDescription>
                  Tell us about your project and we will respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitState === "success" ? (
                  <div className="flex flex-col items-center gap-4 py-8 text-center">
                    <CircleCheck className="size-12 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        Thank you for your request!
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        We will get back to you as soon as possible.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitState("idle")}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        maxLength={120}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        maxLength={254}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 555-0000"
                        required
                        maxLength={40}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label>Services needed * <span className="text-muted-foreground font-normal">(select all that apply)</span></Label>
                      <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {SERVICES.map((service) => (
                          <label
                            key={service.slug}
                            htmlFor={`service-${service.slug}`}
                            className="flex cursor-pointer items-center gap-3 rounded-lg border border-input p-3 transition-colors hover:bg-muted has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                          >
                            <Checkbox
                              id={`service-${service.slug}`}
                              checked={selectedServices.includes(service.slug)}
                              onCheckedChange={() => toggleService(service.slug)}
                            />
                            <span className="text-sm font-medium text-foreground">
                              {service.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Project details</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project"
                        rows={4}
                        maxLength={5000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    {submitState === "error" && (
                      <p className="text-sm text-destructive">
                        Could not submit your request. Please try again or call us directly.
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      variant="cta"
                      className="mt-2"
                      disabled={submitState === "submitting"}
                    >
                      {submitState === "submitting" ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </Reveal>

          {/* Smaller project photo */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/gallery/stone_fountain.jpg"
                alt="Stone fountain feature surrounded by ornamental grasses and river rock"
                loading="lazy"
                className="aspect-[21/9] w-full object-cover"
              />
            </div>
          </div>

          {/* Contact info */}
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTACTS.map((contact, i) => (
              <Reveal key={contact.name} delay={i * 60}>
                <Card>
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
              </Reveal>
            ))}
            <Reveal delay={120}>
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
            </Reveal>
            <Reveal delay={180}>
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
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
