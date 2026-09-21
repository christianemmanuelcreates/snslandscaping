import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
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
import { renderRichText } from "@/lib/blog-text";
import { Reveal } from "@/components/Reveal";

function BlogBlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-muted-foreground leading-relaxed">{renderRichText(block.text)}</p>;
    case "heading":
      return <h2 className="font-heading text-2xl font-medium tracking-tight text-balance pt-4">{block.text}</h2>;
    case "list":
      return (
        <ul className="flex flex-col gap-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span className="leading-relaxed">{renderRichText(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "ordered-list":
      return (
        <ol className="flex flex-col gap-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" aria-hidden="true">
                {i + 1}
              </span>
              <span className="leading-relaxed">{renderRichText(item)}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="my-2 overflow-x-auto rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                {block.headers.map((header, i) => (
                  <TableHead key={i} className="px-4 py-3 text-sm font-semibold">{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {block.rows.map((row, ri) => (
                <TableRow key={ri}>
                  {row.map((cell, ci) => (
                    <TableCell key={ci} className="px-4 py-3 text-sm text-muted-foreground">{renderRichText(cell)}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-2">
          <p className="font-heading text-lg font-medium text-foreground italic leading-relaxed">
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
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h1 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl">
              Article Not Found
            </h1>
            <Link to="/blog" className="mt-6 inline-block">
              <Button size="lg" className="rounded-full">View All Articles</Button>
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
        ogImage: post.image.startsWith("http") ? post.image : `https://snslandscaping.org${post.image}`,
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
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-fluid hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/blog" className="transition-fluid hover:text-foreground">Blog</Link>
            <span>/</span>
            <span className="truncate text-foreground">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article header */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {category && (
                <Link to={`/blog/category/${category.slug}`}>
                  <span className="cursor-pointer rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {category.name}
                  </span>
                </Link>
              )}
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </span>
            </div>
            <h1 className="font-heading text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="size-4 text-primary" aria-hidden="true" />
              <span>By {BLOG_AUTHOR.name}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bezel">
            <div className="bezel-inner overflow-hidden">
              <img
                src={post.image}
                alt={post.imageAlt}
                width={1600}
                height={900}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-16 md:pb-24">
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
        <section className="bg-sand py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <Eyebrow>Questions</Eyebrow>
                <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                  Frequently Asked Questions
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Accordion className="mt-16 w-full">
                {post.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow light>Get Started</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white text-balance md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Get a free quote from {BUSINESS_NAME} today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact#quote-form">
                <Button size="lg" variant="cta" className="group/button btn-lg-pad-end rounded-full py-3.5 text-base font-semibold">
                  {CTA_LABEL}
                  <span className="btn-icon-circle btn-icon-circle-light ml-2">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Button>
              </Link>
              <a href={PRIMARY_PHONE.phoneHref}>
                <Button size="lg" variant="outline" className="btn-lg-pad rounded-full border-white/20 bg-white/10 py-3.5 text-base font-semibold text-white transition-fluid hover:bg-white/20 hover:text-white">
                  <PhoneCall data-icon="inline-start" />
                  {PRIMARY_PHONE.phone}
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-white/50">We respond within 24 hours — no obligation.</p>
          </Reveal>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <Eyebrow>Keep Reading</Eyebrow>
                <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-balance md:text-4xl">
                  Related Articles
                </h2>
              </div>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, i) => (
                <Reveal key={related.slug} delay={i * 80}>
                  <Link to={`/blog/${related.slug}`} className="group block h-full">
                    <div className="bezel h-full">
                      <div className="bezel-inner flex h-full flex-col">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.imageAlt}
                            loading="lazy"
                            className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-5">
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary">
                              {BLOG_CATEGORIES.find((c) => c.slug === related.category)?.name ?? related.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(related.publishedAt), "MMM d, yyyy")}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg font-medium leading-snug text-foreground">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{related.excerpt}</p>
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
      )}
    </Layout>
  );
}
