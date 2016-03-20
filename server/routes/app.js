"use strict";

let router = require('express').Router();
let assetWorker = require('asset-worker');

function app(req, res, next){
	assetWorker.getPaths('app', req, function(err, paths) {
		if (err) {
			return next(err);
		}

		res.render('pages/app', {
			title: 'AngularJS Framework',
			paths: paths
		});
	});
}

router.use(app);

module.exports = router;



