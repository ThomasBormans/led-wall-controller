require("rootpath")();
const packageJson = require("package.json");

module.exports = (req, res) => {
	res.status(200).json({
		success: true,
		version: packageJson.version,
	});
};
