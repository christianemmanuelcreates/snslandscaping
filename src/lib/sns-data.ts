import type { LucideIcon } from "lucide-react";
import {
  Sun,
  Building,
  HardHat,
  RefreshCcw,
  Sparkles,
} from "lucide-react";

/**
 * S&S Landscaping — data layer (single source of truth).
 * All page copy is authored here; pages read from this file, never hardcode.
 */

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  features: string[];
  isCore: boolean;
  faqs: { question: string; answer: string }[];
};

export type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

export type Area = {
  slug: string;
  name: string;
  county: string;
  metro: string;
  lat: number;
  lng: number;
};

export const SERVICES: Service[] = [
  {
    slug: "landscaping-planting",
    name: "Landscaping & Planting",
    tagline: "Lawns, trees, shrubs, and garden design",
    description:
      "Complete landscaping and planting services across Silicon Valley and the Bay Area. We install sod and seeded lawns, plant trees and shrubs, design climate-appropriate gardens, and provide seasonal planting and maintenance plans. Every project starts with proper soil preparation so new plantings establish strong, healthy roots that thrive in our Bay Area climate.",
    icon: Sun,
    image: "/images/gallery/front_yard_2.jpg",
    imageAlt: "Completed lawn and paver border in a residential yard",
    features: [
      "Lawn installation & turf",
      "Tree & shrub planting",
      "Garden design",
      "Seasonal planting",
    ],
    isCore: true,
    faqs: [
      {
        question: "Do you install new lawns?",
        answer:
          "Yes, we install sod and seeded lawns with proper soil prep for healthy, long-lasting turf.",
      },
      {
        question: "Can you design a garden from scratch?",
        answer:
          "We design and plant gardens tailored to your space, sun exposure, and maintenance preferences.",
      },
      {
        question: "Do you handle tree and shrub planting?",
        answer:
          "We plant trees and shrubs sized for your yard and care for them through establishment.",
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes, we offer seasonal planting and care plans to keep your landscape thriving year-round.",
      },
    ],
  },
  {
    slug: "hardscaping",
    name: "Hardscaping",
    tagline: "Patios, walkways, retaining walls & masonry",
    description:
      "Durable, beautiful hardscape construction including paver patios, flagstone and concrete patios, paver walkways, retaining walls for grading and drainage, and decorative masonry. We handle base preparation, grading, and slope so every hardscape sheds water correctly and stays level for decades. Serving residential and commercial properties across Silicon Valley.",
    icon: Building,
    image: "/images/gallery/stone_feature_2.jpg",
    imageAlt: "Stone seating wall and fire pit surrounded by a finished patio",
    features: [
      "Patio installation",
      "Paver walkways",
      "Retaining wall builders",
      "Decorative masonry",
    ],
    isCore: true,
    faqs: [
      {
        question: "What materials do you use for patios?",
        answer:
          "We install paver, flagstone, and concrete patios built to last in our climate.",
      },
      {
        question: "Do you build retaining walls?",
        answer:
          "Yes, we design and build retaining walls for grading, drainage, and visual structure.",
      },
      {
        question: "Can you match existing masonry?",
        answer:
          "We match existing stone and masonry so new hardscape blends with your home.",
      },
      {
        question: "How long does a patio install take?",
        answer:
          "Most patios are completed within a few days to a week depending on size and site prep.",
      },
    ],
  },
  {
    slug: "site-preparation",
    name: "Site Preparation",
    tagline: "Grading, excavation & soil preparation",
    description:
      "Professional site preparation including land grading, excavation, soil preparation and amendment, and erosion control. We level and shape sites for construction or landscaping, prepare soil for healthy planting, and install erosion control measures to protect your property and surrounding areas throughout Silicon Valley and the Bay Area.",
    icon: HardHat,
    image: "/images/gallery/gravel_side_path.jpg",
    imageAlt: "Gravel side path with large concrete stepping stones beside a home",
    features: [
      "Land grading services",
      "Site excavation",
      "Soil preparation",
      "Erosion control",
    ],
    isCore: false,
    faqs: [
      {
        question: "Do you handle land grading?",
        answer:
          "Yes, we provide land grading to level and shape your site for construction or landscaping.",
      },
      {
        question: "Can you prepare soil for planting?",
        answer:
          "We prepare and amend soil so new plantings establish strong, healthy roots.",
      },
      {
        question: "Do you manage erosion control?",
        answer:
          "Yes, we install erosion control measures to protect your site and surrounding areas.",
      },
      {
        question: "Is excavation included?",
        answer:
          "We handle site excavation for foundations, drainage, and landscape features.",
      },
    ],
  },
  {
    slug: "irrigation-drainage",
    name: "Irrigation & Drainage",
    tagline: "Sprinklers, smart irrigation & drainage",
    description:
      "Efficient irrigation and drainage systems for Bay Area landscapes. We install and repair sprinkler systems, design smart weather-aware irrigation controllers, install drip irrigation for beds and planters, and build landscape drainage solutions that move water away from structures and plantings. Our systems reduce water waste while keeping your landscape healthy.",
    icon: RefreshCcw,
    image: "/images/gallery/front_yard.jpg",
    imageAlt: "Completed artificial turf lawn with concrete walkways in a residential yard",
    features: [
      "Sprinkler system install & repair",
      "Smart irrigation",
      "Drip irrigation",
      "Landscape drainage",
    ],
    isCore: true,
    faqs: [
      {
        question: "Do you install sprinkler systems?",
        answer:
          "Yes, we install and repair sprinkler systems sized to your landscape and water needs.",
      },
      {
        question: "What is smart irrigation?",
        answer:
          "Smart irrigation uses weather-aware controllers to water efficiently and reduce waste.",
      },
      {
        question: "Can you fix drainage issues?",
        answer:
          "We design and install landscape drainage to move water away from structures and plantings.",
      },
      {
        question: "Do you offer drip irrigation?",
        answer:
          "Yes, we install drip irrigation for beds and planters to water roots directly.",
      },
    ],
  },
  {
    slug: "outdoor-amenities",
    name: "Outdoor Amenities",
    tagline: "Water features & landscape lighting",
    description:
      "Outdoor amenities that elevate your space, including fountains, ponds, and water features, low-voltage landscape lighting for paths and architecture, and decorative treatments like stone, mulch, and accents. We design and install finishing touches that make your yard more beautiful, usable, and safe after dark.",
    icon: Sparkles,
    image: "/images/gallery/tori_bench.jpg",
    imageAlt: "Wood pergola with swing seating, gravel path, and planted garden beds",
    features: [
      "Water features",
      "Low-voltage landscape lighting",
      "Decorative treatments",
    ],
    isCore: false,
    faqs: [
      {
        question: "Do you install water features?",
        answer:
          "Yes, we install fountains, ponds, and other water features as a focal point for your yard.",
      },
      {
        question: "What landscape lighting do you offer?",
        answer:
          "We install low-voltage landscape lighting to highlight paths, plants, and architecture.",
      },
      {
        question: "Are your lighting systems energy efficient?",
        answer:
          "Yes, our low-voltage systems are efficient and safe for outdoor use.",
      },
      {
        question: "Can you add decorative treatments?",
        answer:
          "We add decorative treatments like stone, mulch, and accents to finish your landscape.",
      },
    ],
  },
];

