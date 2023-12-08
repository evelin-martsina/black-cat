module.exports = {
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '^.+\\.svg$': '<rootDir>/src/__mocks__/fileMock.ts',
    },
    testEnvironment: 'jsdom',
};
