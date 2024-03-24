module.exports = {
   collectCoverageFrom: [
      '**/*.{js,ts,jsx,tsx',
      '!**/*/.d.ts',
      '!**/*/node_module/**',
   ],
   moduleNameMapper: {
      '^.+\\.moduleW.(css|sass|scss)$': 'identity-obj-proxy',
      // '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(css|scss)$': 'identity-obj-proxy',
      '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',

   },
   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
   testEnvironment: 'jsdom',
   transform: { '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }], },
   transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sasS|scss)$',

   ],
   // transformIgnorePatterns: [
   //    '<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/e2e'
   // ],
   // setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
}
