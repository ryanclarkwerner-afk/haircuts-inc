const ourWorkImageModules = import.meta.glob(
  "../../Logos and images/Our Work/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    // Import the URL string for each matching asset.
    import: "default",
  },
);

// Vite turns asset imports into URL strings, so we can safely treat these as `string[]`.
export const ourWorkImages = Object.values(ourWorkImageModules) as string[];

