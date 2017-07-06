'use strict';
const generator = {}

generator.sassVariable = function (name, value) {
	return "$" + name + ": " + value + ";";
}

generator.sassVariables = function (variablesObj) {
	return Object.keys(variablesObj).map(function (name) {
		return generator.sassVariable(name, variablesObj[name]);
	}).join('\n')
}

generator.sassImport = function (path) {
	return "@import '" + path + "';";
}

module.exports = generator;
