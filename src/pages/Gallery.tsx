import { useState } from "react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME, CTA_LABEL } from "@/lib/site";
import { GALLERY_ITEMS } from "@/lib/sns-data";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-muted-foreground">
              A look at the outdoor spaces we design and build across Silicon Valley & the Bay Area.
            </p>
          </Reveal>

          {/* Featured carousel */}
          <Reveal delay={100} className="mt-12 w-full">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent className="pb-1">
                {GALLERY_ITEMS.map((project, i) => (
                  <CarouselItem key={project.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="flex h-full flex-col overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setLightbox(i)}
                        className="block w-full p-3 text-left"
                        aria-label={`View larger image: ${project.title}`}
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="size-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                          />
                        </div>
                      </button>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{project.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2 size-9 bg-background/80 shadow-md backdrop-blur-sm md:-left-3 md:size-10" />
              <CarouselNext className="-right-2 size-9 bg-background/80 shadow-md backdrop-blur-sm md:-right-3 md:size-10" />
            </Carousel>
          </Reveal>

          {/* Full grid */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_ITEMS.map((project, i) => (
                <Reveal key={project.title} delay={(i % 3) * 80}>
                  <Card className="overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      className="block w-full p-3 text-left"
                      aria-label={`View larger image: ${project.title}`}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                        />
                      </div>
                    </button>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200} className="mt-16 rounded-xl bg-muted p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Want a Space Like These?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Get a free quote for your own landscaping project.
            </p>
            <Link to="/contact#quote-form" className="mt-6 inline-block">
              <Button size="lg" variant="cta">{CTA_LABEL}</Button>
            </Link>
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
