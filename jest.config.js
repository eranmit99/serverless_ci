module.exports = {
    preset: "ts-jest",
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: "node",
    testTimeout: 60000,
    testPathIgnorePatterns: ["dist/*"],
};