export const AREAS: Area[] = [
  { slug: "los-gatos", name: "Los Gatos", county: "Santa Clara", metro: "Silicon Valley", lat: 37.2266, lng: -121.9617 },
  { slug: "monte-sereno", name: "Monte Sereno", county: "Santa Clara", metro: "Silicon Valley", lat: 37.2363, lng: -121.9886 },
  { slug: "atherton", name: "Atherton", county: "San Mateo", metro: "Silicon Valley", lat: 37.4613, lng: -122.1977 },
  { slug: "los-altos", name: "Los Altos", county: "Santa Clara", metro: "Silicon Valley", lat: 37.3855, lng: -122.1142 },
  { slug: "palo-alto", name: "Palo Alto", county: "Santa Clara", metro: "Silicon Valley", lat: 37.4419, lng: -122.143 },
  { slug: "los-altos-hills", name: "Los Altos Hills", county: "Santa Clara", metro: "Silicon Valley", lat: 37.3797, lng: -122.1175 },
  { slug: "saratoga", name: "Saratoga", county: "Santa Clara", metro: "Silicon Valley", lat: 37.2639, lng: -121.9822 },
  { slug: "mountain-view", name: "Mountain View", county: "Santa Clara", metro: "Silicon Valley", lat: 37.3861, lng: -122.0839 },
  { slug: "cupertino", name: "Cupertino", county: "Santa Clara", metro: "Silicon Valley", lat: 37.323, lng: -122.0322 },
  { slug: "san-jose", name: "San Jose", county: "Santa Clara", metro: "Silicon Valley", lat: 37.3382, lng: -121.8863 },
  { slug: "santa-clara", name: "Santa Clara", county: "Santa Clara", metro: "Silicon Valley", lat: 37.3541, lng: -121.9552 },
  { slug: "campbell", name: "Campbell", county: "Santa Clara", metro: "Silicon Valley", lat: 37.2872, lng: -121.9499 },
  { slug: "milpitas", name: "Milpitas", county: "Santa Clara", metro: "Silicon Valley", lat: 37.4323, lng: -121.8916 },
  { slug: "alum-rock", name: "Alum Rock", county: "Santa Clara", metro: "Silicon Valley", lat: 37.3697, lng: -121.8236 },
  { slug: "emerald-hills", name: "Emerald Hills", county: "San Mateo", metro: "Silicon Valley", lat: 37.4651, lng: -122.2675 },
  { slug: "redwood-city", name: "Redwood City", county: "San Mateo", metro: "Silicon Valley", lat: 37.4852, lng: -122.2364 },
];


