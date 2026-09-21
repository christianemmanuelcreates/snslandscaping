import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";

export function MobileCTABar() {
  return (
    <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 px-4 py-3 lg:hidden">
      <a
        href={PRIMARY_PHONE.phoneHref}
        aria-label={`Call ${PRIMARY_PHONE.phone}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background py-3 text-sm font-semibold text-foreground transition-fluid active:scale-[0.98]"
      >
        <Phone className="size-4 text-cta" aria-hidden="true" />
        Call
      </a>
      <Link
        to="/contact#quote-form"
        className="flex flex-[1.5] items-center justify-center gap-2 rounded-full bg-cta py-3 text-sm font-semibold text-cta-foreground transition-fluid active:scale-[0.98]"
      >
        {CTA_LABEL}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
