"use strict";

let router = require('express').Router();
let assetWorker = require('asset-worker');
let nconf = require('nconf');

function app(req, res, next){
	assetWorker.getPaths('app', req, function(err, paths) {      
		if (err) {
			return next(err);
		}

		res.render('pages', {
			title: 'AngularJS Client',
			paths: paths,
      platformUrl: nconf.get('client:platformUrl')
		});
	});
}

router.get('/', app);

module.exports = router;



