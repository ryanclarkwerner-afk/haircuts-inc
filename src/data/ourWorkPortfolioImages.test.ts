import { describe, expect, it } from "vitest";

import { ourWorkImages } from "./ourWorkPortfolioImages";

describe("ourWorkPortfolioImages", () => {
  it("exports at least 12 unique image URLs", () => {
    expect(ourWorkImages.length).toBeGreaterThanOrEqual(12);
    expect(new Set(ourWorkImages).size).toBe(ourWorkImages.length);
  });

  it("can pick a deterministic count of 12 unique items", () => {
    const pickRandomSubset = <T,>(items: readonly T[], count: number): T[] => {
      const copy = [...items];
      // Fisher–Yates shuffle then slice.
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, count);
    };

    const subset = pickRandomSubset(ourWorkImages, 12);
    expect(subset).toHaveLength(12);
    expect(new Set(subset).size).toBe(12);
  });
});

