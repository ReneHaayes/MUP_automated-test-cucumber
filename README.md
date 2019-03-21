# Automated test with cucumber

Change directory to the ./test/
```
npm install
```
```
node node_modules/protractor/bin/webdriver-manager update
```

Running protractor:
THIS will run everything there is to run except for test with the tag @WIP
```
protractor protractor.conf.js
```

You can specify your run command by adding tags:
```
protractor protractor.conf.js --cucumberOpts.tags="@zzpFlex"
```

Also you can create suites in the protractor.conf.js file and then call the suite:
```
protractor protractor.conf.js --suite zzpFlex
```

The default environment is set to PAT if you want to change to tstProj you can do that
by the following command:
```
protractor protractor.conf.js --cucumberOpts.tags="@zzpFlex" --params.env.environment=tstProj
```

Running the regression set:
```
protractor protractor.regression.conf.js 
```

Running the regression set with three different browsers:
```
protractor protractor.browsers.conf.js 
```

Running with different browser: change browserName to "MicrosftEdge" to run the test on MicrosoftEdge
```
protractor protractor.browsers.conf.js --cucumberOpts.tags="@zzpFlex" --capabilities.browserName=firefox --multiCapabilities
```
