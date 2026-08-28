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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowRight, PhoneCall, CalendarDays, User } from "lucide-react";
import { BUSINESS_NAME, CTA_LABEL, PRIMARY_PHONE } from "@/lib/site";
import {
  getPost,
  getRelatedPosts,
  getCategory,
  BLOG_CATEGORIES,
  BLOG_AUTHOR,
  type BlogBlock,
} from "@/lib/blog-data";
import { format } from "date-fns";

function BlogBlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-muted-foreground leading-relaxed">{block.text}</p>;
    case "heading":
      return <h2 className="text-2xl font-bold tracking-tight text-balance pt-4">{block.text}</h2>;
    case "list":
      return (
        <ul className="flex flex-col gap-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-2">
          <p className="text-lg font-medium text-foreground italic leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <footer className="mt-2 text-sm text-muted-foreground">
              &mdash; {block.attribution}
            </footer>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug ?? "");

  if (!post) {
    return (
      <Layout
        seo={{
          title: `Article Not Found | ${BUSINESS_NAME}`,
          description: "The article you requested could not be found.",
          canonical: "https://snslandscaping.org/blog",
        }}
        business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
      >
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Article Not Found
            </h1>
            <Link to="/blog" className="mt-6 inline-block">
              <Button size="lg">View All Articles</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const category = getCategory(post.category);
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <Layout
      seo={{
        title: `${post.title} | ${BUSINESS_NAME}`,
        description: post.description,
        canonical: `https://snslandscaping.org/blog/${post.slug}`,
        ogType: "article",
        schemaTypes: ["Article"],
        article: {
          headline: post.title,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          authorName: BLOG_AUTHOR.name,
          authorUrl: BLOG_AUTHOR.url,
          image: post.image,
          section: category?.name,
        },
      }}
      business={{ name: BUSINESS_NAME, url: "https://snslandscaping.org/" }}
      faqs={post.faqs}
    >
      {/* Breadcrumb */}
      <section className="border-b bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground underline-offset-4 hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-foreground underline-offset-4 hover:underline">
              Blog
            </Link>
            <span>/</span>
            <span className="truncate text-foreground">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article header */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {category && (
                <Link to={`/blog/category/${category.slug}`}>
                  <Badge variant="secondary" className="cursor-pointer text-xs">
                    {category.name}
                  </Badge>
                </Link>
              )}
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-balance sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="size-4 text-primary" aria-hidden="true" />
              <span>By {BLOG_AUTHOR.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="flex flex-col gap-5">
            {post.body.map((block, i) => (
              <BlogBlockRenderer key={i} block={block} />
            ))}
          </article>
        </div>
      </section>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion className="mt-12 w-full">
              {post.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-primary-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Get a free quote from {BUSINESS_NAME} today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button size="lg" className="bg-white text-primary hover:bg-stone-100 hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-stone-100 dark:hover:text-primary">
                  {CTA_LABEL}
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="border-white/70 bg-white text-primary hover:bg-stone-100 hover:text-primary dark:border-white/70 dark:bg-white dark:text-primary dark:hover:bg-stone-100 dark:hover:text-primary">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Related Articles
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Card key={related.slug} className="flex h-full flex-col overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
                  <div className="p-3">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                      <img
                        src={related.image}
                        alt={related.imageAlt}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {BLOG_CATEGORIES.find((c) => c.slug === related.category)?.name ?? related.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(related.publishedAt), "MMM d, yyyy")}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{related.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed">{related.excerpt}</p>
                    <Link
                      to={`/blog/${related.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Read article
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
