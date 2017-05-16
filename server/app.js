require("rootpath")();

// Set default environment to `local`
process.env.NODE_ENV = process.env.NODE_ENV || "local";

const joi = require("joi");
// Validate NODE_ENV
const schema = joi.object({
	NODE_ENV: joi.any()
		.valid([
			"local",
			"development",
			"test",
		])
		.required(),
}).unknown()
	.required();

const { error } = joi.validate(process.env, schema);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

const app = require("express")();
const config = require("config");

// Init middleware
require("./middleware")(app);

// Init routes
require("./routes/")(app);

// Set fallback for errors
app.use(require("./middleware/errorHandler"));

// Init server
app.listen(config.server.port, () => {
	console.log(`Server listening at port ${config.server.port}, running in ${process.env.NODE_ENV} mode.`); // eslint-disable-line no-console
});
