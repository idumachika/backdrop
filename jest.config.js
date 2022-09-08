module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

    setupFiles: [
        './node_modules/react-native-gesture-handler/jestSetup.js',
        // './node_modules/react-native/Libraries/Animated',
        './jest.setup.js',
    ],
    automock: false,
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@?react-native(/.*)?|@react-native-community|react-navigation|@react-navigation/.*|react-native-button|my-project|react-native-gesture-handler|@react-navigation|react-native-router-flux|react-native-raw-bottom-sheet|react-native-responsive-screen|react-native-status-bar-height|@mono.co|@sentry/react-native)',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
    },
};
