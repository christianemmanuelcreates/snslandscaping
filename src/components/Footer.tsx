import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  EMAIL,
  LICENSE,
  CONTACTS,
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
                ["Reviews", "/reviews"],
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
                <a href={`mailto:${EMAIL}`} className="text-white/60 transition-fluid hover:text-white">{EMAIL}</a>
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
