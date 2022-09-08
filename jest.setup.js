/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/Utilities/Platform', () => {
    const platform = jest.requireActual(
        'react-native/Libraries/Utilities/Platform',
    );
    return {
        ...platform,
        constants: {
            ...platform.constants,
            reactNativeVersion: {
                major: 0,
                minor: 65,
                patch: 1,
            },
        },
    };
});
