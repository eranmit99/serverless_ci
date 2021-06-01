const { moduleNameMapper } = require('../scripts/jest-helper');

module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: '.test.ts$',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testTimeout: 300000,
    globals: {
        'ts-jest': {
            diagnostics: {
                warnOnly: true,
            },
        },
    },
    moduleNameMapper: moduleNameMapper(__dirname),
};
