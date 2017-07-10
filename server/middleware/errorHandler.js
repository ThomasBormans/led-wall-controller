module.exports = function(err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}

	res.status(500).json({
		err: (err.message ? err.message : "Something unexpected happened."),
	});
	return;
};
