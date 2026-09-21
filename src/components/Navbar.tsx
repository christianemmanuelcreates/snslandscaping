import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import { AREAS } from "@/lib/sns-data";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 lg:pt-6">
        <nav
          className={`navbar-pill navbar-shell flex items-center gap-2 rounded-full px-3 py-2 transition-fluid lg:gap-4 lg:px-5 ${
            scrolled ? "w-full max-w-5xl" : "w-full max-w-6xl"
          }`}
        >
          <Link
            to="/"
            className="navbar-logo flex shrink-0 items-center justify-center"
            aria-label={`${BUSINESS_NAME} home`}
          >
            <img
              src="/images/Gemini_Generated_Image_qt6fzsqt6fzsqt6f-removebg-preview.png"
              alt={`${BUSINESS_NAME} logo`}
              width={56}
              height={56}
              className="block object-contain"
            />
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-fluid hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/areas"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-fluid hover:bg-accent hover:text-accent-foreground"
            >
              Service Areas
            </Link>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <a
              href={PRIMARY_PHONE.phoneHref}
              aria-label={`Call ${PRIMARY_PHONE.phone}`}
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-foreground transition-fluid hover:text-cta lg:inline-flex"
            >
              <Phone className="size-4 text-cta" aria-hidden="true" />
              {PRIMARY_PHONE.phone}
            </a>
            <Link to="/contact#quote-form" className="hidden lg:inline-flex">
              <Button
                size="sm"
                variant="cta"
                className="group/button rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {CTA_LABEL}
                <span className="btn-icon-circle ml-1.5">
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </Button>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-fluid hover:bg-accent lg:hidden ${
                menuOpen ? "hamburger-open" : ""
              }`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              type="button"
            >
              <div className="flex flex-col items-center gap-[5px]">
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay fixed inset-0 z-40 flex flex-col lg:hidden">
          <div className="flex-1 overflow-y-auto px-6 pt-28 pb-12">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="reveal-up flex items-center justify-between border-b border-border/50 py-4 text-2xl font-heading font-medium text-foreground transition-fluid hover:text-primary"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {item.label}
                  <ArrowRight className="size-5 text-muted-foreground" aria-hidden="true" />
                </Link>
              ))}
              <Link
                to="/areas"
                className="reveal-up flex items-center justify-between border-b border-border/50 py-4 text-2xl font-heading font-medium text-foreground transition-fluid hover:text-primary"
                style={{ animationDelay: `${NAV_ITEMS.length * 60}ms` }}
              >
                Service Areas
                <ArrowRight className="size-5 text-muted-foreground" aria-hidden="true" />
              </Link>
            </nav>

            {/* Areas quick links */}
            <div className="mt-8 flex flex-wrap gap-2" style={{ animationDelay: `${(NAV_ITEMS.length + 1) * 60}ms` }}>
              {AREAS.slice(0, 8).map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-fluid hover:border-primary/30 hover:text-primary"
                >
                  <MapPin className="size-3" aria-hidden="true" />
                  {area.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3" style={{ animationDelay: `${(NAV_ITEMS.length + 2) * 60}ms` }}>
              <Link to="/contact#quote-form">
                <Button variant="cta" className="w-full rounded-full py-3 text-base font-semibold">
                  {CTA_LABEL}
                </Button>
              </Link>
              <a
                href={PRIMARY_PHONE.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-base font-semibold text-foreground transition-fluid hover:bg-muted"
              >
                <Phone className="size-4 text-cta" aria-hidden="true" />
                Call {PRIMARY_PHONE.phone}
                </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
