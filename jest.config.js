// https://github.com/react-native-community/upgrade-support/issues/152

presets: ['module:metro-react-native-babel-preset']

transformIgnorePatterns: [
    "/node_modules/(?!(@react-native|react-native)).*/"
]


// jest.config.js
// module.exports = {
//     preset: 'react-native',
//     globals: {
//         'ts-jest': {
//             tsconfig: 'tsconfig.spec.json',
//             babelConfig: true,
//         },
//     },
//     moduleFileExtensions: [
//         'ts',
//         'tsx',
//         'js',
//         'jsx',
//         'json',
//         'node',
//     ],
//     transform: {
//         '^.+\\.(js|jsx)$': 'babel-jest',
//         '^.+\\.(ts|tsx)$': 'ts-jest',
//     },
//     // This line should be kept even with nothing to be ignored, otherwise the transform will not take place.
//     // Not quite sure about the reason.
//     transformIgnorePatterns: [],
//     testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
//     testPathIgnorePatterns: [
//         '<rootDir>/node_modules/',
//         '\\.snap$',
//     ],
//     cacheDirectory: '.jest/cache',
// };