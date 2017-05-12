require("rootpath")();
const glob = require("glob");

module.exports = (app) => {
	glob("server/routes/!(index).js", (err, items) => {
		items.forEach(item => {
			require(item)(app);
		});
	});

	// Fallback route
	app.route(["/", "/*"]).all((req, res) => {
		res.send("This is the fallback route.");
	});
};
