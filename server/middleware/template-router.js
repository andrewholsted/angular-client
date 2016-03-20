"use strict";

var fs = require('fs');
var path = require('path');
var router = require('express').Router;

function templates(req, res) {
  var filePath = path.join(app.get('clientDir'), req.url.replace('.html', '.jade'));

	fs.exists(filePath, function(yes) {
		if (yes) {
			res.render(filePath, {
				hostname: app.get('hostname'),
				doctype:'html'
			});
		}
		else {
			res.status(404).send('Not a template');
		}
	});
}

router.use('/*.html', templates);

module.exports = router;