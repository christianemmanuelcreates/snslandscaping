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
  region: string;
  lat: number;
  lng: number;
};

export const SERVICES: Service[] = [
  {
    slug: "landscaping-planting",
    name: "Landscaping & Planting",
    tagline: "Lawns, trees, shrubs, and garden design",
    description:
      "Complete landscaping and planting services across the SF Metro Area. We install lawns, trees, shrubs, and turf, and design gardens that thrive in our climate.",
    icon: Sun,
    image: "/images/gallery/General_site_photo_1.jpg",
    imageAlt: "Landscaped garden with a water fountain and lush green lawn installed by S&S Landscaping",
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
      "Durable, beautiful hardscape construction including patios, paver walkways, retaining walls, and decorative masonry that extends your living space outdoors.",
    icon: Building,
    image: "/images/services/Hardscaping_Service_Photo.jpg",
    imageAlt: "Hardscaping project featuring a paver patio and walkway built by S&S Landscaping",
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
      "Professional site prep including land grading, excavation, soil preparation, and erosion control to get your project ready.",
    icon: HardHat,
    image: "/images/services/site_preparation_service_photo.jpg",
    imageAlt: "Site preparation work including grading and excavation by S&S Landscaping",
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
      "Efficient irrigation and drainage systems, from sprinkler install and repair to smart irrigation and landscape drainage.",
    icon: RefreshCcw,
    image: "/images/services/irrigation_drainage_service.jpg",
    imageAlt: "Irrigation and drainage system installation by S&S Landscaping",
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
      "Outdoor amenities that elevate your space, including water features, low-voltage landscape lighting, and decorative treatments.",
    icon: Sparkles,
    image: "/images/services/outdoor_amenities_service_photo.jpg",
    imageAlt: "Outdoor amenities including a water feature and landscape lighting by S&S Landscaping",
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
  {
    slug: "saratoga",
    name: "Saratoga",
    county: "Santa Clara",
    region: "South Bay",
    lat: 37.2639,
    lng: -121.9822,
  },
  {
    slug: "palo-alto",
    name: "Palo Alto",
    county: "Santa Clara",
    region: "Peninsula",
    lat: 37.4419,
    lng: -122.143,
  },
  {
    slug: "los-altos-hills",
    name: "Los Altos Hills",
    county: "Santa Clara",
    region: "Peninsula",
    lat: 37.3797,
    lng: -122.1175,
  },
  {
    slug: "atherton",
    name: "Atherton",
    county: "San Mateo",
    region: "Peninsula",
    lat: 37.4613,
    lng: -122.1977,
  },
  {
    slug: "hillsborough",
    name: "Hillsborough",
    county: "San Mateo",
    region: "Peninsula",
    lat: 37.5741,
    lng: -122.3794,
  },
  {
    slug: "belvedere",
    name: "Belvedere",
    county: "Marin",
    region: "Marin",
    lat: 37.8727,
    lng: -122.4644,
  },
];

/** Core services (the 3 that get matrix pages per area). */
export const CORE_SERVICES = SERVICES.filter((s) => s.isCore);

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: "/images/gallery/General_site_photo_1.jpg",
    title: "Garden & Water Feature",
    description: "A landscaped garden with a stone water fountain, healthy lawn, and layered plantings.",
  },
  {
    image: "/images/gallery/General_site_Photo_2.jpg",
    title: "Residential Garden Design",
    description: "Trees, shrubs, and garden beds designed for year-round Bay Area beauty.",
  },
  {
    image: "/images/gallery/General_site_photo_3.jpg",
    title: "Outdoor Fountain Feature",
    description: "A decorative fountain installed as a focal point in a residential landscape.",
  },
  {
    image: "/images/gallery/General_site_photo_4.jpg",
    title: "Mature Tree & Planting Design",
    description: "Mature trees and curated plantings that frame the home and add curb appeal.",
  },
  {
    image: "/images/gallery/General_site_photo_5.jpg",
    title: "Paver Patio & Walkway",
    description: "A paver patio and walkway extending the outdoor living space.",
  },
  {
    image: "/images/gallery/General_site_photo_6.jpg",
    title: "Completed Outdoor Space",
    description: "A finished landscape combining planting, hardscape, and lighting.",
  },
];

/** Matrix helper: 3 core services × 6 areas = 18 slug pairs. */
export const MATRIX: { serviceSlug: string; areaSlug: string }[] =
  CORE_SERVICES.flatMap((service) =>
    AREAS.map((area) => ({ serviceSlug: service.slug, areaSlug: area.slug })),
  );

/** Lookup helpers. */
export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}

/** Matrix page title helper, e.g. "Hardscaping in Saratoga, CA". */
export function matrixTitle(service: Service, area: Area): string {
  return `${service.name} in ${area.name}, CA`;
}

/** Matrix page meta description (50-160 chars), local-anchored for SEO. */
export function matrixDescription(service: Service, area: Area): string {
  return `${service.name} in ${area.name}, ${area.county} County. ${service.tagline}. Free quote from S&S Landscaping.`;
}