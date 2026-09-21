import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Eyebrow } from "@/components/Eyebrow";
import { Phone, Mail, MapPin, CircleCheck, ShieldCheck, Star, Clock, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  BUSINESS_NAME,
  PRIMARY_PHONE,
  EMAIL,
  CONTACTS,
  LICENSE,
} from "@/lib/site";
import { SERVICES, AREAS } from "@/lib/sns-data";
import { supabase } from "@/lib/supabase";

type SubmitState = "idle" | "submitting" | "success" | "error";

const STEPS = [
  { num: "01", title: "Submit Your Request", desc: "Fill out the form with your project details." },
  { num: "02", title: "We Call You Back", desc: "We review your request and reach out within 24 hours." },
  { num: "03", title: "Free On-Site Quote", desc: "We visit your property and provide a detailed quote." },
];

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
        ogImage: "https://snslandscaping.org/images/gallery/stone_fountain.jpg",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
        phone: PRIMARY_PHONE.phone,
      }}
    >
      {/* Page header */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Get in Touch</Eyebrow>
              <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
                Get a Free Quote
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Reach out today for a free quote on your landscaping project. We respond within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Split: form + trust sidebar */}
      <section id="quote-form" className="py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Form — 3 cols */}
            <Reveal className="lg:col-span-3">
              <div className="bezel">
                <div className="bezel-inner p-6 md:p-10">
                  {submitState === "success" ? (
                    <div className="flex flex-col items-center gap-6 py-16 text-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                        <CircleCheck className="size-8 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-heading text-xl font-medium text-foreground">
                          Thank you for your request!
                        </p>
                        <p className="mt-2 text-muted-foreground">
                          We will get back to you within 24 hours.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitState("idle")}
                        className="rounded-full"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-medium text-foreground md:text-3xl">
                        Request Your Free Quote
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Tell us about your project and we'll respond as soon as possible.
                      </p>
                      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
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
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>Services needed * <span className="text-muted-foreground font-normal">(select all that apply)</span></Label>
                          <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {SERVICES.map((service) => (
                              <label
                                key={service.slug}
                                htmlFor={`service-${service.slug}`}
                                className="flex cursor-pointer items-center gap-3 rounded-xl border border-input p-3 transition-fluid hover:bg-muted has-[:checked]:border-primary has-[:checked]:bg-primary/5"
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
                          className="group/button mt-2 w-full rounded-full py-3.5 text-base font-semibold"
                          disabled={submitState === "submitting"}
                        >
                          {submitState === "submitting" ? "Submitting..." : "Submit Request"}
                          <span className="btn-icon-circle btn-icon-circle-light ml-2">
                            <ArrowRight className="size-4" aria-hidden="true" />
                          </span>
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Trust sidebar — 2 cols */}
            <Reveal delay={150} className="lg:col-span-2">
              <div className="flex flex-col gap-5">
                {/* Trust badges */}
                <div className="bezel">
                  <div className="bezel-inner flex flex-col gap-4 p-6">
                    <h3 className="font-heading text-lg font-medium text-foreground">Why Choose S&amp;S</h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                          <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Licensed & Insured</p>
                          <p className="text-xs text-muted-foreground">{LICENSE}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="size-2.5 fill-primary text-primary" aria-hidden="true" />
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Quality Workmanship</p>
                          <p className="text-xs text-muted-foreground">Attention to every detail</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                          <Clock className="size-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">24-Hour Response</p>
                          <p className="text-xs text-muted-foreground">We call you back fast</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="bezel">
                  <div className="bezel-inner flex flex-col gap-4 p-6">
                    <h3 className="font-heading text-lg font-medium text-foreground">Contact Directly</h3>
                    {CONTACTS.map((contact) => (
                      <a
                        key={contact.name}
                        href={contact.phoneHref}
                        className="flex items-center gap-3 transition-fluid hover:gap-4"
                      >
                        <div className="flex size-10 items-center justify-center rounded-full bg-cta/10 ring-1 ring-cta/15">
                          <Phone className="size-5 text-cta" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.phone}</p>
                        </div>
                      </a>
                    ))}
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-fluid hover:gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-cta/10 ring-1 ring-cta/15">
                        <Mail className="size-5 text-cta" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">{EMAIL}</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-cta/10 ring-1 ring-cta/15">
                        <MapPin className="size-5 text-cta" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Service Area</p>
                        <p className="text-xs text-muted-foreground">{AREAS.length} Bay Area communities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow light>What Happens Next</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white text-balance md:text-4xl">
                Our Simple 3-Step Process
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 100} className="flex flex-col items-center gap-4 text-center">
                <span className="font-heading text-4xl font-medium text-clay/40 md:text-5xl">
                  {step.num}
                </span>
                <h3 className="font-heading text-lg font-medium text-white">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
