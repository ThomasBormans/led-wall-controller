// Config
// ---
// Project-wide configuration

require("rootpath")();
const merge = require("lodash.merge");

module.exports = merge(
	require("./general"),
	require("./env/" + process.env.NODE_ENV.toLowerCase() + ".js")
);
