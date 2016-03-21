"use strict";

let fs = require('fs');
let path = require('path');
let router = require('express').Router();
let nconf = require('nconf');

function templates(req, res, next) {
	let clientDir = nconf.get('clientDir');
  let filePath = path.join(clientDir, req.url.replace('.html', '.jade'));

	fs.exists(filePath, function(yes) {
		if (yes) {
			res.render(filePath, {
				doctype:'html'
			});
		}
		else {
			res.status(404).send('Not a template');
		}
	});
}

router.get('/*.html', templates);

module.exports = router;