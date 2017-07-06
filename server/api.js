'use strict';

const express = require('express');
const api = express();

const conf = require('./conf.js');
const post = require('./post.class.js');

var newPost = new post();
newPost.Title = "This is an article";
newPost.Author = "James";
newPost.Timestamp = Math.round(+new Date());
newPost.Media = "media/grass.jpg";
newPost.Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero urna. Praesent auctor vestibulum eros, pretium ultrices quam vulputate in. Phasellus pretium purus massa, vel feugiat lacus eleifend non. Proin porta, lacus pulvinar lobortis luctus, tortor lorem sollicitudin dolor, placerat pharetra nisl sapien nec lectus. Aliquam erat volutpat. Proin auctor dapibus quam, eget tristique nunc pretium a. Vivamus ut elit felis. Suspendisse suscipit molestie vulputate. Aenean purus purus, tempus a urna sollicitudin, tempus varius sapien.",
newPost.Comments = 2;

const Postarray = [
	newPost.output,
	newPost.output,
	newPost.output
]

api.get('/posts', function( req, res ){
	res.json(Postarray);
});

api.get('/title', function( req, res ){
	res.json({
		websiteTitle: conf.websiteTitle,
		websiteTagline: conf.websiteTagline
	});
	
});

api.get('/footer', function( req, res ){
	res.json(conf.websiteFooter) ;
});

module.exports = api;
