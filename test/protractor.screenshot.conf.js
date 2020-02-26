let config = require('./protractor.conf.js').config;
process.env['UPDATE_GOLDENS'] = "true";
exports.config = config;
