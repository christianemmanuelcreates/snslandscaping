import { ShieldCheck, MapPin, Award, Clock } from "lucide-react";
import { LICENSE } from "@/lib/site";
import { AREAS } from "@/lib/sns-data";

const STATS = [
  { icon: ShieldCheck, label: "Licensed & Insured", value: LICENSE },
  { icon: MapPin, label: "Communities Served", value: `${AREAS.length} Areas` },
  { icon: Award, label: "Residential & Commercial", value: "Full Service" },
  { icon: Clock, label: "Response Time", value: "24 Hours" },
];

export function TrustBar() {
  return (
    <section className="bg-espresso py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center md:flex-row md:gap-4 md:text-left"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                <stat.icon className="size-5 text-clay" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-lg font-medium text-white md:text-xl">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/50">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
