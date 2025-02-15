export const desiredCapConstraints = {
  app: {
    isString: true,
  },
  avd: {
    isString: true,
  },
  platformName: {
    inclusionCaseInsensitive: [
      'iOS',
      'Android',
    ],
    isString: true,
    presence: true,
  },
  udid: {
    isString: true,
  },
  observatoryWsUri: {
    isString: true,
  },
  skipPortForward: {
    isBoolean: true
  },
  adbPort: {
    isNumber: true
  },
  remoteAdbHost: {
    isString: true
  },
  forwardingPort: {
    isNumber: true
  },
} as const;
