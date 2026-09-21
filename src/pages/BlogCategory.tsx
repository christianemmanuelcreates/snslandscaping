import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUSINESS_NAME } from "@/lib/site";
import {
  getCategory,
  getPostsByCategory,
  BLOG_CATEGORIES,
} from "@/lib/blog-data";
import { format } from "date-fns";

export default function BlogCategory() {
  const { category } = useParams<{ category: string }>();
  const cat = getCategory(category ?? "");
  const posts = getPostsByCategory(category ?? "");

  if (!cat) {
    return (
      <Layout
        seo={{
          title: `Category Not Found | ${BUSINESS_NAME}`,
          description: "The blog category you requested could not be found.",
          canonical: "https://snslandscaping.org/blog",
        }}
        business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
      >
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h1 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl">
              Category Not Found
            </h1>
            <Link to="/blog" className="mt-6 inline-block">
              <Button size="lg" className="rounded-full">View All Articles</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      seo={{
        title: `${cat.name} Articles | ${BUSINESS_NAME}`,
        description: cat.description,
        canonical: `https://snslandscaping.org/blog/category/${cat.slug}`,
        ogImage: "https://snslandscaping.org/images/gallery/stone_feature.jpg",
        noindex: true,
        noindexFollow: true,
      }}
      business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
    >
      {/* Page header */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/blog" className="transition-fluid hover:text-foreground">Blog</Link>
                <span>/</span>
                <span className="text-foreground">{cat.name}</span>
              </div>
              <Eyebrow>Category</Eyebrow>
              <h1 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
                {cat.name}
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                {cat.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category filter bar */}
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/blog">
              <span className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-fluid hover:bg-muted hover:text-foreground">
                All Articles
              </span>
            </Link>
            {BLOG_CATEGORIES.map((c) => (
              <Link key={c.slug} to={`/blog/category/${c.slug}`}>
                <span
                  className={`cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium transition-fluid ${
                    c.slug === cat.slug
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-muted-foreground">
                No articles in this category yet. Check back soon!
              </p>
              <Link to="/blog" className="mt-6 inline-block">
                <Button variant="outline" className="rounded-full">View All Articles</Button>
              </Link>
            </div>
          ) : (
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
          )}
        </div>
      </section>
    </Layout>
  );
}
