export interface SkinConfig {
  brandName: string;
  tagline: string;
  heroVariant: "video" | "search" | "image" | "simple";
  primaryFacilitySlug?: string;
  contactPhone?: string;
  contactEmail?: string;
  primaryAddress?: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
}

const config: SkinConfig = {
  brandName: "Stormont Self Storage",
  tagline: "Space You Can Trust, Rent Month-to-Month",
  heroVariant: "search",
  primaryFacilitySlug: "stormont-overland-park",
  contactPhone: "(800) 555-0199",
  contactEmail: "info@stormontstorage.com",
  primaryAddress: {
    line1: "2400 Industrial Way",
    city: "Stormont",
    state: "TX",
    zip: "75001",
  },
};

export default config;