export const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: "/images/gallery/backyard_concept.jpg",
    title: "Backyard Turf & Putting Green",
    description: "A finished backyard with artificial turf, a putting green, concrete walks, and a fire pit.",
  },
  {
    image: "/images/gallery/front_yard.jpg",
    title: "Artificial Turf Backyard",
    description: "An artificial turf lawn with a block retaining wall and concrete side walkway.",
  },
  {
    image: "/images/gallery/front_yard_2.jpg",
    title: "Lawn & Paver Border",
    description: "A finished lawn framed by a paved walkway and clean stone edging.",
  },
  {
    image: "/images/gallery/front_yard_3.jpg",
    title: "Front Yard Turf Installation",
    description: "A completed artificial turf front yard with decorative stone and planting beds.",
  },
  {
    image: "/images/gallery/gravel_side_path.jpg",
    title: "Gravel Side Path",
    description: "A gravel side yard with large concrete stepping stones and defined planting beds.",
  },
  {
    image: "/images/gallery/stone_feature.jpg",
    title: "Stone Garden Feature",
    description: "A stone feature wall surrounded by river rock, ornamental grasses, and planted beds.",
  },
  {
    image: "/images/gallery/second_illuminated_walk_way.jpg",
    title: "Illuminated Paver Walkway",
    description: "A paver walkway with built-in lighting along the steps and retaining walls.",
  },
  {
    image: "/images/gallery/other_view_illuminated_walk_way.jpeg",
    title: "Landscape-Lit Walkway",
    description: "A finished walkway and steps with low-voltage lighting set into the surrounding walls.",
  },
  {
    image: "/images/gallery/marble_steps.jpg",
    title: "Marble Stepping-Stone Path",
    description: "Large marble stepping stones set through a gravel side yard beside a home.",
  },
  {
    image: "/images/gallery/illuminated_steps.jpg",
    title: "Illuminated Entry Steps",
    description: "A paver entry walkway with step lighting and structured brick retaining walls.",
  },
  {
    image: "/images/gallery/stone_feature_2.jpg",
    title: "Patio & Fire Pit",
    description: "A finished patio with a curved stone seating wall and central fire pit.",
  },
  {
    image: "/images/gallery/stone_fountain.jpg",
    title: "Stone Fountain Garden",
    description: "A stone fountain feature surrounded by ornamental grasses, river rock, and mulch.",
  },
  {
    image: "/images/gallery/tori_bench.jpg",
    title: "Pergola & Garden Seating",
    description: "A wood pergola with swing seating, gravel paths, raised walls, and planted beds.",
  },
  {
    image: "/images/gallery/yard_work.jpg",
    title: "Turf & Paver Yard",
    description: "A completed artificial turf yard with large pavers and a clean perimeter walkway.",
  },
];

/** Lookup helpers. */
export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
