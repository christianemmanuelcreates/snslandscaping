import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  EMAIL,
  LICENSE,
  CONTACTS,
  SOCIAL_LINKS,
} from "@/lib/site";
import { AREAS, SERVICES } from "@/lib/sns-data";

export function Footer() {
  return (
    <footer className="bg-espresso pb-20 pt-20 md:pb-24 md:pt-24 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="flex min-w-0 flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/Gemini_Generated_Image_qt6fzsqt6fzsqt6f-removebg-preview.png"
                alt={`${BUSINESS_NAME} logo`}
                className="block h-14 w-14 shrink-0 object-contain"
              />
              <span className="font-heading text-lg font-medium text-white">{BUSINESS_NAME}</span>
            </Link>
            <p className="max-w-xs text-sm text-white/50">
              {BUSINESS_TAGLINE}.
            </p>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              <ShieldCheck className="size-4 text-clay" aria-hidden="true" />
              <span className="text-xs text-white/60">{LICENSE}</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit S&S Landscaping on Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/5 text-white/60 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit S&S Landscaping on Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/5 text-white/60 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
                  <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.77V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.49V10H7v3h2.79v8h3.71Z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.google}
                target="_blank"
                rel="noreferrer"
                aria-label="View S&S Landscaping on Google Business Profile"
                className="flex size-9 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-white/60 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <span aria-hidden="true">G</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Services</h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-sm text-white/60 transition-fluid hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Service Areas</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Link to="/areas" className="text-sm font-medium text-white transition-fluid hover:text-clay">
                  View All Areas
                </Link>
              </li>
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link to={`/areas/${area.slug}`} className="text-sm text-white/60 transition-fluid hover:text-white">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Company</h3>
            <ul className="flex flex-col gap-2">
              {[
                ["About", "/about"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-white/60 transition-fluid hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {CONTACTS.map((contact) => (
                <li key={contact.name} className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-clay" aria-hidden="true" />
                  <a href={contact.phoneHref} className="text-white/60 transition-fluid hover:text-white">
                    {contact.phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-clay" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="min-w-0 break-all text-white/60 transition-fluid hover:text-white">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-clay" aria-hidden="true" />
                <span className="text-white/60">{AREAS.length} Bay Area communities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-white/40">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Licensed &amp; Insured · {LICENSE}
          </p>
        </div>
      </div>
    </footer>
  );
}
