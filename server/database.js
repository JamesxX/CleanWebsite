'use strict';

const mysql = require('mysql');
const conf = require('./conf.js');

if ( global.pool == undefined ){
	
	global.pool = mysql.createPool(conf.database);
	
}

function getConnection( cb ){
	
	return global.pool.getConnection(cb);
	
}

function query( sqlstring, cb1, cb2 ){
	
	return global.pool.query( sqlstring, cb1, cb2 );
	
}

module.exports = {
	pool: global.pool,
	getConnection: getConnection,
	query: query
};
