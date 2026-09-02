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
  | { type: "ordered-list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "table"; headers: string[]; rows: string[][] };

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
  {
    slug: "los-gatos-landscape-design-services-guide",
    title: "Los Gatos Landscape Design Services Guide",
    description:
      "Plan a durable Los Gatos landscape with drought-wise plants, turf, lighting, drainage, hardscape, and expert design-build guidance.",
    category: "landscaping",
    tags: ["los gatos", "landscape design", "drought-tolerant", "hardscaping", "outdoor lighting"],
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
    image: "/images/gallery/front_yard_2.jpg",
    imageAlt:
      "Finished Los Gatos landscape with lawn, paver border, and layered planting by S&S Landscaping",
    excerpt:
      "Los Gatos landscape design services turn outdoor space into a site-specific plan for planting, irrigation, drainage, lighting, hardscape, and daily living.",
    body: [
      {
        type: "paragraph",
        text: "Los Gatos landscape design services turn outdoor space into a site-specific plan for planting, irrigation, drainage, lighting, hardscape, and daily living. The right design responds to local sun, soil, slopes, water limits, and architecture, giving homeowners a cohesive landscape that performs over years—not an attractive installation that quickly becomes difficult to maintain.",
      },
      {
        type: "paragraph",
        text: "Successful Los Gatos projects begin with site analysis, clear priorities, and a buildable plan. Although Bay Area landscape conditions vary by neighborhood, Los Gatos properties often combine dry summers, mature trees, elevation changes, deer pressure, and distinct sun exposures. Plant choices that thrive on one side of town may fail on another lot.",
      },
      {
        type: "paragraph",
        text: "That is why local knowledge matters. The outcome homeowners want is simple: a team that knows exactly which plants work well here and completes a great job without forcing them to coordinate separate designers, irrigation crews, and masons. If you are looking for a trusted partner in the area, explore our [landscaping services in Los Gatos](/areas/los-gatos) or learn about our full [landscaping and planting](/services/landscaping-planting) capabilities.",
      },
      {
        type: "paragraph",
        text: "A dependable landscape design and construction sequence includes:",
      },
      {
        type: "ordered-list",
        items: [
          "Measuring the property and recording grades, drainage paths, utilities, soil conditions, shade, and existing plants.",
          "Defining how the household will use the space, from dining and play to gardening and privacy.",
          "Creating a scaled concept showing circulation, activity zones, planting masses, and focal points.",
          "Selecting materials, plants, irrigation, lighting, and construction details.",
          "Pricing the approved scope before landscape construction begins.",
        ],
      },
      {
        type: "paragraph",
        text: "This unified landscape design construction approach reduces field improvisation, protects the budget, and keeps design construction decisions tied to one plan.",
      },
      { type: "heading", text: "Drought-Tolerant Landscaping" },
      {
        type: "paragraph",
        text: "Drought-tolerant landscaping reduces irrigation demand without turning a garden into bare gravel. EPA WaterSense reports that outdoor use accounts for about 30% of household water consumption nationwide, and as much as half of outdoor water can be lost through inefficient watering methods and systems.",
      },
      {
        type: "paragraph",
        text: "A strong Los Gatos plan groups plants by water need, improves soil where appropriate, applies mulch, and uses drip irrigation with separate hydrozones. California's Model Water Efficient Landscape Ordinance establishes water-efficiency requirements for qualifying projects, including new construction landscapes of 500 square feet or more and certain rehabilitated landscapes of 2,500 square feet or more that require permits.",
      },
      {
        type: "paragraph",
        text: "The best Bay Area landscape is climate-adapted rather than plant-deprived. Layered California natives and Mediterranean species can provide seasonal color, habitat, privacy, and a cooler outdoor setting while cutting waste. For more ideas, see our guide to [drought-tolerant landscaping for Bay Area yards](/blog/drought-tolerant-landscaping-ideas-bay-area). We highly recommend choosing plants by mature size and exposure—not by how they look in nursery containers.",
      },
      { type: "heading", text: "Sod and Artificial Grass" },
      {
        type: "paragraph",
        text: "Sod and artificial grass solve different problems, so the correct choice depends on use, heat, drainage, maintenance, and water goals.",
      },
      {
        type: "table",
        headers: ["Surface", "Best application", "Main benefit", "Key consideration"],
        rows: [
          ["Natural sod", "Play areas and cool walking surfaces", "Living, cooler ground cover", "Requires irrigation, mowing, and feeding"],
          ["Artificial grass", "High-use zones where mowing is unwanted", "Consistent appearance and no routine watering", "Needs sound drainage and can become hot in direct sun"],
          ["Low-water ground cover", "Decorative or lightly used areas", "Plant texture with less water than lawn", "Cannot tolerate the same traffic as turf"],
        ],
      },
      {
        type: "paragraph",
        text: "A professional backyard remodel may combine all three. Limiting turf to a functional rectangle, rather than treating it as leftover ground cover, lowers maintenance and leaves room for shade trees, pollinator planting, and permeable paths.",
      },
      { type: "heading", text: "Nightscapes" },
      {
        type: "paragraph",
        text: "A well-designed nightscape improves safe movement, extends outdoor use, and reveals the landscape after sunset. Low-voltage fixtures should illuminate steps, grade changes, entrances, gathering areas, and selected trees without flooding windows or neighboring properties with glare.",
      },
      {
        type: "paragraph",
        text: "Effective plans use restrained layers: shielded path lights for circulation, downlights for natural moonlighting, and carefully aimed accents for depth. The design features should be specified during planning so sleeves, transformers, cable routes, and controls are installed before paving and planting are complete. This prevents visible wiring and expensive disruption later. Learn more about our [outdoor amenities and landscape lighting](/services/outdoor-amenities) services, or read our guide to [low-voltage landscape lighting](/blog/low-voltage-landscape-lighting-benefits).",
      },
      { type: "heading", text: "Planting" },
      {
        type: "paragraph",
        text: "Planting succeeds when every species matches the property's microclimate and available maintenance. Los Gatos landscape design services should evaluate afternoon heat, reflected light, frost pockets, canopy roots, deer exposure, drainage, and the size each plant will reach.",
      },
      {
        type: "paragraph",
        text: "The rule of three in landscaping means repeating plants, colors, forms, or materials in groups of three or at least three locations. Odd-numbered groups feel natural, while repetition connects separate beds into one visual composition. It is a design principle, not a rule requiring every plant to appear exactly three times.",
      },
      {
        type: "paragraph",
        text: "Use repetition selectively. Three multi-trunk trees can establish rhythm, while repeated grasses can guide the eye through the garden. Fewer species planted in confident masses often produce a calmer area landscape design than a collection of unrelated specimens.",
      },
      { type: "heading", text: "Choosing the Right Landscape Professional" },
      {
        type: "paragraph",
        text: "The right professional depends on whether a project needs site design, regulated technical work, or broad land-use planning. Before hiring, review the contractor's project portfolio, licensing, insurance, references, material allowances, exclusions, payment schedule, and change-order terms. Ask to see the proposed plant palette and irrigation zones—not just attractive renderings. Explore the available [services](/) we offer, then [contact us](/contact) to confirm scope and scheduling.",
      },
      {
        type: "paragraph",
        text: "**Schedule Your Los Gatos Landscape Design Consultation** and get a site-specific plan for a durable, water-conscious outdoor space.",
      },
    ],
    faqs: [
      {
        question: "How much does a landscape architect charge per hour?",
        answer:
          "Current consumer cost guides commonly place hourly fees around $50–$150, with senior specialists and complex Bay Area work potentially costing more. Request a written scope showing meetings, revisions, drawings, and permit coordination.",
      },
      {
        question: "Can ChatGPT do landscape design?",
        answer:
          "ChatGPT can organize requirements, suggest style directions, and create planning checklists. It cannot verify grades, locate utilities, test soil, inspect drainage, produce dependable site measurements, or assume professional responsibility for construction documents.",
      },
      {
        question: "Landscape architect or landscape planner?",
        answer:
          "A landscape architect designs specific sites and may prepare technical documents for grading, drainage, planting, and built elements. A landscape planner works at a broader scale on land use, environmental systems, parks, communities, and regional policy.",
      },
      {
        question: "When is a design-build contractor valuable?",
        answer:
          "Choose one when the same accountable team must connect plans with demolition, irrigation, planting, paving, walls, lighting, modern louvered pergolas, and field execution.",
      },
    ],
  },
  {
    slug: "saratoga-garden-maintenance-services-guide",
    title: "Saratoga Garden Maintenance Services Guide",
    description:
      "Expert Saratoga garden maintenance, mowing, pruning, irrigation, cleanup, fertilization, aeration, and weed control from S&S Landscaping.",
    category: "maintenance",
    tags: ["saratoga", "garden maintenance", "lawn mowing", "irrigation", "weed control"],
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
    image: "/images/gallery/yard_work.jpg",
    imageAlt:
      "Maintained Saratoga yard with clean lawn edges, pruned shrubs, and tidy planting beds by S&S Landscaping",
    excerpt:
      "Saratoga garden maintenance services protect lawns, shrubs, planting beds, and irrigation systems through scheduled mowing, pruning, weeding, feeding, cleanup, and water management.",
    body: [
      {
        type: "paragraph",
        text: "Saratoga garden maintenance services protect lawns, shrubs, planting beds, and irrigation systems through scheduled mowing, pruning, weeding, feeding, cleanup, and water management. The right maintenance plan responds to each property's soil, sunlight, plants, and seasonal growth, giving owners a healthier landscape without losing weekends to recurring outdoor work.",
      },
      {
        type: "paragraph",
        text: "Saratoga owners need dependable local care rather than mismatched regional coverage. Reliable [Saratoga mowing](/) means consistent cutting heights, clean edging, cleared hard surfaces, and early reporting of irrigation leaks, weeds, pests, or declining plants. If you are looking for a trusted partner in the area, explore our [landscaping services in Saratoga](/areas/saratoga).",
      },
      {
        type: "paragraph",
        text: "S&S Landscaping is a landscape contractor focused on premium landscaping, hardscaping, irrigation, drainage, and outdoor living across the San Francisco Metro Area. Garden maintenance protects that investment by correcting small issues before they become dead turf, overgrown shrubs, or water-damaged surfaces.",
      },
      {
        type: "paragraph",
        text: "Landscape maintenance combines recurring care with seasonal interventions. Instead of hiring separate maintenance companies for every task, owners can coordinate turf, planting beds, irrigation, nutrition, and cleanup around one property plan.",
      },
      { type: "heading", text: "Lawn Mowing" },
      {
        type: "paragraph",
        text: "Professional [lawn mowing](/services/landscaping-planting) creates even growth without scalping. The technical one-third rule means never removing more than one-third of the grass blade in one cut; taking more can stress turf and expose soil to heat and weeds. Mowing at the correct height for each grass type, with sharp blades and alternating patterns, produces a healthier, denser lawn that resists weeds and drought.",
      },
      { type: "heading", text: "Sprinkler Installation and Repair" },
      {
        type: "paragraph",
        text: "Precise [sprinkler installation and repair](/services/irrigation-drainage) stops overspray, dry zones, runoff, and hidden waste. EPA WaterSense reports that replacing a standard clock controller with a WaterSense-labeled weather-based controller can save an average home up to 15,000 gallons annually. Regular inspection of heads, nozzles, and lines catches problems before they damage plants or waste water.",
      },
      { type: "heading", text: "Seasonal Cleanup Services" },
      {
        type: "paragraph",
        text: "Seasonal landscaping services prepare beds and turf for active growth, summer heat, leaf drop, and wet weather. Spring and fall cleanups remove debris, restore edges, prune at plant-appropriate times, and reveal drainage or irrigation faults. A thorough cleanup also refreshes mulch, clears gutters of leaf buildup, and resets bed lines that shifted during winter rains.",
      },
      { type: "heading", text: "Fertilization Services" },
      {
        type: "paragraph",
        text: "Fertilization services should follow plant needs and soil evidence, not a generic calendar. Correct product selection and measured application support color and root development while limiting excess growth, runoff, and unnecessary mowing. Soil testing identifies deficiencies so amendments target what the landscape actually needs.",
      },
      { type: "heading", text: "Aeration Services" },
      {
        type: "paragraph",
        text: "Aeration services relieve compacted turf by creating channels for air, water, and nutrients. A site inspection determines whether compaction, poor irrigation coverage, shade, disease, or worn soil is the true cause of thinning grass. Combined with overseeding and top dressing, aeration restores density to tired lawns.",
      },
      { type: "heading", text: "Weed Management" },
      {
        type: "paragraph",
        text: "Weed management works best before weeds seed. Crews identify the weed, remove or treat it at the right growth stage, improve mulch coverage, and correct bare soil or irrigation patterns that let it return. Consistent pre-emergent application and targeted post-emergent treatment keep beds and turf clean through every season. For water-smart planting that naturally suppresses weeds, see our guide to [drought-tolerant landscaping for Bay Area yards](/blog/drought-tolerant-landscaping-ideas-bay-area).",
      },
      { type: "heading", text: "How to Choose a Maintenance Provider" },
      {
        type: "paragraph",
        text: "Choose a provider that explains scope, frequency, exclusions, communication, and cleanup before work begins. The highest quality plan is measurable: defined areas, specific tasks, an agreed schedule, and a clear response process. Expert care connects symptoms to causes—brown turf can indicate poor coverage, a clogged nozzle, compaction, disease, or incorrect mowing, not simply a need for more water.",
      },
      {
        type: "paragraph",
        text: "Each proposal should reflect sun exposure, slope, soil, plant maturity, pets, foot traffic, and appearance goals. Compare providers using scope, visit frequency, disposal, materials, irrigation checks, insurance, communication, and cancellation terms—not price alone. Before hiring, review the contractor's licensing, insurance, references, and written scope. [Contact us](/contact) to confirm coverage and schedule a property walk-through.",
      },
      {
        type: "paragraph",
        text: "Protect your property with a plan built around its actual conditions. **Schedule Your Saratoga Garden Assessment** and get clear recommendations for healthier turf, cleaner beds, controlled shrubs, dependable irrigation, and season-ready grounds.",
      },
    ],
    faqs: [
      {
        question: "What does a local gardener charge in Saratoga?",
        answer:
          "Consumer pricing guides commonly place gardeners around $35–$80 per hour, with location, crew size, green-waste disposal, and task difficulty changing the quote. Ask for a property-specific written estimate.",
      },
      {
        question: "What is the rule of three in landscaping?",
        answer:
          "In landscape design, repeating three plants, colors, forms, or layers creates rhythm and cohesion. For mowing, the separate one-third rule limits blade removal to one-third per cut to avoid stressing the turf.",
      },
      {
        question: "How should I compare landscape maintenance companies?",
        answer:
          "Match scope, visit frequency, disposal, materials, irrigation checks, insurance, communication, and cancellation terms—not price alone. Request a written scope so you can compare equivalent services across providers.",
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
