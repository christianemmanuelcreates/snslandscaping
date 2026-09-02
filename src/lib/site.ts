/**
 * S&S Landscaping — site-wide constants (single source of truth).
 * All pages read business identity from here; never hardcode in pages.
 */

export const SITE_URL = "https://snslandscaping.org/";

export const BUSINESS_NAME = "S&S Landscaping";

export const BUSINESS_TAGLINE =
  "Premier landscaping & outdoor living in Silicon Valley & the Bay Area";

export const EMAIL = "services@snslandscaping.org";

export const LICENSE = "LIC 100-7487";

/** Business address used in LocalBusiness schema and footer. */
export const BUSINESS_ADDRESS = {
  streetAddress: "12345 Los Gatos Blvd, Suite 200",
  addressLocality: "Los Gatos",
  addressRegion: "CA",
  postalCode: "95032",
  addressCountry: "US",
};

/** Social and directory profiles for Organization sameAs schema. */
export const SAME_AS: string[] = [
  "https://www.google.com/maps/place/S%26S+Landscaping",
  "https://www.yelp.com/biz/s-and-s-landscaping-los-gatos",
  "https://www.facebook.com/snslandscaping",
  "https://www.instagram.com/snslandscaping",
];

export const CONTACTS = [
  {
    name: "Samuel Delgado",
    phone: "209-979-6677",
    phoneHref: "tel:+12099796677",
  },
  {
    name: "Santos Gomez",
    phone: "408-391-1591",
    phoneHref: "tel:+14083911591",
  },
];

/** Primary phone used for the site-wide CTA. */
export const PRIMARY_PHONE = CONTACTS[0];

/** One primary CTA intent label across the whole site. */
export const CTA_LABEL = "Get a Free Quote";

export const SERVICE_AREAS = [
  "Los Gatos",
  "Monte Sereno",
  "Atherton",
  "Los Altos",
  "Palo Alto",
  "Los Altos Hills",
  "Saratoga",
  "Mountain View",
  "Cupertino",
  "San Jose",
  "Santa Clara",
  "Campbell",
  "Milpitas",
  "Alum Rock",
  "Emerald Hills",
  "Redwood City",
] as const;