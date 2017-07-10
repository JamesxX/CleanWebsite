'use strict';

const promise = require('promise');
const user = require('./user.class.js');
const database = require('../database.js');

var SQL = "SELECT * FROM `posts` WHERE `postid` = ? LIMIT 1";

class post{
	
	constructor(){
		
		this.m_PostID = 0;
		this.m_Title = "#NO_TITLE_DEFINED";
		this.m_Author = new user();
		this.m_Timestamp = 0;
		
		this.m_Media = "media/undefined.jpg";
		this.m_Content = "#NO_CONTENT_DEFINED";
		this.m_Comments = 0;
		
	}
	
	fromSQL( postID ){
		var me = this;

		return new promise(function(fulfill, reject){
			
			database.query( SQL, [postID], function(error, results, fields){
				
				if (error) reject(error);
				fulfill( me.fromRow( results[0] ) );
				
			});
		});
	}
	
	fromRow( row ){
		this.PostID = row.postid;
		this.Title = row.title;
		this.Author = new user().fromSQL(row.authorid);
		this.Timestamp = row.timestamp;
		this.Media = row.media;
		this.Content = row.content;
		this.Comments = row.comments;
		
		return this;
	}
	
	set PostID(_newID) { this.m_PostID = _newID; }
	set Title(_newTitle) { this.m_Title = _newTitle; }
	set Author(_newAuthor) { this.m_Author = _newAuthor; }
	set Timestamp(_newTimestamp) { this.m_Timestamp = _newTimestamp; }
	set Media(_newMedia) { this.m_Media = _newMedia; }
	set Content(_newContent) { this.m_Content = _newContent; }
	set Comments(_newComments) { this.m_Comments = _newComments; }
	
	get output(){
	
		return {
			id: this.m_PostID,
			title: this.m_Title,
			author: this.m_Author.output,
			pubdate: this.m_Timestamp,
			
			media: this.m_Media,
			content: this.m_Content,
			comments: this.m_Comments
		};
	}
	
}

module.exports = post;
