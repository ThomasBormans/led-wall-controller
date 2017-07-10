require("rootpath")();
const glob = require("glob");

const CoreController = require("server/controllers/core");

module.exports = (app) => {
	glob.sync("server/routes/!(index).js").forEach(route => {
		require(route)(app);
	});

	/**
	 * @swagger
	 * /status:
	 *   get:
	 *     description: Status call of the server
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: success
	 *         description: Success boolean
	 *         in: body
	 *         required: true
	 *         type: boolean
	 *       - name: version
	 *         description: App version
	 *         in: body
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: OK
	 */
	app.route("/status").get(CoreController.status);

	if (process.env.NODE_ENV === "local") { // Only allow docs in local environment
		/**
		 * @swagger
		 * /docs:
		 *   get:
		 *     description: Documentation of all API's
		 *     produces:
		 *       - text/html
		 *     responses:
		 *       200:
		 *         description: OK
		 */
		app.route("/docs").get(CoreController.docs);
	}

	// Fallback route
	app.route(["/", "/*"]).all((req, res) => {
		res.send("This is the fallback route.");
	});
};
