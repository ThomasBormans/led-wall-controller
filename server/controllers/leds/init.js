// const pixelpusher = require("heroic-pixel-pusher");
const calculatePixels = require(process.env.PWD + "/server/helpers/pixels");
// const mapping = [49, 30, 29, 10, 9, 59, 60, 79, 80, 99, 48, 31, 28, 11, 8, 58, 61, 78, 81, 98, 47, 32, 27, 12, 7, 57, 62, 77, 82, 97, 46, 33, 26, 13, 6, 56, 63, 76, 83, 96, 45, 34, 25, 14, 5, 55, 64, 75, 84, 95, 44, 35, 24, 15, 4, 54, 65, 74, 85, 94, 43, 36, 23, 16, 3, 53, 66, 73, 86, 93, 42, 37, 22, 17, 2, 52, 67, 72, 87, 92, 41, 38, 21, 18, 1, 51, 68, 71, 88, 91, 40, 39, 20, 19, 0, 50, 69, 70, 89, 90];
const map = require(process.env.PWD + "/server/helpers/map");
const _ = require("lodash");

calculatePixels(process.env.PWD + "/icon.png")
	.then(map)
	.then(function onSuccess(pixels) {
		console.log("pixels", JSON.stringify(pixels));
	});

module.exports = (PixelPusher, controller) => {
	const NUM_STRIPS = controller.params.pixelpusher.numberStrips;

	console.log("NUM_STRIPS", NUM_STRIPS);

	// aquire the number of pixels we that the controller reports is
	// in each strip. This is set in the pixel.rc file placed on your thumb drive.
	const PIXELS_PER_STRIP = controller.params.pixelpusher.pixelsPerStrip;

	console.log("PIXELS_PER_STRIP", PIXELS_PER_STRIP);

	// create a loop that will send commands to the PP to update the strip
	const UPDATE_FREQUENCY_MILLIS = 120;// 15 is just faster than 60 FPS
	// const UPDATE_FREQUENCY_MILLIS = 30;// 15 is just faster than 60 FPS

	calculatePixels(process.env.PWD + "/icon.png")
		.then(map)
		.then(function onSuccess(pixels) {
			// console.log("pixels", JSON.stringify(pixels));
			// let strips = [];
			// let lines = {
			// 	line0: new PixelPusher.PixelStrip(0, PIXELS_PER_STRIP),
			// 	// line1: new PixelPusher.PixelStrip(1, PIXELS_PER_STRIP),
			// };

			// for (let pixelId = 0; pixelId < pixels.length; pixelId++) {
			// 	// let line = "line" + 0;
			// 	// let transformed = mapping[pixelId];

			// 	// if (transformed >= 50) {
			// 	// 	line = "line" + 1;
			// 	// 	transformed -= 50;
			// 	// }

			// 	// pixels[pixelId][3] = (pixels[pixelId][3] - 255) * -1;
			// 	// lines[line].getPixel(transformed).setColor(
			// 	// 	pixels[pixelId][0],
			// 	// 	pixels[pixelId][1],
			// 	// 	pixels[pixelId][2],
			// 	// 	pixels[pixelId][3]
			// 	// );
			// }
			// let line = new PixelPusher.PixelStrip(0, PIXELS_PER_STRIP);
			// let strips = [];

			// for (let stripId = 0; stripId < NUM_STRIPS; stripId++) {
			// 	let s = new PixelPusher.PixelStrip(stripId, PIXELS_PER_STRIP);
			// 	// set a random pixel blue

			// 	// s.getRandomPixel().setColor(255, 255, 255, 0.1);
			// 	// // render the strip data into the correct format for sending
			// 	pixels.forEach((pix, i) => {
			// 		s.getPixel(i).setColor(
			// 			pix[0],
			// 			pix[1],
			// 			pix[2],
			// 			pix[3]
			// 		);
			// 	});

			// 	// to the pixel pusher controller
			// 	let renderedStripData = s.getStripData();

			// 	// add this data to our list of strip data to send
			// 	strips.push(renderedStripData);
			// }


			// let renderedStripData = lines.line0.getStripData();

			// // strips.push(renderedStripData);

			// renderedStripData = lines.line1.getStripData();
			// strips.push(renderedStripData);

			// controller.refresh(strips);


			let timer;
			let counter = 0;

			timer = setInterval(function() {
				counter += 1;
				let strips = [];

				for (let stripId = 0; stripId < NUM_STRIPS; stripId++) {
					let s = new PixelPusher.PixelStrip(stripId, PIXELS_PER_STRIP);
					// set a random pixel blue
					// s.getRandomPixel().setColor(255,255,255,1);
					// s.setStripColor(255,255,255,0.5);
					// console.log("s", s);
					// console.log("1 pixel", s.getPixel(0));

					for (let ledId = 0; ledId < PIXELS_PER_STRIP; ledId++) {
						// // rgb(211, 34, 50)
						// // s.getPixel(ledId).setColor(128, 0, 0, 1);
						s.getPixel(ledId).setColor(_.random(0, 255), _.random(0, 255), _.random(0, 255), (_.random(1, 10) / 10));
						// if (counter % 2 === 0) {
						// 	s.getPixel(ledId).setColor(128, 0, 0, 0.5);
						// } else {
						// 	s.getPixel(ledId).setColor(0, 128, 0, 0.5);
						// }
					}
					// s.getRandomPixel().setColor(_.random(0, 255), _.random(0, 255), _.random(0, 255), (_.random(1, 10) / 10));
					// s.getPixel(1).setColor(211, 34, 50, 0.5);
					// console.log("s.setStripColor", s.setStripColor);
					// s.setStripColor(17,17,17,1);
					// s.setStripColor(211,34,50,1);
					// s.setColor(255,255,255,1);
					// render the strip data into the correct format for sending
					// to the pixel pusher controller
					let renderedStripData = s.getStripData();
					// add this data to our list of strip data to send

					strips.push(renderedStripData);
				}
				// inform the controller of the new strip frame
				controller.refresh(strips);
			}, UPDATE_FREQUENCY_MILLIS);

			// log connection data on initial discovery
			console.log("-----------------------------------");
			console.log("Discovered PixelPusher on network: ");
			console.log(controller.params.pixelpusher);
			console.log("-----------------------------------");

		});
};
