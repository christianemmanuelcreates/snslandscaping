import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight, Newspaper } from "lucide-react";
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
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Category Not Found
            </h1>
            <Link to="/blog" className="mt-6 inline-block">
              <Button size="lg">View All Articles</Button>
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
      }}
      business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto min-w-0 max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 md:pt-24">
          <div className="flex min-w-0 flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Link to="/blog" className="hover:text-primary-foreground underline-offset-4 hover:underline">
                Blog
              </Link>
              <span>/</span>
              <span>{cat.name}</span>
            </div>
            <Newspaper className="size-10 text-primary-foreground" aria-hidden="true" />
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl">
              {cat.name}
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/90">
              {cat.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category filter bar */}
      <section className="border-b bg-muted/50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/blog">
              <Badge variant="outline" className="cursor-pointer px-3 py-1.5 text-sm transition-colors hover:bg-accent">
                All Articles
              </Badge>
            </Link>
            {BLOG_CATEGORIES.map((c) => (
              <Link key={c.slug} to={`/blog/category/${c.slug}`}>
                <Badge
                  variant={c.slug === cat.slug ? "default" : "outline"}
                  className="cursor-pointer px-3 py-1.5 text-sm transition-colors hover:bg-accent"
                >
                  {c.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-muted-foreground">
                No articles in this category yet. Check back soon!
              </p>
              <Link to="/blog" className="mt-6 inline-block">
                <Button variant="outline">View All Articles</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="flex h-full flex-col overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
                  <div className="p-3">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {BLOG_CATEGORIES.find((c) => c.slug === post.category)?.name ?? post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(post.publishedAt), "MMM d, yyyy")}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Read article
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
