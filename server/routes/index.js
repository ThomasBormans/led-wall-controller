require("rootpath")();
const glob = require("glob");

const CoreController = require("server/controllers/core");

module.exports = (app) => {
	glob.sync("server/routes/!(index).js").forEach(route => {
		require(route)(app);
	});

	app.route("/status").get(CoreController.status);

	// Fallback route
	app.route(["/", "/*"]).all((req, res) => {
		res.send("This is the fallback route.");
	});
};
