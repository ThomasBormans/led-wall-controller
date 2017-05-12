// Config
// ---
// Project-wide configuration

require("rootpath")();
let _ = require("lodash");

module.exports = _.merge(
	require("./general"),
	require("./env/" + process.env.NODE_ENV.toLowerCase() + ".js")
);
