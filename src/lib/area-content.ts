/**
 * S&S Landscaping — per-city content for area pages.
 * Each entry provides unique intro copy, neighborhoods, hero image, and FAQs.
 * Premium cities get longer intros and more specific local detail.
 */

export type AreaContent = {
  slug: string;
  intro: string;
  neighborhoods: string;
  heroImage: string;
  heroAlt: string;
  faqs: { question: string; answer: string }[];
};

export const AREA_CONTENT: Record<string, AreaContent> = {
  // ===== PREMIUM CITIES (6) =====

  atherton: {
    slug: "atherton",
    intro:
      "Atherton's flat, expansive lots and estate-scale properties call for a different caliber of landscaping — structured formal gardens, grand allée plantings, and precision hardscaping that frames large homes without overwhelming them. We specialize in the kind of estate-scale stonework, custom retaining walls, and mature tree installation that Atherton properties demand, working within the town's strict zoning code that preserves its semi-rural, single-family character.",
    neighborhoods: "94027 — Lindenwood, West Atherton, Menlo Oaks",
    heroImage: "/images/gallery/stone_fountain.jpg",
    heroAlt: "Estate-scale stone fountain garden with ornamental grasses and river rock in Atherton",
    faqs: [
      {
        question: "Does Atherton require permits for landscaping and hardscaping?",
        answer:
          "Atherton has strict zoning regulations under its municipal code, including tree protection ordinances for heritage trees and requirements for grading permits on slopes over 10%. We handle all necessary permits and work within the town's design review process for visible front-yard hardscape changes.",
      },
      {
        question: "Can you install estate-scale hardscaping for large Atherton properties?",
        answer:
          "Yes. We build large-format patios, motor court stone pavers, estate retaining walls, and formal garden stonework suited to Atherton's expansive lots. Our base preparation and drainage engineering ensure hardscape stays level on Atherton's mostly flat terrain while managing stormwater runoff per San Mateo County requirements.",
      },
      {
        question: "What plant varieties work best in Atherton's micro-climate?",
        answer:
          "Atherton sits in a warmer, more sheltered inland pocket of San Mateo County with less marine fog than coastal cities. This allows for a broader plant palette including Mediterranean species, Japanese maples, camellias, and citrus. We design plantings that complement estate architecture while remaining drought-conscious per California MWELO standards.",
      },
    ],
  },

  hillsborough: {
    slug: "hillsborough",
    intro:
      "Hillsborough's rolling hills and large-lot estates present unique landscaping opportunities — terraced gardens that follow natural slopes, formal entry courtyards, and specimen tree plantings that frame the town's signature estate architecture. We build hillside retaining walls, terraced patios, and drainage systems engineered for Hillsborough's steep terrain and clay soils, all within the town's strict design review guidelines.",
    neighborhoods: "94010 — Lakeview, San Mateo Park, Tobin Clark, Skyfarm",
    heroImage: "/images/gallery/marble_steps.jpg",
    heroAlt: "Elegant marble stepping-stone path through a terraced Hillsborough hillside garden",
    faqs: [
      {
        question: "How do you handle hillside landscaping in Hillsborough?",
        answer:
          "Hillsborough's hillside lots require terraced retaining walls, engineered drainage, and slope stabilization to prevent erosion during winter rains. We install tiered garden walls, French drains, and swale systems designed for San Mateo County's clay-heavy soils and the town's hillside construction standards.",
      },
      {
        question: "Does Hillsborough have specific landscaping regulations?",
        answer:
          "Yes. Hillsborough's design review process covers front-yard hardscape, fence heights, and tree removal. The town requires permits for retaining walls over 4 feet and has a heritage tree ordinance protecting native oaks and redwoods. We manage all permitting and ensure compliance with Hillsborough's architectural guidelines.",
      },
      {
        question: "What drainage solutions work best for Hillsborough properties?",
        answer:
          "Hillsborough's sloped terrain and clay soils make drainage critical. We install catch basins, French drains, and surface swales that channel stormwater away from foundations and down slopes safely. For properties with steep grades, we also build retaining walls with proper weep holes and backfill drainage to prevent hydrostatic pressure buildup.",
      },
    ],
  },

  "los-altos-hills": {
    slug: "los-altos-hills",
    intro:
      "Los Altos Hills is defined by its hillside terrain, rural character, and minimum one-acre lot sizes — a landscape that rewards terraced stonework, native oak preservation, and hillside pathways that follow natural contours. We specialize in hillside terracing, erosion control, and drought-tolerant native gardens that thrive on the town's sunny slopes while meeting Santa Clara County's strict rural zoning standards.",
    neighborhoods: "94022 — Adobe Lodge, Purissima Hills, Loyola, Foothill Estates",
    heroImage: "/images/gallery/gravel_side_path.jpg",
    heroAlt: "Hillside gravel path with stepping stones and native plantings in Los Altos Hills",
    faqs: [
      {
        question: "How do you landscape steep hillsides in Los Altos Hills?",
        answer:
          "We use terraced retaining walls, ground-cover plantings with deep root systems, and decomposed granite pathways that follow natural contours. For slopes over 15%, we install erosion control fabric and jute netting with native grasses and ceanothus to stabilize soil while reducing water use on Los Altos Hills' sunny, south-facing slopes.",
      },
      {
        question: "Are there restrictions on removing oak trees in Los Altos Hills?",
        answer:
          "Yes. Los Altos Hills has a strict tree protection ordinance covering native oaks, redwoods, and other specimen trees with trunk diameters above 6 inches. Removal requires a permit and often mitigation planting. We design landscapes around existing oaks, using compatible drought-tolerant understory plantings that don't compete with tree roots.",
      },
      {
        question: "Can you install pathways and steps on hillside lots?",
        answer:
          "Absolutely. We build decomposed granite paths, stone step systems, and switchback walkways that make hillside lots navigable and beautiful. Each path is graded for proper drainage and set on compacted base material to prevent settling on Los Altos Hills' sloped terrain.",
      },
    ],
  },

  belvedere: {
    slug: "belvedere",
    intro:
      "Belvedere's peninsula setting on San Francisco Bay creates a distinctive micro-climate — cooler, foggier, and more exposed to salt air than inland Silicon Valley. Landscaping here demands salt-tolerant plant selections, corrosion-resistant hardscape materials, and drainage systems that handle both winter rains and bay influence. We design bayfront gardens that thrive in this unique environment while preserving the spectacular water views that define Belvedere properties.",
    neighborhoods: "94920 — Belvedere Island, Belvedere Lagoon, Corinthian Island",
    heroImage: "/images/gallery/landscape_lighting_night.jpg",
    heroAlt: "Bayfront landscape with low-voltage lighting and salt-tolerant plantings in Belvedere",
    faqs: [
      {
        question: "What plants survive in Belvedere's salt-air micro-climate?",
        answer:
          "Belvedere's bayfront exposure requires salt-tolerant species like New Zealand flax, rosemary, escallonia, and ornamental grasses that withstand maritime wind and salt spray. We avoid salt-sensitive plants like Japanese maples and instead use coastal-adapted varieties that thrive in Marin County's cooler, foggier conditions.",
      },
      {
        question: "Do you use different hardscape materials for bayfront properties?",
        answer:
          "Yes. For Belvedere's salt-air environment, we use marine-grade stainless steel edging, sealed natural stone, and concrete pavers rated for coastal exposure. Standard steel and unsealed stone can corrode or spall in salt-laden air, so we select materials and finishes specifically rated for marine environments.",
      },
      {
        question: "How do you handle drainage on Belvedere's waterfront lots?",
        answer:
          "Belvedere's low elevation and bay proximity require drainage systems that account for high water tables and potential tidal influence. We install French drains, raised planter beds, and surface grading that directs water away from foundations, and we use permeable hardscape surfaces to reduce runoff into the bay per San Francisco Bay Regional Water Quality Control Board requirements.",
      },
    ],
  },

  "palo-alto": {
    slug: "palo-alto",
    intro:
      "Palo Alto's blend of Stanford-adjacent academic neighborhoods, California Avenue bungalows, and midtown family homes creates a diverse landscaping landscape — from drought-tolerant native front yards that meet the city's water-efficient landscape standards to structured backyard hardscaping for outdoor entertaining. We design and build landscapes that complement Palo Alto's architectural variety while meeting the city's progressive water conservation and stormwater management requirements.",
    neighborhoods: "94301 — Professorville, Crescent Park; 94306 — Midtown, Charleston Gardens; 94303 — Baylands",
    heroImage: "/images/gallery/front_yard_2.jpg",
    heroAlt: "Drought-tolerant front yard with paver border and native plantings in Palo Alto",
    faqs: [
      {
        question: "Does Palo Alto require water-efficient landscaping?",
        answer:
          "Yes. Palo Alto enforces California's MWELO (Model Water Efficient Landscape Ordinance) for new and renovated landscapes over 500 square feet, requiring water budgets, efficient irrigation, and climate-appropriate plant palettes. The city also offers rebates through California Water Service for lawn-to-garden conversions and smart irrigation controller upgrades.",
      },
      {
        question: "Can you help with Palo Alto's tree protection rules?",
        answer:
          "Palo Alto's tree protection ordinance covers street trees, protected native trees, and 'trees of significance' with permits required for removal. We design landscapes around existing protected trees, using root-sensitive construction techniques and compatible understory plantings. When removal is necessary, we handle the permit process and mitigation planting.",
      },
      {
        question: "What stormwater requirements apply to hardscaping in Palo Alto?",
        answer:
          "Palo Alto follows the San Francisco Bay Regional Water Quality Control Board's stormwater requirements, which limit impermeable surface coverage and require drainage management for hardscape projects. We use permeable pavers, gravel infiltration areas, and grading that directs runoff into planted swales rather than storm drains.",
      },
    ],
  },

  saratoga: {
    slug: "saratoga",
    intro:
      "Saratoga's foothill setting at the base of the Santa Cruz Mountains creates a Mediterranean micro-climate ideal for vineyard-inspired landscapes, oak-studded gardens, and hillside terracing. The city's rural character and large lot sizes allow for expansive outdoor living spaces — from stone patios overlooking canyon views to drought-tolerant native gardens that blend with the surrounding hillside. We design landscapes that honor Saratoga's semi-rural charm while meeting Santa Clara County water conservation standards.",
    neighborhoods: "95070 — Golden Triangle, Brookview, Parker Ranch, Foothill",
    heroImage: "/images/gallery/tori_bench.jpg",
    heroAlt: "Saratoga foothill garden with pergola, gravel paths, and oak-inspired native plantings",
    faqs: [
      {
        question: "What landscaping styles suit Saratoga's foothill properties?",
        answer:
          "Saratoga's Mediterranean climate and hillside terrain are ideal for vineyard-style landscapes, native oak gardens, terraced stone patios, and drought-tolerant plantings like lavender, rosemary, and ceanothus. We design outdoor spaces that frame canyon and valley views while using plants that thrive in Saratoga's sunny, well-drained foothill soils.",
      },
      {
        question: "Are there water restrictions for landscaping in Saratoga?",
        answer:
          "Saratoga falls under the Santa Clara Valley Water District's water conservation programs, which include watering day restrictions and rebates for lawn conversion and smart irrigation controllers. New landscapes over 500 square feet must comply with California MWELO standards. We design water-efficient landscapes that qualify for available rebates.",
      },
      {
        question: "Can you build retaining walls for Saratoga's sloped lots?",
        answer:
          "Yes. We build terraced retaining walls using interlocking block, natural stone, and poured concrete engineered for Saratoga's hillside terrain. Each wall is designed with proper drainage, base preparation, and height compliance per Santa Clara County building codes — walls over 4 feet require engineering and permits, which we handle.",
      },
    ],
  },

  // ===== STANDARD CITIES (12) =====

  "los-gatos": {
    slug: "los-gatos",
    intro:
      "Los Gatos blends historic downtown charm with hillside residential neighborhoods, creating landscaping opportunities that range from cottage gardens near downtown to terraced hillside estates in the mountains. We build landscapes that complement Los Gatos's architectural heritage while handling the drainage and slope challenges of its hillside terrain.",
    neighborhoods: "95030 — Downtown, Almond Grove; 95032 — Blossom Manor, Rinconada Hills",
    heroImage: "/images/gallery/backyard_concept.jpg",
    heroAlt: "Los Gatos backyard with stone fountain, lawn, and garden plantings by S&S Landscaping",
    faqs: [
      {
        question: "What landscaping services do you offer in Los Gatos?",
        answer:
          "We provide full landscaping and hardscaping services in Los Gatos, including hillside terracing, retaining walls, drought-tolerant gardens, patio construction, and irrigation systems designed for the area's mixed flat and hillside terrain.",
      },
      {
        question: "Do you handle Los Gatos hillside drainage issues?",
        answer:
          "Los Gatos hillside properties often need French drains, retaining wall drainage, and surface grading to manage winter storm runoff. We install complete drainage systems engineered for the Santa Cruz Mountains foothill soils and Los Gatos town requirements.",
      },
      {
        question: "Can you work with Los Gatos's tree protection rules?",
        answer:
          "Los Gatos has a heritage tree ordinance protecting native oaks and redwoods. We design landscapes around protected trees using root-sensitive construction methods and compatible plantings that won't compete with established tree root systems.",
      },
    ],
  },

  "monte-sereno": {
    slug: "monte-sereno",
    intro:
      "Monte Sereno is a quiet, exclusively residential community tucked between Los Gatos and Saratoga, known for its large lots, rural atmosphere, and minimum half-acre zoning. Landscaping here favors expansive gardens, private outdoor living spaces, and drought-tolerant plantings that respect the city's rural character and limited municipal services.",
    neighborhoods: "95030 — El Sereno, Sereno Oaks, Vine Hill",
    heroImage: "/images/gallery/yard_work.jpg",
    heroAlt: "Monte Sereno residential yard with turf installation and paver walkway",
    faqs: [
      {
        question: "What makes landscaping in Monte Sereno different?",
        answer:
          "Monte Sereno's large lots and rural zoning allow for expansive gardens, orchards, and outdoor living spaces that wouldn't fit in denser neighborhoods. We design landscapes that take advantage of the extra space while maintaining the city's quiet, residential character.",
      },
      {
        question: "Do you install irrigation systems in Monte Sereno?",
        answer:
          "Yes. We install smart irrigation systems with weather-aware controllers and drip zones for planting beds, designed to comply with Santa Clara Valley Water District conservation requirements while keeping large Monte Sereno lots healthy.",
      },
      {
        question: "Can you build large patios and outdoor living spaces in Monte Sereno?",
        answer:
          "Monte Sereno's spacious lots are perfect for expansive patios, outdoor kitchens, fire pit areas, and garden pathways. We build hardscape features scaled to the property, with proper base preparation and drainage for long-lasting results.",
      },
    ],
  },

  "los-altos": {
    slug: "los-altos",
    intro:
      "Los Altos combines small-town charm with a strong design aesthetic — tree-lined streets, cottage-style front gardens, and backyard entertaining spaces that reflect the city's family-oriented character. We design landscapes that complement Los Altos's architectural styles from mid-century ranch to modern farmhouse, with water-efficient plantings that meet the city's sustainability goals.",
    neighborhoods: "94022 — Downtown, Old Los Altos; 94024 — Country Club, Loyola Corners",
    heroImage: "/images/gallery/front_yard.jpg",
    heroAlt: "Los Altos front yard with artificial turf and clean concrete walkways",
    faqs: [
      {
        question: "What landscaping styles are popular in Los Altos?",
        answer:
          "Los Altos homeowners favor cottage-style front gardens, drought-tolerant plantings with native grasses and salvia, and backyard patios for family entertaining. We design landscapes that match the city's blend of traditional and modern architectural styles.",
      },
      {
        question: "Does Los Altos have water conservation requirements?",
        answer:
          "Los Altos follows Santa Clara County water conservation guidelines and California MWELO standards for new and renovated landscapes. We design water-efficient landscapes with drip irrigation and climate-appropriate plants that meet these requirements while looking lush and inviting.",
      },
      {
        question: "Can you replace our Los Altos lawn with drought-tolerant landscaping?",
        answer:
          "Yes. We handle full lawn-to-garden conversions, including soil preparation, drip irrigation installation, and planting with drought-tolerant natives and Mediterranean species. We can also help you apply for available water district rebates for lawn conversion.",
      },
    ],
  },

  "mountain-view": {
    slug: "mountain-view",
    intro:
      "Mountain View's mix of tech-campus proximity and residential neighborhoods creates a landscaping culture that balances modern outdoor living with sustainability. From the tree-lined streets of Old Mountain View to the newer developments near Shoreline, we design landscapes that fit the city's contemporary, forward-thinking character while meeting its strict water efficiency and stormwater requirements.",
    neighborhoods: "94040 — Old Mountain View, Waverley Park; 94043 — Monta Loma, Rex Manor; 94041 — Castro City",
    heroImage: "/images/gallery/stone_feature.jpg",
    heroAlt: "Mountain View landscape with stone feature wall, river rock, and ornamental grasses",
    faqs: [
      {
        question: "What landscaping services do you provide in Mountain View?",
        answer:
          "We offer complete landscaping services in Mountain View, including drought-tolerant front yard design, backyard patio construction, retaining walls, smart irrigation systems, and landscape lighting for the city's mix of older and newer residential properties.",
      },
      {
        question: "Does Mountain View have specific stormwater requirements?",
        answer:
          "Mountain View follows the San Francisco Bay Regional Water Quality Control Board's stormwater permit requirements, which limit impermeable surface coverage and encourage permeable hardscape. We use permeable pavers and grading solutions that manage runoff on-site rather than into storm drains.",
      },
      {
        question: "Can you design landscapes for smaller Mountain View lots?",
        answer:
          "Absolutely. Many Mountain View neighborhoods have compact lots that benefit from space-efficient design — vertical gardens, tiered planters, multi-use patios, and strategic plantings that create outdoor living space without feeling crowded.",
      },
    ],
  },

  cupertino: {
    slug: "cupertino",
    intro:
      "Cupertino's family-oriented neighborhoods and top-ranked schools create demand for functional, beautiful outdoor spaces — backyard patios for family gatherings, low-maintenance front yards, and gardens that complement the city's blend of ranch-style and contemporary homes. We design landscapes that work for Cupertino's active, family-focused lifestyle.",
    neighborhoods: "95014 — Monta Vista, Rancho Rinconada, Lindenwood, Garden Gate",
    heroImage: "/images/gallery/front_yard_3.jpg",
    heroAlt: "Cupertino front yard with decorative stone, planting beds, and clean landscape design",
    faqs: [
      {
        question: "What landscaping is popular in Cupertino?",
        answer:
          "Cupertino homeowners often request low-maintenance front yards with drought-tolerant plantings, backyard patios for family entertaining, and functional outdoor spaces that complement the city's family-focused lifestyle. We design landscapes that are both beautiful and practical for busy families.",
      },
      {
        question: "Do you install artificial turf in Cupertino?",
        answer:
          "Yes. We install high-quality artificial turf for Cupertino homeowners looking for a low-maintenance, water-saving lawn alternative. Our turf installations include proper base preparation and drainage so the surface stays level and drains correctly for years.",
      },
      {
        question: "Can you build outdoor entertaining spaces in Cupertino backyards?",
        answer:
          "We build patios, seating walls, fire pits, and outdoor kitchens designed for Cupertino's family-oriented entertaining. Each project is tailored to your backyard size and layout, with hardscape materials that complement your home's architecture.",
      },
    ],
  },

  "san-jose": {
    slug: "san-jose",
    intro:
      "As the largest city in Silicon Valley, San Jose encompasses a wide range of neighborhoods and micro-climates — from the flat urban core to the foothills of the Diablo Range. We handle landscaping projects across San Jose's diverse terrain, designing outdoor spaces that fit each neighborhood's character while meeting the city's comprehensive water conservation and stormwater management requirements.",
    neighborhoods: "95126 — Willow Glen, Rose Garden; 95120 — Almaden Valley; 95125 — Naglee Park, Shasta Hanchett",
    heroImage: "/images/gallery/General_site_photo_1.jpg",
    heroAlt: "San Jose landscape project with completed hardscape and planting installation",
    faqs: [
      {
        question: "What areas of San Jose do you serve?",
        answer:
          "We serve neighborhoods across San Jose including Willow Glen, Rose Garden, Almaden Valley, Cambrian, Naglee Park, and the downtown core. Our team handles the full range of San Jose terrain from flat urban lots to foothill properties with slope and drainage considerations.",
      },
      {
        question: "Does San Jose have specific water conservation rules for landscaping?",
        answer:
          "San Jose follows Santa Clara Valley Water District watering restrictions and California MWELO standards. The city also offers landscape conversion rebates through the San Jose Water Company. We design water-efficient landscapes that qualify for available rebates while meeting all local requirements.",
      },
      {
        question: "Can you handle large commercial landscaping projects in San Jose?",
        answer:
          "Yes. We handle both residential and commercial landscaping projects in San Jose, from single-family front yard renovations to commercial property landscape installation and maintenance. Our team is equipped for projects of any scale across the city.",
      },
    ],
  },

  "santa-clara": {
    slug: "santa-clara",
    intro:
      "Santa Clara's compact, urban-suburban character and mix of older ranch homes and newer developments creates demand for efficient, space-conscious landscaping. We design landscapes that maximize outdoor living in Santa Clara's typically smaller lots, with drought-tolerant plantings and hardscape solutions that meet the city's water conservation goals.",
    neighborhoods: "95050 — Old Quad, Franklin Square; 95051 — Rivermark, Mission Gardens; 95054 — Tech corridor",
    heroImage: "/images/gallery/General_site_photo_3.jpg",
    heroAlt: "Santa Clara residential landscape with hardscape installation and planting beds",
    faqs: [
      {
        question: "What landscaping services do you offer in Santa Clara?",
        answer:
          "We provide full landscaping and hardscaping services in Santa Clara, including front yard makeovers, backyard patio installation, drought-tolerant plantings, retaining walls, and irrigation system upgrades tailored to the city's compact lot sizes.",
      },
      {
        question: "Can you design space-efficient landscapes for Santa Clara's smaller lots?",
        answer:
          "Yes. Santa Clara's lot sizes often require creative space planning. We use vertical gardens, multi-functional patios, built-in seating, and strategic plant selections to create outdoor living space that feels larger and more open than the footprint suggests.",
      },
      {
        question: "Does Santa Clara require water-efficient landscaping?",
        answer:
          "Santa Clara follows Santa Clara Valley Water District conservation requirements and California MWELO standards. We design landscapes with drip irrigation, climate-appropriate plants, and smart controllers that meet these requirements while keeping your yard looking full and healthy.",
      },
    ],
  },

  campbell: {
    slug: "campbell",
    intro:
      "Campbell's historic downtown charm and residential neighborhoods along the Los Gatos Creek corridor create a landscaping style that blends cottage gardens with modern outdoor living. We design landscapes that complement Campbell's small-town feel while addressing the drainage considerations of properties near the creek and flat terrain.",
    neighborhoods: "95008 — Downtown Campbell, San Tomas Aquino, Pruneyard, Monterey Heights",
    heroImage: "/images/gallery/second_illuminated_walk_way.jpg",
    heroAlt: "Campbell landscape with illuminated paver walkway and step lighting",
    faqs: [
      {
        question: "What landscaping services do you provide in Campbell?",
        answer:
          "We offer complete landscaping services in Campbell, including cottage-style front gardens, backyard patios, landscape lighting, irrigation systems, and drainage solutions for properties near the Los Gatos Creek corridor.",
      },
      {
        question: "Do you handle drainage for Campbell properties near the creek?",
        answer:
          "Campbell properties near Los Gatos Creek can have high water tables and drainage challenges. We install French drains, surface grading, and raised planter beds to manage water and protect foundations, with solutions designed for Campbell's flat terrain and creek-adjacent soils.",
      },
      {
        question: "Can you install landscape lighting in Campbell?",
        answer:
          "Yes. We install low-voltage landscape lighting throughout Campbell, including path lighting, step lighting, and accent lighting for architectural and garden features. Our lighting designs enhance safety and beauty while minimizing light pollution per local guidelines.",
      },
    ],
  },

  milpitas: {
    slug: "milpitas",
    intro:
      "Milpitas sits at the crossroads of Silicon Valley and the East Bay, with residential neighborhoods that range from flat developments near the 880 corridor to hillside properties in the Milpitas hills. We design landscapes that handle this terrain variety, with particular attention to drainage for hillside lots and drought-tolerant plantings suited to Milpitas's slightly warmer, more inland climate.",
    neighborhoods: "95035 — Sunnyhills, Midtown, Hillcrest, Spring Valley",
    heroImage: "/images/gallery/General_site_photo_5.jpg",
    heroAlt: "Milpitas residential landscape with hardscape and planting installation",
    faqs: [
      {
        question: "What landscaping challenges do Milpitas hillside properties have?",
        answer:
          "Milpitas hillside properties in the eastern hills face erosion, drainage, and slope stabilization challenges. We build retaining walls, install erosion control measures, and design terraced landscapes that make hillside lots usable and stable through winter rains.",
      },
      {
        question: "Do you offer drought-tolerant landscaping in Milpitas?",
        answer:
          "Yes. Milpitas's slightly warmer inland climate is well-suited to drought-tolerant Mediterranean and California native plantings. We design water-efficient landscapes with drip irrigation and smart controllers that comply with local water conservation requirements.",
      },
      {
        question: "Can you build patios and outdoor living spaces in Milpitas?",
        answer:
          "We build patios, walkways, retaining walls, and outdoor living features for Milpitas homes, with materials and drainage solutions tailored to the property's terrain — whether flat lot or hillside. Each project includes proper base preparation for long-lasting results.",
      },
    ],
  },

  "alum-rock": {
    slug: "alum-rock",
    intro:
      "Alum Rock's location at the base of the Diablo Range foothills gives it a distinct landscaping character — hillside properties with valley views, native oak landscapes, and outdoor spaces that take advantage of the natural terrain. We specialize in hillside terracing, native plant gardens, and drainage systems engineered for the foothill slopes of this East San Jose neighborhood.",
    neighborhoods: "95127 — Alum Rock Park area, Mount Pleasant, Penitencia Creek",
    heroImage: "/images/gallery/yard_work.jpg",
    heroAlt: "Alum Rock foothill landscape with turf and paver installation on sloped terrain",
    faqs: [
      {
        question: "How do you landscape hillside properties in Alum Rock?",
        answer:
          "Alum Rock's foothill properties often need terraced retaining walls, native ground covers for erosion control, and decomposed granite paths that follow natural contours. We design hillside landscapes that are both functional and beautiful, with drainage systems that manage storm runoff safely.",
      },
      {
        question: "What native plants work well in Alum Rock landscapes?",
        answer:
          "Alum Rock's foothill location is ideal for California natives like coast live oak, toyon, ceanothus, and manzanita. These plants are adapted to the local climate and soil, require less water once established, and support local wildlife including native birds and pollinators.",
      },
      {
        question: "Do you handle drainage for Alum Rock's sloped properties?",
        answer:
          "Yes. We install French drains, swales, and retaining wall drainage systems specifically engineered for Alum Rock's foothill terrain. Proper drainage is critical on sloped lots to prevent erosion, protect foundations, and manage stormwater during heavy winter rains.",
      },
    ],
  },

  "emerald-hills": {
    slug: "emerald-hills",
    intro:
      "Emerald Hills is a residential enclave in the hills of San Mateo County, characterized by larger lots, wooded terrain, and a quieter, more rural feel than the flatlands below. Landscaping here focuses on working with the natural hillside — native tree preservation, terraced gardens, and outdoor spaces that frame canyon and bay views through the trees.",
    neighborhoods: "94062 — Emerald Hills, Emerald Lake Hills, Edgewood Park",
    heroImage: "/images/gallery/illuminated_steps.jpg",
    heroAlt: "Emerald Hills hillside landscape with illuminated entry steps and retaining walls",
    faqs: [
      {
        question: "What landscaping services do you offer in Emerald Hills?",
        answer:
          "We provide hillside terracing, retaining wall construction, native plant landscaping, drainage systems, and outdoor lighting for Emerald Hills properties. Our designs work with the natural hillside terrain and preserve the wooded, rural character that defines the area.",
      },
      {
        question: "Do you work with San Mateo County building codes for hillside properties?",
        answer:
          "Yes. Emerald Hills hillside properties must comply with San Mateo County's grading and drainage regulations, including permits for retaining walls over 4 feet and erosion control plans for disturbed slopes. We handle all necessary permits and ensure compliance with county building standards.",
      },
      {
        question: "Can you preserve existing trees during landscaping in Emerald Hills?",
        answer:
          "Absolutely. Emerald Hills is known for its native oaks and redwoods, and we design landscapes around these trees using root-sensitive construction techniques. We avoid trenching through root zones and select understory plants that are compatible with established tree root systems.",
      },
    ],
  },

  "redwood-city": {
    slug: "redwood-city",
    intro:
      "Redwood City spans from the flatlands of downtown to the hills of Emerald Lake, creating a diverse landscaping environment that ranges from urban courtyard gardens to hillside estates. We design landscapes across Redwood City's terrain variety, with solutions for the city's mix of historic homes, new developments, and everything in between.",
    neighborhoods: "94061 — Downtown, Mount Carmel; 94062 — Emerald Hills area; 94063 — Redwood Shores",
    heroImage: "/images/gallery/stone_feature_2.jpg",
    heroAlt: "Redwood City landscape with stone patio, seating wall, and fire pit installation",
    faqs: [
      {
        question: "What landscaping services do you offer in Redwood City?",
        answer:
          "We provide complete landscaping and hardscaping services across Redwood City, including front yard design, backyard patios, retaining walls, irrigation systems, and drought-tolerant landscaping for both flatland and hillside properties.",
      },
      {
        question: "Does Redwood City have water conservation requirements?",
        answer:
          "Redwood City falls under the Bay Area Water Supply and Conservation Agency's guidelines, which include watering restrictions and rebates for water-efficient landscaping. We design landscapes that meet these requirements and help you qualify for available rebate programs.",
      },
      {
        question: "Can you handle both flat and hillside properties in Redwood City?",
        answer:
          "Yes. Redwood City's terrain ranges from flat downtown lots to hillside properties in the Emerald Hills area. We tailor our approach to each property — flat lots get optimized drainage and hardscape, while hillside lots get terracing, retaining walls, and erosion control.",
      },
    ],
  },
};

export function getAreaContent(slug: string): AreaContent | undefined {
  return AREA_CONTENT[slug];
}
