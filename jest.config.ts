import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  roots: ["__test__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  verbose: true,
};
export default config;
