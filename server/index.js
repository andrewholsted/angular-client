"use strict";

let path = require('path');
let assetWorker = require('asset-worker');
let nconf = require('nconf');
let pkg = require('../package.json');
let express = require('express');
let app = express();
let forceHttps = nconf.get('server:https');
let appRouter = require('./routes/app');
let templatesRouter = require('./routes/templates');
let httpsRedirect = require('./middleware/https');

module.exports = function initServer(done){
	// init assets
	let buildDir = path.join(__dirname, '../.build');
	let clientDir = path.join(__dirname, '../client');

	assetWorker.setOptions({
		clientDir: clientDir,
		buildDir: buildDir,
		resourceRoot: nconf.get('app:resourceRoot'),
		optimized: nconf.get('app:optimized'),
		appVersion: pkg.version
	});

	// set app variables
	app.set('views', path.join( __dirname, 'views'));
	app.set('view engine', 'jade');

	// handing static assets
	app.use(express.static(buildDir));

	// middleware
	if(forceHttps){
	  app.use(httpsRedirect);
	}

	// routes
	app.use(appRouter);
	app.use(templatesRouter);


	app.listen(nconf.get('server:port'));
	done();
}