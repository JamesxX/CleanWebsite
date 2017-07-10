'use strict';

const conf = require('../conf.js');

module.exports = function( router ){

	router.get('/title', function( req, res ){
		res.json({
			websiteTitle: conf.websiteTitle,
			websiteTagline: conf.websiteTagline
		});
		
	});

	router.get('/footer', function( req, res ){
		res.json(conf.websiteFooter);
	});
	
};
