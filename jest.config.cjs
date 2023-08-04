module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|svg|jpg|jpeg|gif)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom', 
  extensionsToTreatAsEsm: ['.jsx'],
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
