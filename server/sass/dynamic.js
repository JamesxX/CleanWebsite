'use strict';

const sass = require('node-sass');
const fs = require('fs');

const conf = require('../conf.js');
const generator = require('./generator.js');

const sassOptionsDefaults = {
	includePaths: ['.'],
	outputStyle:  'compressed'
};

function dynamicSass(scssEntry, variables, handleSuccess, handleError) {
	
	console.log( "Updating CSS file" );
	
	var dataString =
		generator.sassVariables(variables) +
		generator.sassImport(scssEntry);
	
	var sassOptions = Object.assign({}, sassOptionsDefaults, {
		data: dataString
	});

	sass.render(sassOptions, function (err, result) {
		return (err) ? handleError(err) : handleSuccess(result.css.toString());
	});
	
}

function UpdateRenderedSassError( err ){
	
	console.log( "Error rendering new CSS" );
	console.log(err);
	
}

function UpdateRenderedSassSuccess( css ){
	
	console.log( "Saving new CSS file" );
	
	fs.writeFile(conf.sass.out, css, function(err) {
		
		if(err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	}); 
	
}

function UpdateRenderedSassAsync( ){
	
	dynamicSass( 
		conf.sass.path, // Path to sass file to be rendered
		conf.sass.variables, // Table of dynamic variables
		UpdateRenderedSassSuccess, 
		UpdateRenderedSassError
	);
	
}

module.exports = UpdateRenderedSassAsync;
