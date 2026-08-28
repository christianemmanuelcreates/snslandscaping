/**
 * S&S Landscaping — blog data layer (single source of truth).
 * All blog copy is authored here; pages read from this file, never hardcode.
 */

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  body: BlogBlock[];
  faqs?: { question: string; answer: string }[];
};

export const BLOG_AUTHOR = {
  name: "Samuel Delgado",
  url: "https://snslandscaping.org/about",
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "landscaping",
    name: "Landscaping",
    description:
      "Lawn installation, planting, garden design, and seasonal care tips for Bay Area homeowners.",
  },
  {
    slug: "hardscaping",
    name: "Hardscaping",
    description:
      "Patios, walkways, retaining walls, masonry, and outdoor structure guides and inspiration.",
  },
  {
    slug: "irrigation-drainage",
    name: "Irrigation & Drainage",
    description:
      "Sprinkler systems, smart irrigation, drip lines, and landscape drainage solutions.",
  },
  {
    slug: "outdoor-amenities",
    name: "Outdoor Amenities",
    description:
      "Water features, landscape lighting, fire pits, and finishing touches that elevate your yard.",
  },
  {
    slug: "design-ideas",
    name: "Design Ideas",
    description:
      "Inspiration, layout concepts, and material choices for planning your outdoor living space.",
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    description:
      "Seasonal upkeep, watering schedules, and care tips to keep your landscape thriving year-round.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "drought-tolerant-landscaping-ideas-bay-area",
    title: "Drought-Tolerant Landscaping Ideas for Bay Area Yards",
    description:
      "Practical drought-tolerant landscaping ideas that thrive in Silicon Valley's climate, from native plants to efficient irrigation and hardscape choices.",
    category: "landscaping",
    tags: ["drought-tolerant", "native plants", "water-wise", "bay area"],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    image: "/images/gallery/stone_feature.jpg",
    imageAlt:
      "Drought-tolerant landscaping with stone features, ornamental grasses, and river rock in a Bay Area yard",
    excerpt:
      "Water-wise landscaping doesn't mean sacrificing beauty. Here's how to design a yard that thrives in dry Bay Area summers with less water and less maintenance.",
    body: [
      {
        type: "paragraph",
        text: "Bay Area summers are long and dry, and water conservation is a fact of life for homeowners across Silicon Valley. Drought-tolerant landscaping lets you reduce water use while keeping your yard beautiful, functional, and inviting year-round.",
      },
      { type: "heading", text: "Choose the Right Plants" },
      {
        type: "paragraph",
        text: "Native and Mediterranean-climate plants are adapted to our wet winters and dry summers. They need less water, less fertilizer, and less maintenance once established.",
      },
      {
        type: "list",
        items: [
          "California lilac (Ceanothus) — vibrant blue spring blooms, evergreen foliage",
          "Manzanita — striking red bark, sculptural form, extremely drought-tolerant",
          "Lavender — fragrant, pollinator-friendly, and thrives in full sun",
          "Salvia — long-blooming, deer-resistant, and available in many colors",
          "Ornamental grasses — texture and movement with minimal water",
        ],
      },
      { type: "heading", text: "Use Efficient Irrigation" },
      {
        type: "paragraph",
        text: "Drip irrigation delivers water directly to root zones, reducing evaporation and runoff. Pair it with a smart controller that adjusts watering based on weather and soil moisture, and your landscape stays healthy with a fraction of the water.",
      },
      { type: "heading", text: "Incorporate Hardscape Elements" },
      {
        type: "paragraph",
        text: "Patios, walkways, gravel paths, and decorative stone reduce the planted area that needs water while adding structure and usability to your yard. A well-planned hardscape also creates visual interest that looks great in every season.",
      },
      { type: "heading", text: "Mulch Everything" },
      {
        type: "paragraph",
        text: "A 2-3 inch layer of mulch around plants retains soil moisture, suppresses weeds, and regulates soil temperature. Organic mulches like bark or compost also improve soil structure over time.",
      },
      {
        type: "quote",
        text: "A well-designed drought-tolerant yard uses a fraction of the water of a traditional lawn, looks beautiful in every season, and almost takes care of itself.",
        attribution: "Samuel Delgado, S&S Landscaping",
      },
      { type: "heading", text: "Ready to Go Drought-Tolerant?" },
      {
        type: "paragraph",
        text: "Whether you want a full redesign or just want to swap out a thirsty lawn for something more sustainable, we can help. Contact S&S Landscaping for a free consultation and quote.",
      },
    ],
    faqs: [
      {
        question: "How much water can I save with drought-tolerant landscaping?",
        answer:
          "A well-designed drought-tolerant landscape can reduce outdoor water use by 50-70% compared to a traditional lawn, especially when paired with drip irrigation and smart controllers.",
      },
      {
        question: "Will a drought-tolerant yard still look good?",
        answer:
          "Absolutely. Drought-tolerant landscapes use a mix of colorful natives, textured grasses, and hardscape elements to create year-round visual interest.",
      },
      {
        question: "How long does it take for drought-tolerant plants to establish?",
        answer:
          "Most drought-tolerant plants need regular watering for the first year to establish deep roots. After that, they need far less water and maintenance.",
      },
    ],
  },
  {
    slug: "paver-patio-design-guide",
    title: "Paver Patio Design Guide: Materials, Layouts, and Costs",
    description:
      "Everything you need to know about planning a paver patio in the Bay Area, from choosing materials to layout patterns, drainage, and budgeting.",
    category: "hardscaping",
    tags: ["paver patio", "hardscaping", "outdoor living", "design"],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    image: "/images/gallery/stone_feature_2.jpg",
    imageAlt:
      "Finished paver patio with a curved stone seating wall and central fire pit",
    excerpt:
      "A paver patio is one of the best investments you can make in your outdoor space. Here's how to plan one that fits your home, your lifestyle, and your budget.",
    body: [
      {
        type: "paragraph",
        text: "A well-built paver patio extends your living space outdoors, adds value to your home, and provides a durable surface that lasts for decades. Here's what to consider when planning yours.",
      },
      { type: "heading", text: "Choosing Paver Materials" },
      {
        type: "paragraph",
        text: "The three most common paver materials each have distinct advantages:",
      },
      {
        type: "list",
        items: [
          "Concrete pavers — affordable, available in many colors and shapes, easy to replace individually",
          "Natural stone (flagstone, granite, slate) — premium look, extremely durable, higher cost",
          "Brick pavers — classic warmth, timeless appeal, good for traditional homes",
        ],
      },
      { type: "heading", text: "Layout Patterns" },
      {
        type: "paragraph",
        text: "The laying pattern affects both appearance and structural integrity. Popular choices include herringbone (excellent for high-traffic areas), running bond (simple and versatile), and basket weave (elegant for smaller spaces).",
      },
      { type: "heading", text: "Don't Forget Drainage" },
      {
        type: "paragraph",
        text: "Proper base preparation and slope are critical. A patio should slope about 1 inch per 8 feet away from your home to prevent water pooling and foundation issues. We handle grading and drainage as part of every patio install.",
      },
      { type: "heading", text: "Budgeting Your Patio" },
      {
        type: "paragraph",
        text: "Cost depends on material choice, patio size, site prep requirements, and any additional features like seating walls, fire pits, or lighting. We provide free quotes with transparent pricing so you know exactly what to expect.",
      },
      {
        type: "quote",
        text: "A great patio starts below ground. The base work is what makes a patio last 20+ years without settling or shifting.",
        attribution: "Samuel Delgado, S&S Landscaping",
      },
    ],
    faqs: [
      {
        question: "How long does a paver patio take to install?",
        answer:
          "Most residential patios are completed in 3-7 days depending on size, site prep, and complexity of the design.",
      },
      {
        question: "Do paver patios crack like concrete?",
        answer:
          "No. Pavers are individual units that flex with ground movement, so they rarely crack. If one does get damaged, it can be replaced individually without disturbing the rest of the patio.",
      },
      {
        question: "What's the best paver material for the Bay Area?",
        answer:
          "Concrete pavers are the most popular choice for Bay Area homes due to their versatility, affordability, and wide range of styles. Natural stone is a premium option for homeowners wanting a more distinctive look.",
      },
    ],
  },
  {
    slug: "low-voltage-landscape-lighting-benefits",
    title: "Low-Voltage Landscape Lighting: Benefits and Design Tips",
    description:
      "How low-voltage landscape lighting enhances safety, beauty, and usability of your outdoor space, with design tips and placement guidance.",
    category: "outdoor-amenities",
    tags: ["landscape lighting", "low-voltage", "outdoor living", "safety"],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    image: "/images/gallery/illuminated_steps.jpg",
    imageAlt:
      "Paver entry walkway with step lighting and brick retaining walls illuminated at night",
    excerpt:
      "Good landscape lighting transforms your yard after dark, making it safer, more beautiful, and more usable. Here's how to plan it right.",
    body: [
      {
        type: "paragraph",
        text: "Landscape lighting is one of the highest-impact upgrades you can make to your outdoor space. It extends usability into the evening, highlights architectural and landscape features, and improves safety along paths and steps.",
      },
      { type: "heading", text: "Why Low-Voltage?" },
      {
        type: "paragraph",
        text: "Low-voltage (12V) lighting systems are safe, energy-efficient, and easy to maintain. They use a transformer to step down household current, making them safe to touch and far cheaper to operate than line-voltage systems.",
      },
      { type: "heading", text: "Key Lighting Techniques" },
      {
        type: "list",
        items: [
          "Path lighting — illuminates walkways and steps for safety",
          "Up-lighting — highlights trees, walls, and architectural features",
          "Down-lighting — mimics moonlight for a soft, natural effect",
          "Accent lighting — draws attention to focal points like fountains or sculptures",
          "Grazing — highlights texture on stone or brick walls",
        ],
      },
      { type: "heading", text: "Placement Tips" },
      {
        type: "paragraph",
        text: "Less is more. A few well-placed fixtures create drama and depth, while too many lights create a flat, over-lit look. Focus on key features and transitions, and choose warm (2700K-3000K) color temperatures for a natural feel.",
      },
      {
        type: "quote",
        text: "The best landscape lighting you don't notice during the day but completely transforms the yard at night.",
        attribution: "Samuel Delgado, S&S Landscaping",
      },
    ],
    faqs: [
      {
        question: "How much does landscape lighting cost to run?",
        answer:
          "Low-voltage LED landscape lighting is very efficient. A typical system of 10-15 fixtures costs only a few dollars per month to operate.",
      },
      {
        question: "Can I add lighting to an existing landscape?",
        answer:
          "Yes. We can retrofit lighting into existing landscapes with minimal disruption, though it's easiest to plan lighting during a full landscape or hardscape install.",
      },
    ],
  },
];

/** Lookup helpers. */

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPost(slug);
  if (!post) return [];
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category
  );
  const otherPosts = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category !== post.category
  );
  return [...sameCategory, ...otherPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}
