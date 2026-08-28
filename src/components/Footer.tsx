import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  EMAIL,
  LICENSE,
  CONTACTS,
} from "@/lib/site";
import { AREAS, SERVICES } from "@/lib/sns-data";
import { BLOG_CATEGORIES } from "@/lib/blog-data";

export function Footer() {
  return (
    <footer className="border-t bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="flex min-w-0 flex-col gap-4">
            <Link to="/" className="flex flex-col items-start gap-3 font-semibold text-foreground">
              <img
                src="/images/Gemini_Generated_Image_qt6fzsqt6fzsqt6f-removebg-preview.png"
                alt={`${BUSINESS_NAME} logo`}
                className="block h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
              />
              <span>{BUSINESS_NAME}</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {BUSINESS_TAGLINE}. Licensed & insured ({LICENSE}).
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Blog</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  All Articles
                </Link>
              </li>
              {BLOG_CATEGORIES.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/blog/category/${cat.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Service Areas</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Link
                  to="/areas"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  View All Areas
                </Link>
              </li>
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/areas/${area.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {CONTACTS.map((contact) => (
                <li key={contact.name} className="flex items-center gap-2">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  <a href={contact.phoneHref} className="transition-colors hover:text-foreground">
                    {contact.name}: {contact.phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-foreground">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                <span>Serving {AREAS.length} Silicon Valley areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}