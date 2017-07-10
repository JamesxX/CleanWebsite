'use strict';

const express = require('express');
const api = express();

const DynaSass = require('./sass/dynamic.js');

const postAPI = require('./api/posts.js');
const websiteinformationAPI = require('./api/website_information.js');


postAPI(api);
websiteinformationAPI(api);

api.get('/sass', function( req, res ){
	DynaSass();
	res.json(true);
});

module.exports = api;
