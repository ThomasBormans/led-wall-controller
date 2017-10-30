const PixelPusher = require("heroic-pixel-pusher");
// const calculatePixels = require(process.env.PWD + "/server/helpers/pixels");
// const mapping = [49, 30, 29, 10, 9, 59, 60, 79, 80, 99, 48, 31, 28, 11, 8, 58, 61, 78, 81, 98, 47, 32, 27, 12, 7, 57, 62, 77, 82, 97, 46, 33, 26, 13, 6, 56, 63, 76, 83, 96, 45, 34, 25, 14, 5, 55, 64, 75, 84, 95, 44, 35, 24, 15, 4, 54, 65, 74, 85, 94, 43, 36, 23, 16, 3, 53, 66, 73, 86, 93, 42, 37, 22, 17, 2, 52, 67, 72, 87, 92, 41, 38, 21, 18, 1, 51, 68, 71, 88, 91, 40, 39, 20, 19, 0, 50, 69, 70, 89, 90];
let controller;

new PixelPusher()
	.on("discover", (pixelController) => {
		controller = pixelController;
		require(process.env.PWD + "/server/controllers/leds/init")(PixelPusher, controller);
	})
	.on("error", (err) => {
		throw new Error("Pixelpusher Error: " + err.message);
	});

module.exports = {
	PixelPusher,
	controller,
};
