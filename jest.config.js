module.exports = {
  projects: [
    {
      displayName: 'serverTests',
      testMatch: ['<rootDir>/tests/server/**/*.test.ts'],
      preset: 'ts-jest',
      testEnvironment: 'node',
    },
    {
      displayName: 'componentTests',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/tests/components/**/*.test.tsx'],
      testEnvironment: 'jest-environment-enzyme',
      setupTestFrameworkScriptFile: "<rootDir>/tests/components/setup.ts"
    }
  ]
};