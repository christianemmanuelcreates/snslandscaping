import { useState } from "react";
import { Layout } from "@/components/Layout";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL } from "@/lib/site";
import { GALLERY_ITEMS } from "@/lib/sns-data";

const CATEGORIES = [
  "All",
  "Patios & Hardscaping",
  "Turf & Lawns",
  "Walkways & Paths",
  "Stone Features",
  "Lighting",
];

const CATEGORY_MAP: Record<string, number[]> = {
  "All": Array.from({ length: GALLERY_ITEMS.length }, (_, i) => i),
  "Patios & Hardscaping": [0, 10, 13],
  "Turf & Lawns": [0, 1, 2, 3, 13],
  "Walkways & Paths": [4, 5, 8, 9],
  "Stone Features": [5, 6, 10, 11],
  "Lighting": [6, 7, 9],
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleIndices = CATEGORY_MAP[activeCategory] ?? CATEGORY_MAP["All"];

  return (
    <Layout
      seo={{
        title: `Gallery | ${BUSINESS_NAME} Projects`,
        description:
          "Browse patios, retaining walls, paver walkways, landscape lighting, water features, and turf installations by S&S Landscaping across Silicon Valley & the Bay Area.",
        canonical: "https://snslandscaping.org/gallery",
        ogImage: "https://snslandscaping.org/images/gallery/stone_feature_2.jpg",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
      }}
    >
      {/* Page header */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Outdoor Spaces We've Built"
              description="A look at the patios, walkways, stone features, and landscapes we design and build across Silicon Valley & the Bay Area."
            />
          </Reveal>
        </div>
      </section>

      {/* Full-bleed featured banner */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden md:h-[60vh]">
        <img
          src="/images/gallery/backyard_concept.jpg"
          alt="Featured landscape project — backyard with stone fountain and garden"
          loading="eager"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <Eyebrow light>Featured Project</Eyebrow>
              <h2 className="mt-3 font-heading text-2xl font-medium text-white md:text-4xl">
                Backyard Turf &amp; Putting Green
              </h2>
              <p className="mt-2 max-w-xl text-white/70 md:text-lg">
                A finished backyard with artificial turf, a putting green, concrete walks, and a fire pit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category filters + masonry grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <Reveal className="mb-12 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-fluid ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                type="button"
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Masonry grid */}
          <div className="masonry">
            {visibleIndices.map((idx, i) => {
              const project = GALLERY_ITEMS[idx];
              return (
                <Reveal key={project.title} delay={(i % 3) * 80} className="masonry-item">
                  <button
                    type="button"
                    onClick={() => setLightbox(idx)}
                    className="group block w-full text-left"
                    aria-label={`View larger image: ${project.title}`}
                  >
                    <div className="bezel">
                      <div className="bezel-inner relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 transition-fluid group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-fluid group-hover:opacity-100">
                          <h3 className="font-heading text-base font-medium text-white">{project.title}</h3>
                          <p className="mt-1 text-xs text-white/70">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* CTA */}
          <Reveal delay={200} className="mt-16">
            <div className="bezel">
              <div className="bezel-inner flex flex-col items-center gap-6 p-8 text-center md:p-16">
                <Eyebrow>Get Started</Eyebrow>
                <h2 className="font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                  Want a Space Like These?
                </h2>
                <p className="max-w-xl text-muted-foreground md:text-lg">
                  Get a free quote for your own landscaping project. We respond within 24 hours.
                </p>
                <Link to="/contact#quote-form">
                  <Button size="lg" variant="cta" className="group/button rounded-full px-6 py-3.5 text-base font-semibold">
                    {CTA_LABEL}
                    <span className="btn-icon-circle btn-icon-circle-light ml-2">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-3xl bg-background p-0 sm:max-w-3xl">
          {lightbox !== null && (
            <>
              <DialogTitle className="sr-only">
                {GALLERY_ITEMS[lightbox].title}
              </DialogTitle>
              <img
                src={GALLERY_ITEMS[lightbox].image}
                alt={GALLERY_ITEMS[lightbox].title}
                className="w-full rounded-xl object-contain"
              />
              <div className="px-4 pb-4">
                <h3 className="font-heading text-lg font-semibold">
                  {GALLERY_ITEMS[lightbox].title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {GALLERY_ITEMS[lightbox].description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
