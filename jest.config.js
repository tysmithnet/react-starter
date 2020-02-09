module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
      "json",
      "text",
      "lcov",
      "clover",
    ],
    globals: {
      window: {},
      isTest: true,
      "ts-jest": {
        tsConfig: "tsconfig.json",
        __TEST__: true,
      },
    },
    moduleFileExtensions: [
      "js",
      "scss",
      "ts",
      "tsx",
    ],
    rootDir: "src",
    //testEnvironment: "node",
    testMatch: [
      "**/*.spec.ts",
      "**/*.spec.tsx",
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    verbose: true,
    preset: "ts-jest",
  }