const config = require(process.env.PWD + "/config");

const splitPerPanel = (pixels) => {
	const numberOfPanels = config.wall.panels.width * config.wall.panels.height;
	const pixelsPerRow = pixels.length / config.wall.panels.height;

	process._rawDebug("numberOfPanels", numberOfPanels);
	const result = [
		[],
		[],
		[],
		[],
		[],
		[],
	];
	let rows = [];

	while (pixels.length > 0) {
		rows.push(pixels.splice(0, pixelsPerRow));
	}

	console.log("rows", rows);

	rows.map((row, i) => {
		row.map((pix, j) => {
			console.log("pix", pix);
			console.log("panel", Math.round(j / config.wall.panels.pixels));

			result[Math.round(j / config.wall.panels.pixels)].push(pix);
		});
		process._rawDebug("---------------------------------");
		// console.log("counter", counter);
		// // console.log("res", res);
		// // console.log("item", item);
		// // console.log("counter", counter);
		// // if (counter % config.wall.panels.pixels === 0 && counter !== 0) {
		// if (counter % config.wall.panels.pixels === 0 && counter !== 0) {
		// 	res.push([]);
		// }
		// console.log("eeuh", counter % numberOfPanels);

		// res[res.length - 1].push(item);
		// return res;
		// result[counter % numberOfPanels].push(item);
	});

	return result;
};

module.exports = (pixels) => {
	let rows = [];

	// Loop over the pixels
	while (pixels.length > 0) {
		// Push pixels combined per length of each panel
		rows.push(pixels.splice(0, config.wall.panels.pixelsPerRow));
	}

	// Loop over the rows
	rows.map((row, i) => {
		// Check if this is an odd row
		if (i % 2 !== 0) {
			// Reverse odd rows
			row = row.reverse();
		}
		return row;
	});

	// Combine all rows
	pixels = [].concat.apply([], rows);

	return pixels;
};
