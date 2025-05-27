// This is a sample config for what users might be running locally
const config = {
  testDir: './tests',
  testMatch: '**/bstack_local*.js',

  /* Maximum time one test can run for. */
  timeout: 90 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* tests in parallel */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'line',
  /* Configure projects for major browsers */
projects: [
    {
      name: 'chrome-latest:OSX Big Sur-browserstack',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        permissions: ['camera', 'microphone'],
        args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
      },
    },
    {
      name: 'edge-latest:Windows 10-browserstack',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        permissions: ['camera', 'microphone'],
        args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
      },
    },
  ],
};

module.exports = config;
