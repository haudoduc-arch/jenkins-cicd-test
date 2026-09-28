import { describe, expect, it } from "vitest";
import { getPipelineSteps } from "./pipeline";

describe("getPipelineSteps", () => {
  it("returns the CI stages in execution order", () => {
    expect(getPipelineSteps()).toEqual([
      "Install dependencies",
      "Lint source",
      "Run tests",
      "Build production artifact",
    ]);
  });
});
