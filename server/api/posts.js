'use strict';

const waterfall = require('async-waterfall');

const database = require('../database.js');
const post = require('../classes/post.class.js');

module.exports = function( router ){
	
	router.get('/posts', function( req, res, next){
		
		waterfall([
		
			function(cb){ 
				new post().fromSQL(1).then((data)=>{
					cb(null, data)
				}).catch((err)=>{
					cb(err,post)
				});
			},
			
			function(post, cb){
				post.m_Author.then((data)=>{
					cb(null, post, data);
				}).catch((err)=>{
					cb(err,post)
				});
			},
			
			function(post, author, cb){
				author.m_Usergroup.then((data)=>{
					cb(null, post, author, data);
				}).catch((err)=>{
					cb(err,post, author)
				});
			}
			
		], function(err, post, author, usergroup){
			if (err) console.log(err);
			author.Usergroup = usergroup;
			post.Author = author;
			res.json( [post.output] );
		});
		
	});
	
};

