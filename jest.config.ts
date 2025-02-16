/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    moduleNameMapper: {
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
    setupFiles: ['<rootDir>/src/test_utils/jest.setup.ts'],
    testEnvironment: 'jsdom',
    globals: {
        __DEV__: true,
    },
};

export default config;
