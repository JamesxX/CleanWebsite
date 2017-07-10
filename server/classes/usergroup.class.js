'use strict';

const promise = require('promise');
const database = require('../database.js');

var SQL = "SELECT * FROM `usergroups` WHERE `usergroupid` = ? LIMIT 1";

class usergroup{
	
	constructor(){
		
		this.m_UsergroupID = 0;
		this.m_UsergroupName = "#NO_NAME_DEFINED";
		this.m_Color = '606060';
		
		this.m_CanAdmin = 0;
		this.m_CanPost = 0;
		this.m_CanComment = 0;
		
	}
	
	fromSQL( usergroupID ){
		var me = this;

		return new promise(function(fulfill, reject){
			database.query( SQL, [usergroupID], function(error, results, fields){
				
				if (error) reject(error);
				fulfill( me.fromRow( results[0] ) );
				
			});
		});
	}
	
	fromRow( row ){
		this.UsergroupID = row.usergroupid;
		this.UsergroupName = row.usergroup;
		this.Color = row.color;
		this.CanAdmin = row.canadmin;
		this.CanPost = row.canpost;
		this.CanComment = row.cancomment;
		
		return this
	}
	
	set UsergroupID(_newUsergroupID) { this.m_UsergroupID = _newUsergroupID; }
	set UsergroupName(_newUsergroupName) { this.m_UsergroupName = _newUsergroupName; }
	set Color(_newColor) { this.m_Color = _newColor; }
	set CanAdmin(_newCanAdmin) { this.m_CanAdmin = _newCanAdmin; }
	set CanPost(_newCanPost) { this.m_CanPost = _newCanPost; }
	set CanComment(_newCanComment) { this.m_CanComment = _newCanComment; }
	
	get output(){
		
		return {
			usergroupid: this.m_UsergroupID,
			usergroupname: this.m_UsergroupName,
			color: this.m_Color,
			canadmin: this.m_CanAdmin,
			canpost: this.m_CanPost,
			cancomment: this.m_CanComment
		};
	}
	
}

module.exports = usergroup;
