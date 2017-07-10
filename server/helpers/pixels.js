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
		if (c % 4 == 0 && c !== 0) {
			a.push([]);
		}
		a[a.length - 1].push(b);
		return a;
	}, [[]]);
};

module.exports = (path, width, height) => {
	return new Promise((resolve, reject) => {
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
