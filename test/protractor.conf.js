exports.config = {
  ignoreUncaughtExceptions: true,
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  directConnect: true,

  specs: [
    './protractor/features/autoVerzekering/*.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,

    loggingPrefs: {
      'driver': 'INFO',
      'browser': 'INFO'
    },
    'chromeOptions': {
      'args': [
        // "headless", "disable-gpu",
        "disable-extensions"]
    }
  },
  baseUrl: 'https://techblog.polteq.com/testshop/index.php',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  onPrepare: () => {
    protractor.browser.manage().window().setSize(2000, 1200);
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
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      // read the options part for more options
      automaticallyGenerateReport: false,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      displayDuration: true,
      disableLog: true,
      jsonOutputPath: './target/reports/',
      reportPath: './target/reports/'
    }
  }],

  cucumberOpts: {
    require: ['./protractor/step_definitions/*.ts', './protractor/support/**/*.ts'],
    'require-module': "ts-node/register",
    compilerOptions: {
      project: '../tsconfig.json'
    },
    strict: true,
    format: 'json:./target/reports/report.json',
    tags: ['~@WIP']
  }
};
