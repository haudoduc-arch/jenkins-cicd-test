export function getPipelineSteps(): string[] {
  return ["Install dependencies", "Lint source", "Run tests", "Build production artifact"];
}
