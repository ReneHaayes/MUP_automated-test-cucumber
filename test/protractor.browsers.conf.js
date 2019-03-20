exports.config = {
  // seleniumAddress: 'https://selenium.do.unive.nl/wd/hub',
  // ignoreUncaughtExceptions: true,
  allScriptsTimeout: 60000,
  getPageTimeout: 15000,
  directConnect: true,
  restartBrowserBetweenTests: true,
  maxSessions: 5,
  multiCapabilities: [
    {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 1,
      maxSessions: 1,
      count: 1,
      specs: [
        // './protractor/features//*.feature'
        './protractor/features/particulier/alleVerzekeringen/*.feature',
        // './protractor/features/particulier/gezondheidVerzekeringen/*.feature',
        // './protractor/features/particulier/homePage/*.feature'
      ],
      'chromeOptions': {
        'args': [
          // "--headless",
          // "--disable-gpu",
          // "--start-maximized",
          "disable-extensions"]
      }
    },
    {
      shardTestFiles: true,
      browserName: 'chrome',
      maxInstances: 1,
      maxSessions: 1,
      count: 1,
      specs: [
        // './protractor/features/**/*.feature'
        './protractor/features/zakelijk/alleVerzekeringen/*.feature',
        // './protractor/features/particulier/onlineVeiligheidVerzekeringen/*.feature',
        // './protractor/features/particulier/rechtVerzekeringen/*.feature'
      ],
      'chromeOptions': {
        'args': [
          // "--headless",
          // "--disable-gpu",
          // "--start-maximized",
          "disable-extensions"]
      }
    }
    // {
    //   shardTestFiles: true,
    //   browserName: 'chrome',
    //   maxInstances: 1,
    //   maxSessions: 1,
    //   count: 1,
    //   specs: [
    //     './protractor/features/particulier/gezondheidVerzekeringen/*.feature'
    //     // './protractor/features/particulier/transportVerzekeringen/*.feature'
    //     // './protractor/features/particulier/vrijeTijdsVerzekeringen/*.feature'
    //   ],
    //   loggingPrefs: {
    //     'driver': 'INFO',
    //     'browser': 'INFO'
    //   },
    //   'chromeOptions': {
    //     'args': [
    //       // "--headless",
    //       // "--disable-gpu",
    //       // "--start-maximized",
    //       "disable-extensions"]
    //   }
    // }
    // {
    //   shardTestFiles: true,
    //   browserName: 'chrome',
    //   maxInstances: 1,
    //   maxSessions: 1,
    //   count: 1,
    //   specs: [
    //     './protractor/features/zakelijk/alleVerzekeringen/*.feature',
    //     './protractor/features/zakelijk/bedrijfActiviteitenVerzekeringen/*.feature'
    //   ],
    //   loggingPrefs: {
    //     'driver': 'INFO',
    //     'browser': 'INFO'
    //   },
    //   'chromeOptions': {
    //     'args': [
    //       // "--headless",
    //       // "--disable-gpu",
    //       // "--start-maximized",
    //       "disable-extensions"]
    //   },
    // },
    // {
    //   shardTestFiles: true,
    //   browserName: 'chrome',
    //   maxInstances: 1,
    //   maxSessions: 1,
    //   count: 1,
    //   specs: ['./protractor/features/zakelijk/**/*.feature'],
    //   loggingPrefs: {
    //     'driver': 'INFO',
    //     'browser': 'INFO'
    //   },
    //   'chromeOptions': {
    //     'args': [
    //       // "--headless",
    //       // "--disable-gpu",
    //       // "--start-maximized",
    //       "disable-extensions"]
    //   },
    //   cucumberOpts: {
    //     tags: '@Smoke or @Intgr'
    //   }
    // }
    ],

  params: {
    env: {
      //DEFAULT environment is pat
      environment: 'pat'
    }
  },
  // baseUrl: 'https://techblog.polteq.com/testshop/index.php',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),


  onPrepare: () => {
  protractor.browser.manage().window().maximize();
},

afterLaunch: () => {
  const multiCucumberHTLMReporter = require('multiple-cucumber-html-reporter');
  const multiCucumberHTLMReporterConfig = {
    displayDuration: true,
    jsonDir: './target/reports/',
    reportPath: './target/reports/'
  };
  multiCucumberHTLMReporter.generate(multiCucumberHTLMReporterConfig);
},



plugins: [{
  package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
  options: {
    // read the options part for more options
    automaticallyGenerateReport: false,
    removeExistingJsonReportFile: true,
    removeOriginalJsonReportFile: true,
    saveCollectedJSON: true,
    displayDuration: true,
    disableLog: true,
    jsonOutputPath: './target/reports/',
    reportPath: './target/reports/'
  }
}],

  cucumberOpts: {
  require: [
    './protractor/step_definitions/*.ts',
    './protractor/step_definitions/**/*.ts',
    './protractor/support/*.ts'],

    'require-module': "ts-node/register",
    compilerOptions: {
    project: '../tsconfig.json'
    },
    strict: true,
    format: 'json:./target/reports/report.json',
    tags: ['~@WIP'],
}
};
