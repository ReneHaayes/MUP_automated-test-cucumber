exports.config = {
  // seleniumAddress: 'https://selenium.do.unive.nl/wd/hub',
  // ignoreUncaughtExceptions: true,
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  directConnect: true,
  restartBrowserBetweenTests: true,

  specs: [
    // 'async_await.js',
    './protractor/features/**/*.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    // shardTestFiles: true,
    // maxInstances: 1,

    loggingPrefs: {
      'driver': 'INFO',
      'browser': 'INFO'
    },
    'chromeOptions': {
      'args': [
        "--headless",
        "--disable-gpu",
        "--window-size=1920,1080",
        "disable-extensions"]
    }
  },


  suites: {
    zakelijkeVerzekeringen: './protractor/features/zakelijkeVerzekeringen/**/*.feature',
    particuliereVerzekeringen: './protractor/features/particuliereVerzekeringen/**/*.feature',
    mijnUniveParticulier: './protractor/features/mijnUniveParticulier/**/*.feature'
  },

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
