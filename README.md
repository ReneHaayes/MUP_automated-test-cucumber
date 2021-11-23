# Automated test with cucumber

Change directory to the ./test/
```
npm install
```
```
node node_modules/protractor/bin/webdriver-manager update

mocht dit niet werken, gebruik dan onderstaane commando's:
node_modules/.bin/webdriver-manager clean // removes all older versions
node_modules/.bin/webdriver-manager update // get the latest
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

To be able to run on different browser you need to start webdriver locally for microsoft edge with the following command in the folder test (in the future this will be redirected to a selenium server) This has to be typed in a different bash (Terminal) and needs to stay open.
```
node node_modules/protractor/bin/webdriver-manager start --edge "MicrosoftWebDriver.exe"
```


Running the regression set with three different browsers:
```
protractor protractor.browsers.conf.js 
```

Running with different browser: change browserName to "MicrosoftEdge" to run the test on MicrosoftEdge
```
protractor protractor.browsers.conf.js --cucumberOpts.tags="@zzpFlex" --capabilities.browserName=firefox --multiCapabilities
```

