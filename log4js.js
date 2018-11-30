const log4js = require("log4js");
// const fs   = require("fs");
const log4jsConf = require('./logConf.json');

log4js.configure(log4jsConf);

const categories = process.env.NODE_ENV;

module.exports = log4js.getLogger(categories);