module.exports = {
	state: {
		test: false,
		production: false,
	},
	server: {
		cookies: {
			maxAge: 1000 * 60 * 60 * 24 * 30,
			name: "MySession",
			secret: "My$€cr€T",
		},
	},
	wall: {
		panels: {
			width: 1,
			height: 1,
			pixels: 18,
		},
		strips: 2,
	},
};
