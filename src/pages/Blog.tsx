import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME } from "@/lib/site";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog-data";
import { format } from "date-fns";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <Layout
      seo={{
        title: `Landscaping Blog | ${BUSINESS_NAME}`,
        description:
          "Expert tips on drought-tolerant landscaping, paver patio design, landscape lighting, garden maintenance, and outdoor living ideas for Bay Area homeowners from S&S Landscaping.",
        canonical: "https://snslandscaping.org/blog",
        ogImage: "https://snslandscaping.org/images/gallery/illuminated_steps.jpg",
      }}
      business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
    >
      {/* Page header */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Tips & Ideas"
              title="Landscaping Tips & Project Guides"
              description="Expert advice on landscaping, hardscaping, irrigation, and outdoor living from the team at S&S Landscaping."
            />
          </Reveal>
        </div>
      </section>

      {/* Category filter bar */}
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/blog">
              <span className="cursor-pointer rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                All Articles
              </span>
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link key={cat.slug} to={`/blog/category/${cat.slug}`}>
                <span className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-fluid hover:bg-muted hover:text-foreground">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bezel h-full">
                    <div className="bezel-inner flex h-full flex-col">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-5">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {BLOG_CATEGORIES.find((c) => c.slug === post.category)?.name ?? post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {format(new Date(post.publishedAt), "MMM d, yyyy")}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg font-medium leading-snug text-foreground">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-fluid group-hover:gap-2.5">
                          Read article
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
