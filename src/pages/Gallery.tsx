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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, CTA_LABEL } from "@/lib/site";

const PROJECTS = [
  { title: "Lush Lawn Installation", desc: "Fresh sod and seeded turf for a healthy, green yard.", gradient: "from-emerald-500 to-green-700" },
  { title: "Custom Patio & Paver Walkway", desc: "Durable paver patios and walkways built to last.", gradient: "from-stone-400 to-stone-600" },
  { title: "Retaining Wall & Grading", desc: "Structural retaining walls and site grading.", gradient: "from-stone-500 to-stone-700" },
  { title: "Smart Irrigation System", desc: "Weather-aware irrigation that saves water.", gradient: "from-sky-500 to-blue-700" },
  { title: "Garden Design & Planting", desc: "Trees, shrubs, and gardens designed for the Bay Area.", gradient: "from-lime-500 to-green-700" },
  { title: "Outdoor Lighting & Water Features", desc: "Low-voltage lighting and water features that elevate.", gradient: "from-teal-500 to-cyan-700" },
];

export default function Gallery() {
  return (
    <Layout
      seo={{
        title: `Gallery | ${BUSINESS_NAME} Projects`,
        description:
          "Browse landscaping, hardscaping, and outdoor living projects by S&S Landscaping across the SF Metro Area.",
        canonical: "https://snslandscaping.org/gallery",
      }}
      business={{
        name: BUSINESS_NAME,
        url: "https://snslandscaping.org/",
      }}
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-muted-foreground">
              A look at the outdoor spaces we design and build across the SF Metro Area.
            </p>
          </div>

          <Carousel className="mt-12 w-full">
            <CarouselContent>
              {PROJECTS.map((project) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="flex h-full flex-col overflow-hidden">
                    <AspectRatio ratio={4 / 3} className="bg-muted">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                        aria-hidden="true"
                      />
                    </AspectRatio>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.desc}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="mt-16 rounded-xl bg-muted p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
              Want a Space Like These?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Get a free quote for your own landscaping project.
            </p>
            <Link to="/contact" className="mt-6 inline-block">
              <Button size="lg">{CTA_LABEL}</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}