import { describe, expect, it } from "vitest";
import { navigation, projects } from "./site";

describe("site configuration", () => {
  it("contains unique routes beginning at the home page", () => {
    const routes = navigation.map((item) => item.href);

    expect(routes[0]).toBe("/");
    expect(new Set(routes).size).toBe(routes.length);
  });

  it("provides content for the projects page", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });
});
