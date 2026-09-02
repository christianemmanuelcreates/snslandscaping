import { Link } from "react-router-dom";
import { Menu, MapPin, ChevronDown, LayoutGrid, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import { AREAS } from "@/lib/sns-data";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="navbar-shell relative mx-auto flex min-h-24 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="navbar-logo flex shrink-0 items-center justify-center overflow-hidden"
          aria-label={`${BUSINESS_NAME} home`}
        >
          <img
            src="/images/Gemini_Generated_Image_qt6fzsqt6fzsqt6f-removebg-preview.png"
            alt={`${BUSINESS_NAME} logo`}
            width={200}
            height={200}
            className="block object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden min-w-0 flex-1 justify-center lg:flex">
          <NavigationMenuList className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link
                  to={item.href}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 outline-none"
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}

            {/* Service Areas dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                Service Areas
              </NavigationMenuTrigger>
              <NavigationMenuContent className="max-h-[calc(100vh-6rem)] w-64 overflow-y-auto overscroll-contain">
                <div className="p-2">
                  <ul className="flex flex-col gap-0.5">
                    <li>
                      <NavigationMenuLink
                        render={
                          <Link to="/areas">
                            <LayoutGrid className="size-4 text-primary" aria-hidden="true" />
                            <span className="font-medium text-foreground">View All Areas</span>
                          </Link>
                        }
                      />
                    </li>
                    {AREAS.map((area) => (
                      <li key={area.slug}>
                        <NavigationMenuLink
                          render={
                            <Link to={`/areas/${area.slug}`}>
                              <MapPin className="size-4 text-primary" aria-hidden="true" />
                              <span className="font-medium text-foreground">{area.name}</span>
                            </Link>
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <a
          href={PRIMARY_PHONE.phoneHref}
          aria-label={`Call ${PRIMARY_PHONE.phone}`}
          className="absolute left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-cta/30 bg-cta/10 px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-cta/20 lg:hidden"
        >
          <Phone className="size-4 text-cta" aria-hidden="true" />
          Call
        </a>

        {/* Right actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href={PRIMARY_PHONE.phoneHref}
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-cta"
          >
            <Phone className="size-4 text-cta" aria-hidden="true" />
            {PRIMARY_PHONE.phone}
          </a>
          <Link to="/contact#quote-form" className="hidden lg:inline-flex">
            <Button size="sm" variant="cta">{CTA_LABEL}</Button>
          </Link>
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 outline-none"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 overflow-y-auto">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="flex flex-col gap-1 px-4 pt-6">
                {NAV_ITEMS.filter((item) => item.label !== "Service Areas").map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Service Areas collapsible */}
                <Collapsible className="flex flex-col">
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                    Service Areas
                    <ChevronDown className="size-4 transition-transform group-data-open:rotate-180" aria-hidden="true" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col gap-0.5 pl-4 pt-1">
                    <Link
                      to="/areas"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <LayoutGrid className="size-4 text-primary" aria-hidden="true" />
                      View All Areas
                    </Link>
                    {AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        to={`/areas/${area.slug}`}
                        className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                        {area.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Link to="/contact#quote-form" className="mt-4">
                  <Button variant="cta" className="w-full">{CTA_LABEL}</Button>
                </Link>
                <a href={PRIMARY_PHONE.phoneHref} className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                  <Phone className="size-4 text-cta" aria-hidden="true" />
                  Call {PRIMARY_PHONE.phone}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
