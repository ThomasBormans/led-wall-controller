const config = require(process.env.PWD + "/config");
const sharp = require("sharp");

const parse = (response) => {
	try {
		response = JSON.parse(JSON.stringify(response));
		if (response.hasOwnProperty("data")) {
			return response.data;
		} else {
			throw "Unable to parse image";
		}
	} catch (e) {
		throw "Unable to parse image";
	}
};

const map = (response) => {
	return response.reduce(function(a, b, c) {
		if (c % 4 === 0 && c !== 0) {
			a.push([]);
		}
		a[a.length - 1].push(b);
		return a;
	}, [[]]);
};

module.exports = (path) => {
	return new Promise((resolve, reject) => {
		const width = config.wall.panels.width * config.wall.panels.pixels;
		const height = config.wall.panels.height * config.wall.panels.pixels;

		sharp(path)
			.resize(width, height)
			.raw()
			.toBuffer()
			.then(parse)
			.then(map)
			.then(resolve)
			.catch(reject);
	});
};
