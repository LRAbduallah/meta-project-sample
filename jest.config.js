// jest.config.js
export default {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for JS/TS files
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$', // Ignore CSS module files
    ],
    moduleNameMapper: {
      '^react-native$': 'react-native-web', // Map React Native imports to web
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy', // Mock CSS modules
    },
    moduleFileExtensions: [
      'web.js', 'js',
      'web.ts', 'ts',
      'web.tsx', 'tsx',
      'json', 'web.jsx', 'jsx',
      'node'
    ],
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js', // Setup environment for tests
    ],
    testEnvironment: 'jsdom', // Simulate DOM environment for React
  };
  