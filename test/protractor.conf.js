require('ts-node/register');
require('tsconfig-paths/register');

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  // seleniumAddress: 'https://selenium.do.unive.nl/wd/hub',
  ignoreUncaughtExceptions: true,
  allScriptsTimeout: 70000,
  getPageTimeout: 60000,
  directConnect: true,
  restartBrowserBetweenTests: true,

  specs: [
    // 'async_await.js',
    './protractor/features/**/*.feature'
  ],
  capabilities: {
     browserName: 'chrome', // alleen browsernaam wijzigen naar firefox of MicrosoftEdge voor testen andere browser.
                            // Edge werkt nu nog niet. Let op: directConnect op regel 10 uitzetten voor gebruik Edge
    //      shardTestFiles: true,
    //      maxInstances: 2,

    loggingPrefs: {
      'driver': 'INFO',
      'browser': 'INFO'
    },

    'chromeOptions': {
      'args': [
        //  "--headless",
        //  "--disable-gpu",
        // "disable-extensions",
        "--window-size=1920,1080",
      ]
    }
  },


  suites: {
    zakelijkeVerzekeringen: './protractor/features/zakelijkeVerzekeringen/**/*.feature',
    particuliereVerzekeringen: './protractor/features/particuliereVerzekeringen/**/*.feature',
    mijnUniveParticulier: './protractor/features/mijnUniveParticulier/**/*.feature',
    service: './protractor/features/service/**/*.feature',
    visual: './protractor/features/visual/**/*.feature',
    widgets: './protractor/features/widgets/**/*.feature',
  },

  params: {
    env: {
      //DEFAULT environment is pat
      environment: 'pat'
    }
  },
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
    './protractor/step_definitions/**/**/*.ts',
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
