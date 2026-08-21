import { Link } from "react-router-dom";
import { Sparkles, Menu, MapPin, ChevronDown, LayoutGrid } from "lucide-react";
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
import { BUSINESS_NAME, CTA_LABEL } from "@/lib/site";
import { AREAS } from "@/lib/sns-data";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <Sparkles className="size-5 text-primary" aria-hidden="true" />
          <span>{BUSINESS_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-1">
            {NAV_ITEMS.filter((item) => item.label !== "Contact").map((item) => (
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
              <NavigationMenuContent className="w-64">
                <div className="max-h-[calc(100vh-6rem)] overflow-y-auto p-2">
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

            <NavigationMenuItem>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 outline-none"
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact#quote-form" className="hidden md:inline-flex">
            <Button size="sm">{CTA_LABEL}</Button>
          </Link>
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 outline-none"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 overflow-y-auto">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="flex flex-col gap-1 pt-6">
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
                  <Button className="w-full">{CTA_LABEL}</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
