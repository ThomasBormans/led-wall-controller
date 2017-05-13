require("rootpath")();
const glob = require("glob");
const version = require("package.json").version;

module.exports = (app) => {
	const routes = glob.sync("server/routes/!(index).js");

	routes.forEach(route => {
		require(route)(app);
	});

	app.route("/status").get((req, res) => {
		res.status(200).json({
			success: true,
			version: version,
		});
	});

	// Fallback route
	app.route(["/", "/*"]).all((req, res) => {
		res.send("This is the fallback route.");
	});
};
