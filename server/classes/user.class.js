'use strict';

const promise = require('promise');
const usergroup = require('./usergroup.class.js');
const database = require('../database.js');

var SQL = "SELECT * FROM `users` WHERE `userid` = ? LIMIT 1";

class user{
	
	constructor(){
		
		this.m_UserID = 0;
		this.m_Username = "#NO_NAME_DEFINED";
		this.m_JoinDate = 0;
		this.m_Usergroup = new usergroup();
		
	}
	
	fromSQL( userID ){
		var me = this;

		return new promise(function(fulfill, reject){
			
			database.query( SQL, [userID], function(error, results, fields){
				
				if (error) reject(error);
				fulfill( me.fromRow( results[0] ) );
				
			});
		});
	}
	
	fromRow( row ){
		
		this.UserID = row.userid;
		this.Username = row.username;
		this.JoinDate = row.joindate;
		this.Usergroup = new usergroup().fromSQL(row.usergroupid);

		return this
		
	}
	
	set UserID(_newUserID) { this.m_UserID = _newUserID; }
	set Username(_newUsername) { this.m_Username = _newUsername; }
	set JoinDate(_newJoinDate) { this.m_JoinDate = _newJoinDate; }
	set Usergroup(_newUsergroup) { this.m_Usergroup = _newUsergroup; }
	
	get output(){
		
		return{
			userid: this.m_UserID,
			username: this.m_Username,
			joindate: this.m_JoinDate,
			usergroup: this.m_Usergroup.output
		};

	}
	
}

module.exports = user;
